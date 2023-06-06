const Router = require("express").Router();
const { fiveFiveFiveVideo } = require("@/core");

/**
 * @api {post} /video/search 模糊搜索视频
 * @apiName search
 * @apiVersion 0.1.0
 * @apiGroup 视频
 *
 * @apiBody {String} keywords 模糊搜索关键字
 * @apiBody {Number{1-9999}} [pageNum=1] 当前页
 *
 * @apiSuccessExample 响应数据
  {
      "list": [
        {
            "classify": "电影", // 分类
            "cover": "https://t1.szrtcpa.com/2023/01/11/c77a81ab42a0d.jpg", // 封面
            "detailUrl": "/voddetail/408059.html", // 详情地址
            "title": "超凡蜘蛛侠普通话版", // 标题
            "releaseTime": "2012 ", // 上映时间
            "country": "美国 ", // 国家
            "tags": [ // 标签
                " 科幻"
            ],
            "performer": [ // 演员
                "安德鲁·加菲尔德",
                "艾玛·斯通",
                "瑞斯·伊凡斯",
                "丹尼斯·利瑞",
                "马丁·辛"
            ]
        },
      ],
      "pageNum": 1, // 当前页
      "pageSize": 16, // 每页条数
      "total": 13 // 数据总数
  }
 */
Router.post("/search", (req, res) => {
  const body = req.body;
  fiveFiveFiveVideo
    .search({ keywords: body.keywords, pageNum: body.pageNum })
    .then((data) => {
      res.send(data);
    });
});

/**
 * @api {post} /video/getDetailInfo 获取视频详情
 * @apiName getDetailInfo
 * @apiVersion 0.1.0
 * @apiGroup 视频
 *
 * @apiBody {String} detailUrl 详情地址（/video/search 接口返回）
 *
 * @apiSuccessExample 响应数据
 * {
    "title": "超凡蜘蛛侠普通话版", // 电影名
    "describe": "童年的一起突发事件，令彼得·帕克（安德鲁·加菲尔", // 描述
    "playLineList": [
        {
            "lineName": "新浪线路", // 线路名称
            "playList": [
                {
                    "title": "正片", // 播放地址名称（也就是集数）
                    "url": "/vodplay/408059-2-1.html" // 播放地址
                }
            ]
        },
        {
            "lineName": "红牛线路",
            "playList": [
                {
                    "title": "正片",
                    "url": "/vodplay/408059-1-1.html"
                }
            ]
        }
    ]
}
 */
Router.post("/getDetailInfo", (req, res) => {
  const body = req.body;
  fiveFiveFiveVideo.getDetailInfo(body.detailUrl).then((data) => {
    res.send(data);
  });
});

/**
 * @api {post} /video/getVideoUrl 获取视频文件地址
 * @apiName getVideoUrl
 * @apiVersion 0.1.0
 * @apiGroup 视频
 *
 * @apiBody {String} playUrl 播放地址（/video/getDetailInfo 接口返回）
 *
 * @apiSuccessExample 响应数据
  {
      "url": "https://data.cache.m3u8.lscsfw.com:3395/cache/20230421/10614_6d098f7a/index.m3u8" // 视频地址
  }
 */
Router.post("/getVideoUrl", (req, res) => {
  const body = req.body;
  fiveFiveFiveVideo.getVideoUrl(body.playUrl).then((url) => {
    res.send({ url });
  });
});

module.exports = Router;
