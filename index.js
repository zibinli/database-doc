'use strict';
const fs = require('fs');
const mysql = require('mysql');
const args = process.argv.slice(2);
let mysqlurl = args.pop();
try {
    mysqlurl = mysqlurl.substr(1, mysqlurl.length - 2);
    let mysqlurlArr = mysqlurl.split('/');
    let schema = mysqlurlArr[3];
    let output = args.pop() || schema + '.md';

    const tableQuery = fs.readFileSync('table.sql', 'utf-8');
    const columnQuery = fs.readFileSync('column.sql', 'utf-8');

    const markdown = fs.createWriteStream(output);
    const connection = mysql.createConnection(mysqlurl)

    markdown.once('open', () => {
        connection.connect();
        connection.query(tableQuery, [schema], (e, tables) => {
            if (e) throw e;
            tables.forEach((table, i) => {
                let tableName = table.table_name;
                connection.query(columnQuery, [schema, tableName], (e, columns) => {
                    console.log(`${i + 1}\t${tableName}`);
                    if (e) throw e;
                    markdown.write(`## ${i + 1}、 ${tableName}\n`);
                    markdown.write(`${table.table_comment}\n\n`);
                    markdown.write(`| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  \n`);
                    markdown.write(`| - | - | - | - | - | - |  \n`);
                    columns.forEach((column, ii) => {
                        markdown.write(`| ${ii + 1} `);
                        markdown.write(`| ${column.column_name} `);
                        markdown.write(`| ${column.column_type} `);
                        markdown.write(`| ${column.is_primary} `);
                        markdown.write(`| ${column.is_nullable} `);
                        markdown.write(`| ${column.column_comment} `);
                        markdown.write(`|  \n`);
                    });
                    markdown.write(`\n\n`);
                    if (i == tables.length - 1) {
                        connection.end();
                        markdown.end();
                        console.log('\ndone')
                    }
                });
            });
        });
    });
} catch (err) {
    console.error({msg: err.stack, url: mysqlurl})
}