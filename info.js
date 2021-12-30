module.exports = {
    "key": "godo_crons",
    "dir": __dirname,
    "info": {
        "author": "godocms",
        "url": "https://godocms.com",
        "email" : "4294979@qq.com"
    },
    "url": "cron",
    "type": "sys",
    "name": "计划任务",
    "sql": "data/init.sql",
    "menu": {
        "title": "计划任务",
        "key": "crons",
        "route": "crons/index/list",
        "href": "/p/crons/list.html",
        "type": 1,
        "order_num": 9,
        "icon": "layui-icon layui-icon-android",
        "lid": 1,
        "pid" : 2,
        "ifshow": 0,
        "desktop": 0,
        "child": [
            {
                "title": "计划任务添加",
                "key": "crons",
                "route": "crons/index/add",
                "href": "",
                "type": 3,
                "order_num": 0,
                "icon": "",
                "lid": 1,
                "ifshow": 0,
                "desktop": 0
            },
            {
                "title": "计划任务编辑",
                "key": "crons",
                "route": "crons/index/edit",
                "href": "",
                "type": 3,
                "order_num": 0,
                "icon": "",
                "lid": 1,
                "ifshow": 0,
                "desktop": 0
            },
            {
                "title": "计划任务删除",
                "key": "crons",
                "route": "crons/index/del",
                "href": "",
                "type": 3,
                "order_num": 0,
                "icon": "",
                "lid": 1,
                "ifshow": 0,
                "desktop": 0
            },
            {
                "title": "计划任务编辑前",
                "key": "crons",
                "route": "crons/index/editBefore",
                "href": "",
                "type": 3,
                "order_num": 0,
                "icon": "",
                "lid": 1,
                "ifshow": 0,
                "desktop": 0
            },
            {
                "title": "开启关闭计划任务",
                "key": null,
                "route": "crons/index/enable",
                "href": "",
                "type": 3,
                "order_num": 0,
                "icon": "layui-icon layui-icon-mute",
                "lid": 1,
                "ifshow": 0,
                "desktop": 0
            }
        ]
    }
}