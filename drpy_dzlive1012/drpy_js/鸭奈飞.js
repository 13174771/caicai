
{
    "规则名": "耐看点播",
    "规则作者": "香雅情",
    "请求头参数": "MOBILE_UA",
    "网页编码格式": "UTF-8",
    "图片是否需要代理": "否",
    "是否开启获取首页数据": "1",
    "首页推荐链接": "https://yanaifei.tv",
    "首页列表数组规则": "body&&.module-main.tab-list.active",
    "首页片单列表数组规则": ".module-item",
    "首页片单是否Jsoup写法": "1",
    "分类起始页码": "1",
    "分类链接": "https://yanaifei.tv/vod/show/{cateId}--------{catePg}---.html",
    "分类名称": "电影&电视剧&动漫&综艺",
    "分类名称替换词": "1&2&4&3",
    "筛选数据": {},
    "分类截取模式": "1",
    "分类列表数组规则": "body&&.module-item",
    "分类片单是否Jsoup写法": "是",
    "分类片单标题": ".module-poster-item-title&&Text",
    "分类片单链接": "a&&href",
    "分类片单图片": ".lazyload&&data-original",
    "分类片单副标题": ".module-item-note&&Text",
    "分类片单链接加前缀": "https://yanaifei.tv",
    "分类片单链接加后缀": "",
    "搜索请求头参数": "User-Agent$MOBILE_UA",
    "搜索链接": "https://yanaifei.tv/index.php/ajax/suggest?mid=1&wd={wd}",
    "POST请求数据": "wd={wd}&search=",
    "搜索截取模式": "0",
    "搜索列表数组规则": "list",
    "搜索片单是否Jsoup写法": "1",
    "搜索片单图片": "pic",
    "搜索片单标题": "name",
    "搜索片单链接": "id",
    "搜索片单副标题": "",
    "搜索片单链接加前缀": "https://yanaifei.tv/vod/detail/",
    "搜索片单链接加后缀": ".html",
    "链接是否直接播放": "否",
    "直接播放链接加前缀": "https://live.52sf.ga/huya/",
    "直接播放链接加后缀": "#isVideo=true#",
    "直接播放直链视频请求头": "authority$ku.peizq.online#Referer$https://play.peizq.online",
    "详情是否Jsoup写法": "是",
    "类型详情": "",
    "年代详情": ".module-info-content&&.module-info-item,3&&Text",
    "地区详情": "",
    "演员详情": ".module-info-content&&.module-info-item,2&&Text",
    "简介详情": ".module-info-content&&.module-info-item&&Text",
    "线路列表数组规则": ".module-tab-items-box&&.module-tab-item",
    "线路标题": "Text",
    "播放列表数组规则": "body&&.module-play-list-content",
    "选集列表数组规则": "a",
    "选集标题链接是否Jsoup写法": "是",
    "选集标题": "a&&Text",
    "选集链接": "a&&href",
    "是否反转选集序列": "否",
    "选集链接加前缀": "https://yanaifei.tv",
    "选集链接加后缀": "",
    "分析MacPlayer": "2",
    "是否开启手动嗅探": "否",
    "手动嗅探视频链接关键词": ".mp4#.m3u8#.flv",
    "手动嗅探视频链接过滤词": ".html#=http"
}