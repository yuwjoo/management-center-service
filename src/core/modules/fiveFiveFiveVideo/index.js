/*
 * @FileName: 555电影网接口
 * @FilePath: \management-center-service\src\core\modules\fiveFiveFiveVideo\index.js
 * @Author: YH
 * @Date: 2023-05-02 19:54:35
 * @LastEditors: YH
 * @LastEditTime: 2023-05-03 23:00:07
 * @Description:
 * 目标网站：https://www.555dyy.top
 * 基本流程：模糊搜索: search() =>拿到detailUrl => 请求详情：getDetailInfo() => 拿到playUrl => 请求视频地址：getVideoUrl()，
 */
const axios = require("axios");
const cheerio = require("cheerio");
const CryptoJS = require("./crypto");
const {
  userAgent,
  servers,
  webUrls,
  encryptPackData,
  decryptPackData,
} = require("./common");

const server_url = servers[0]; // 当前请求m3u8文件使用的服务器地址
const webUrl = webUrls[0]; // 请求的网站地址

/**
 * @name: 获取m3u8文件地址
 * @param {string} encodeUrl 被加密的请求地址
 * @return {string} m3u8文件地址
 */
function fetchM3u8Url(encodeUrl) {
  const _0xd5c050 = server_url + "/get_play_url"; // 请求接口地址
  const _0x1510a7 = encodeUrl; // 在html文件中动态获取的
  const _0x358b48 = "GET"; // 'X-PLAYER-METHOD'
  const _0xe71271 = Math.round(Date.now() / 1000); // 'X-PLAYER-TIMESTAMP'
  const _0x389592 = "55ca5c4d11424dcecfe16c08a943afdc";
  const _0x24a30a = CryptoJS.MD5(
    server_url + "GET" + _0xe71271 + _0x389592
  ).toString();
  const _0x51a035 = encryptPackData(_0x1510a7); // 'X-PLAYER-PACK'
  const _0x7a05b1 = CryptoJS.HmacSHA256(_0x51a035, _0x24a30a).toString(); // 'X-PLAYER-SIGNATURE'
  const _0x588d9b = "https://zyz.sdljwomen.com";
  const _0x498cf2 = CryptoJS.MD5("www.555dy.com").toString(); // 'app_key'
  const _0x206047 = CryptoJS.MD5(userAgent).toString(); // 'client_key'
  const _0x305c97 = CryptoJS.MD5(_0x588d9b).toString(); // 'request_token'
  const _0x131d73 = CryptoJS.MD5(_0xd5c050.replace("https:", "")).toString(); // 'access_token'
  return axios({
    url: _0xd5c050,
    methods: _0x358b48,
    params: {
      app_key: _0x498cf2,
      client_key: _0x206047,
      request_token: _0x305c97,
      access_token: _0x131d73,
    },
    headers: {
      "user-agent": userAgent,
      "X-PLAYER-METHOD": _0x358b48,
      "X-PLAYER-TIMESTAMP": _0xe71271,
      "X-PLAYER-PACK": _0x51a035,
      "X-PLAYER-SIGNATURE": _0x7a05b1,
    },
  }).then((resp) => {
    const data = JSON.parse(decryptPackData(resp.data)).data || {};
    return data.url;
  });
}

/**
 * @name: 搜索影片
 * @param {string} keywords 模糊搜索关键词
 * @param {number} pageNum 当前页
 * @return {object} 查询结果
 */
function search({ keywords, pageNum = 1 }) {
  return axios({
    url: `${webUrl}/vodsearch/${keywords}----------${pageNum}---.html`,
    methods: "get",
    headers: {
      userAgent,
      cookie: `PHPSESSID=aig8uq13q5k9tlhmcberq0hdpv; _ga=GA1.1.1869188505.1682594639; _ga_40NKTEQ460=GS1.1.1682594638.1.0.1682594638.0.0.0; searchneed=ok`,
    },
  }).then((resp) => {
    const $ = cheerio.load(resp.data);
    const items = $(".module-main .module-card-items").children();
    const list = items
      .map((index, element) => {
        const itemContents = $(element).find(
          ".module-info-item .module-info-item-content"
        );
        const info = itemContents
          .first()
          .contents()
          .map((index, element) => $(element).text())
          .toArray();
        return {
          classify: $(element).children(".module-card-item-class").text(), // 分类
          cover: $(element)
            .find(".module-item-pic .lazyload")
            .attr("data-original"), // 封面
          detailUrl: $(element)
            .children(".module-card-item-poster")
            .attr("href"), // 详情地址
          title: $(element).find(".module-card-item-title strong").text(), // 标题
          releaseTime: info[0], // 上映时间
          country: info[2], // 国家
          tags: (info[4] || "").split(","), // 标签
          performer: itemContents.last().text().split(","), // 演员
        };
      })
      .toArray();
    return {
      list,
      pageNum: pageNum, // 当前页
      pageSize: 16, // 每页条数
      total: Number(
        (resp.data.match(/\$\('\.mac_total'\).html\('(\d+)'\);/) || {})[1] || 0
      ), // 数据总数
    };
  });
}

/**
 * @name: 获取详情信息
 * @param {string} detailUrl 详情地址
 * @return {object} 查询结果
 */
function getDetailInfo(detailUrl) {
  return axios({
    url: `${webUrl}${detailUrl}`,
    methods: "get",
  }).then((resp) => {
    const $ = cheerio.load(resp.data);
    const title = $(".module-info-heading>h1").text(); // 标题
    const describe = $(".module-info-introduction-content.show-desc").text().trim(); // 描述
    const lineSet = $("#y-playList>.module-tab-item")
      .map((index, element) => $(element).children("span").text())
      .toArray(); // 线路集合
    const playSet = $("#panel1")
      .map((index, element) => {
        return $(element)
          .find(".module-play-list-link")
          .map((i, c) => ({
            title: $(c).text(),
            url: $(c).attr("href"),
          }))
      })
      .toArray(); // 播放地址集合（每条线路对应的播放地址都在这）
    return {
      title,
      describe,
      playLineList: lineSet.map((lineName, index) => ({
        lineName, // 线路名称
        playList: playSet[index].toArray(), // 播放地址列表
      })),
    };
  });
}

/**
 * @name: 获取视频地址
 * @param {string} playUrl 播放地址
 * @return {string} m3u8文件地址
 */
async function getVideoUrl(playUrl) {
  try {
    const resp = await axios({
      url: webUrl + playUrl,
      methods: "get",
      headers: { userAgent },
    });
    const $ = cheerio.load(resp.data);
    const info = JSON.parse(
      ($(".player-box-main>script").text() || "").slice(16) || "{}"
    );
    return await fetchM3u8Url(info.url);
  } catch (err) {
    return err;
  }
}

module.exports = {
  search,
  getDetailInfo,
  getVideoUrl,
};
