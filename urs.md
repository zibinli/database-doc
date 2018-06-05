## 1、 cdb_course_user


| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  
| - | - | - | - | - | - |  
| 1 | id | int(10) unsigned | YES | NO |  |  
| 2 | course_id | int(10) unsigned | NO | NO | 课程ID |  
| 3 | username | varchar(30) | NO | NO | 用户名 |  
| 4 | password | varchar(32) | NO | NO | 密码 |  
| 5 | passwd | varchar(179) | NO | NO | 原始密码 |  
| 6 | nickname | varchar(32) | NO | NO | 昵称 |  
| 7 | time | int(10) unsigned | NO | NO | 添加时间 |  


## 2、 cdb_live_user


| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  
| - | - | - | - | - | - |  
| 1 | id | int(10) unsigned | YES | NO |  |  
| 2 | roomid | int(10) unsigned | NO | NO | 房间ID |  
| 3 | username | varchar(30) | NO | NO | 用户名 |  
| 4 | password | char(32) | NO | NO | 密码 |  
| 5 | passwd | varchar(179) | NO | NO | 原始密码 |  
| 6 | nickname | varchar(32) | NO | NO | 昵称 |  
| 7 | time | int(10) unsigned | NO | NO | 添加时间 |  


## 3、 cdb_partner


| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  
| - | - | - | - | - | - |  
| 1 | id | mediumint(8) unsigned | YES | NO |  |  
| 2 | name | char(20) | NO | NO |  |  
| 3 | pinyin | varchar(50) | NO | NO |  |  
| 4 | shortName | varchar(20) | NO | NO |  |  
| 5 | shortPinyin | varchar(30) | NO | NO |  |  
| 6 | type | tinyint(3) unsigned | NO | NO | 合作方类型，1内部测试，2接入客户，3试用客户 |  
| 7 | status | tinyint(3) unsigned | NO | NO | 状态：正常，关闭 |  
| 8 | class | tinyint(3) unsigned | NO | NO | 合作级别 |  
| 9 | isLive | tinyint(3) unsigned | NO | NO | 1表示支持直播 0不支持 |  
| 10 | partner_domain | varchar(50) | NO | YES | 合作方域名限制 |  
| 11 | loginApi | varchar(128) | NO | YES | 绑定主播登陆接口 |  
| 12 | max_room | int(10) unsigned | NO | NO | 最大房间数 |  
| 13 | max_user | int(10) unsigned | NO | NO | 最大在线用户数 |  
| 14 | max_zhubo | int(10) unsigned | NO | NO | 最大主播数 |  
| 15 | software_key | varchar(255) | NO | NO | 软件上的合作商识别码 |  
| 16 | auth_key | varchar(255) | NO | NO | 用户验证字符串 |  
| 17 | create_time | date | NO | NO |  |  
| 18 | expire_time | date | NO | YES | 服务过期时间 |  
| 19 | info | varchar(255) | NO | YES | 注释 |  
| 20 | socketAddress | varchar(255) | NO | NO | 合作商socket地址 |  
| 21 | powerStr | varchar(30) | NO | NO | 权限链 |  
| 22 | defaultMode | tinyint(4) | NO | NO | 默认启动模式 |  
| 23 | voiceSwitch | tinyint(3) unsigned | NO | NO | 语音模式开关 |  
| 24 | voiceFlow | tinyint(3) unsigned | NO | NO | 语音模式 |  
| 25 | callbackApi | varchar(255) | NO | YES |  |  
| 26 | departmentPower | tinyint(3) unsigned | NO | NO | 是否拥有部门权限，0表示没有，1表示有 |  
| 27 | mode | tinyint(3) unsigned | NO | NO | 接入模式：1房间模式，2课程模式 |  


## 4、 cdb_partner_copy


| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  
| - | - | - | - | - | - |  
| 1 | id | mediumint(8) unsigned | YES | NO |  |  
| 2 | name | char(20) | NO | NO |  |  
| 3 | type | tinyint(3) unsigned | NO | NO | 合作方类型，1内部测试，2接入客户，3试用客户 |  
| 4 | status | tinyint(3) unsigned | NO | NO | 状态：正常，关闭 |  
| 5 | class | tinyint(3) unsigned | NO | NO | 合作级别 |  
| 6 | isLive | tinyint(3) unsigned | NO | NO | 1表示支持直播 0不支持 |  
| 7 | partner_domain | varchar(50) | NO | YES | 合作方域名限制 |  
| 8 | loginApi | varchar(128) | NO | YES | 绑定主播登陆接口 |  
| 9 | max_room | int(10) unsigned | NO | NO | 最大房间数 |  
| 10 | max_user | int(10) unsigned | NO | NO | 最大在线用户数 |  
| 11 | max_zhubo | int(10) unsigned | NO | NO | 最大主播数 |  
| 12 | software_key | varchar(255) | NO | NO | 软件上的合作商识别码 |  
| 13 | auth_key | varchar(255) | NO | NO | 用户验证字符串 |  
| 14 | create_time | date | NO | NO |  |  
| 15 | expire_time | date | NO | YES | 服务过期时间 |  
| 16 | info | varchar(255) | NO | YES | 注释 |  
| 17 | socketAddress | varchar(255) | NO | NO | 合作商socket地址 |  
| 18 | powerStr | varchar(30) | NO | NO | 权限链 |  
| 19 | defaultMode | tinyint(4) | NO | NO | 默认启动模式 |  
| 20 | voiceSwitch | tinyint(3) unsigned | NO | NO | 语音模式开关 |  
| 21 | voiceFlow | tinyint(3) unsigned | NO | NO | 语音模式 |  
| 22 | callbackApi | varchar(255) | NO | YES |  |  
| 23 | departmentPower | tinyint(3) unsigned | NO | NO | 是否拥有部门权限，0表示没有，1表示有 |  
| 24 | mode | tinyint(3) unsigned | NO | NO | 接入模式：1房间模式，2课程模式 |  


## 5、 cdb_partner_ext


| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  
| - | - | - | - | - | - |  
| 1 | partner_id | int(10) unsigned | YES | NO |  |  
| 2 | liveTimeLimit | int(10) unsigned | NO | NO | 直播时长限制 |  
| 3 | avatar | varchar(255) | NO | NO | 用户头像地址模板 |  
| 4 | chatCoefficient | float(5,2) unsigned | NO | NO | 聊天系数 |  
| 5 | chatInterval | tinyint(3) unsigned | NO | NO | 聊天间隔 |  
| 6 | vodMaxUser | int(10) unsigned | NO | NO | 回放最高在线人数 |  


## 6、 cdb_zhubo


| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  
| - | - | - | - | - | - |  
| 1 | bid | int(10) unsigned | YES | NO |  |  
| 2 | sid | tinyint(4) unsigned | NO | NO | 头像服务器ID |  
| 3 | thirdAccount | varchar(32) | NO | YES | 第三方绑定帐号 |  
| 4 | nickname | varchar(20) | NO | NO |  |  
| 5 | partner_id | int(10) unsigned | NO | NO | 合作商id |  
| 6 | power | int(10) unsigned | NO | NO |  |  
| 7 | createTime | int(10) unsigned | NO | NO | 创建时间 |  
| 8 | expireTime | int(10) unsigned | NO | NO |  |  
| 9 | password | char(32) | NO | NO | 密码 |  
| 10 | passwd | char(179) | NO | NO | 原始密码 |  
| 11 | state | tinyint(3) unsigned | NO | NO | 主播状态 |  
| 12 | info | varchar(30) | NO | NO |  |  
| 13 | scoreNum | int(10) unsigned | NO | NO |  |  
| 14 | scoreTotal | int(10) unsigned | NO | NO |  |  
| 15 | contentScore | int(10) unsigned | NO | NO |  |  
| 16 | methodScore | int(10) unsigned | NO | NO |  |  
| 17 | effectScore | int(10) unsigned | NO | NO |  |  
| 18 | flower | int(10) unsigned | NO | NO | 收花数量 |  
| 19 | intro | varchar(255) | NO | YES |  |  
| 20 | departmentID | int(11) unsigned | NO | NO | 部门ID，0为没有部门 |  
| 21 | status | tinyint(4) | NO | NO | 主播级别状态-1删除0正常 |  
| 22 | portraitUpdate | int(10) unsigned | NO | NO | 头像更新时间 |  


## 7、 cdb_zhubo_entrance_bind


| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  
| - | - | - | - | - | - |  
| 1 | id | int(10) unsigned | YES | NO |  |  
| 2 | bid | int(10) unsigned | NO | NO |  |  
| 3 | addTime | int(10) unsigned | NO | NO |  |  


## 8、 cdb_zhubo_ext


| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  
| - | - | - | - | - | - |  
| 1 | bid | int(10) unsigned | YES | NO | 主播id |  
| 2 | camera | tinyint(3) unsigned | NO | NO | 新版摄像头配置 |  
| 3 | isLimit | tinyint(3) unsigned | NO | NO | 是否设置观看限制 |  
| 4 | limitType | tinyint(3) unsigned | NO | NO | 观看限制类型 |  
| 5 | config | varchar(1024) | NO | NO | 其他配置 |  


## 9、 cdb_zhubo_power


| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  
| - | - | - | - | - | - |  
| 1 | pid | int(10) unsigned | NO | NO | partner id |  
| 2 | bid | int(10) unsigned | YES | NO | zhubo id |  
| 3 | power | tinyint(3) unsigned | YES | NO |  |  


## 10、 cdb_zhubo_user


| 序号 | 列名 | 类型 | 是否主键 | 是否可为空 | 说明 |  
| - | - | - | - | - | - |  
| 1 | id | int(10) unsigned | YES | NO |  |  
| 2 | bid | int(10) unsigned | NO | NO | 主播ID |  
| 3 | username | varchar(30) | NO | NO | 用户名 |  
| 4 | password | char(32) | NO | NO | 密码 |  
| 5 | passwd | varchar(179) | NO | NO | 原始密码 |  
| 6 | nickname | varchar(32) | NO | NO | 昵称 |  
| 7 | time | int(10) unsigned | NO | NO | 添加时间 |  


