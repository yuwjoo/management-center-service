const cheerio = require("cheerio");
const axios = require("axios");

const userAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36";
const cookie =
  "isI18n=false; P_F=1; __ysuid=1684232839322YOu; __ayft=1684232839324; __aysid=1684232839324Egj; __arycid=dd-3-00; __ayscnt=1; __arcms=dd-3-00; xlly_s=1; __arpvid=1684241619565g6hqVP-1684241619577; __aypstp=2; __ayspstp=2; cna=hUjqHM+A8w4CAXjrdlgXkEwA; _m_h5_tk=8964b5e8005925c285aaebbf476457c5_1684245220790; _m_h5_tk_enc=9be54a8786f23998d6283124ea5a3a1c; __ayvstp=5; __aysvstp=5; l=fBOPv4JRNUlT22uCKOfwPurza77OSIRA_uPzaNbMi9fP9A5M5mFfB1ZmK8YHC3GVFshkR3l39SNMBeYBqhVDbogLP5vFbGkmnmOk-Wf..; tfstk=cBl5Bbxtsgj7fgdhZuTq1Hie1FNGZr7_RLZoPhstrGdcgy05i65afnVqKMFUJr1..; isg=BIGB-yEYgbPzCO2iJECPsgztkM2brvWgbWG3nOPXrAjnyqOcK_wqcDbQrj6MRY3Y";

/**
 * @name: 处理播放器参数
 * @param {string} playUrl 播放页地址
 * @param {object} PageConfig 配置参数
 * @return {object} 播放器参数
 */
function hanlderPlayParams(playUrl, PageConfig) {
  const list = playUrl.match(/[^\s&?#=\/]+=[^\s&?#=]+/g);
  const n = list.reduce((obj, cur) => {
    const data = cur.split("=");
    obj[data[0]] = data[1];
    return obj;
  }, {});
  const a = {
    vvlogconfig: {
      "spm-url": n["spm"],
      scm: n["scm"],
      plchid: PageConfig.folderCateWord || "", // 好像固定 ""
      // "track_info": n["track_info"],
    },
    // "firsttime": parseInt(n["firsttime"]),
    // "adext": n["adext"],
    // language: decodeURIComponent(n["lang"]),
    abtest: "b",
    playmode: PageConfig.playmode, // 好像固定 "3"
    Fid: PageConfig.folderId, // 好像固定 "0"
    Pt: PageConfig.fpos, // 好像固定 "0"
    Ob: PageConfig.forder, // 好像固定 "0"
  };
  const o = n;
  const s = PageConfig.videoId2;
  let l = Object.assign(a, {
    vid: s,
    currentShowId: PageConfig.showid,
    ccode: PageConfig.isTudou ? "050F" : "0502",
    autoplay: true,
    upsServiceConfig: {
      requesttype: PageConfig.isTudou ? "jsonp" : "mtop",
    },
    events: {},
    environment: o["IkuWeb"] ? "IkuWeb" : PageConfig.environment || "",
    simpleMode: PageConfig.simpleMode || !1,
    UOSMode: PageConfig.UOSMode || !1,
    downloadMode: "true" === o["downloadMode"] || !1,
    isSupportDRM: "true" === o["downloadMode"] || "1" === PageConfig.isDRM,
    isInnerPlay: PageConfig.isNewVersion,
    quality: "auto",
    enableFullscreenScroll: true,
  });
  // if("eleAndIku" === PageConfig.environment) {
  //     l.ignores = ["TopLayer"];
  //     l.R1 = window.r1
  // } else {
  //     l.quality = "auto"
  // }
  return l;
}

/**
 * @name: 获取m3u8地址
 * @return {string} m3u8地址
 */
function getM3u8Url() {
  const data = JSON.stringify({
    steal_params:
      '{"ccode":"0502","utid":"hUjqHM+A8w4CAXjrdlgXkEwA","version":"9.2.89","ckey":"140#TQ2olOsYzzW9/zo23zps4pN8s77xtoECElMg+iHYhVOuBsNy1ys8J0o3axR4O6/d8VsLD3hqzznsWhIlgJTzzRD3vmWqlQzx2DD3VthqzFKyGB6gr8rxzDrbL8/qlbrz3zuBEHmiByrATNUXZxf5LouY/yA2i58WRnVN7tRksDQ8nZFHN/zrEv/53rzawhZTogYQwdUQZx0Qe8S6vKwa6VeK0Ik2oidz8xLA1z9MRs1S6oe1pnmXpHJEXYg/Uy+h9zDFJ7fXvEwvHDiDc8vI3aUFeuc15EevLWnYzuxYKMwx3xyW1srNoLQwr5YhZSgi1juJa7TxAAd72FMdH3NjJ2FEKav1y+UmeEZjmlQFznZBBEjy9BqVnpRQ0sWTaWKA3bXybOw0ItymtUqflIPVnROGdWi6iQfJBg+2mEtYCgtht8ghSBpr0RZhx8hx4ROlk27h2vkOUTSC2Vlxf2wxCH9FS7F7judoJDpQ7zK2plUFIm4yofElmoUkW8reXqBjxIN+m1exNJD0Fi9lhQhSyuMASvyPnJqLtBC1hMwZFaV1vDXxkx5O4dHCZnEMZsUhnSEiKA1OVSsaGKQoBwEei+iNzkCvweom5m82wQ7taqrSFpelJXNp2p5kDlWoFeeptD3Rp3/zUYcSeTVtGTohondaHxL+2JFWf6vpWUQY9U7dwXp+Z65H04we6YaxN09Igb8HFvWXDGKmOBNE834K/ufyKl1JyQyg0D84dnZ0/8ZMcSMChuR4WudcYN3KfI9je5LWxFVH2oXRiVH04R/YJC7a4OY+0tHYK9/VKzw2IZjKfb15+5vP1DwBymja4j6VlfShjfagH6sPeTLp5+ZqC30tB2T0qxN9vcbm7mnc44Cn2VWXtVcUjTMDOhM1FVZCSlMIEBfgSQ==","client_ip":"192.168.1.1","client_ts":1684242461}',
    biz_params:
      '{"vid":"XNTk0Nzc1MTg1Mg==","h265":0,"current_showid":"577845","preferClarity":-1,"media_type":"standard","app_ver":"9.2.89","extag":"EXT-X-PRIVINF","play_ability":16782592,"local_vid":"XNTk0Nzc1MTg1Mg==","local_time":1684242456,"skh":1,"start_point_ms":1423237,"last_clarity":-1}',
    ad_params:
      '{"vs":"1.0","pver":"9.2.89","sver":"2.0","site":1,"aw":"w","fu":0,"d":"0","bt":"pc","os":"win","osv":"10","dq":"auto","atm":"","partnerid":"null","wintype":"interior","isvert":0,"vip":0,"emb":"","p":1,"rst":"mp4","needbf":2,"avs":"1.0"}',
  });
  axios({
    url: `https://acs.youku.com/h5/mtop.youku.play.ups.appinfo.get/1.1/`,
    method: "get",
    headers: {
      Cookie: cookie,
    },
    params: Object.assign(
      {
        jsv: "2.6.1",
        appKey: "24679788",
        t: 1684242461967,
        sign: "8a16134fd6e39b7565cdd39ccc4d8dfa",
        api: "mtop.youku.play.ups.appinfo.get",
        v: "1.1",
        ecode: 0,
        timeout: 15000,
        AntiFlood: true,
        AntiCreep: true,
        type: "jsonp",
        dataType: "jsonp",
        callback: "mtopjsonp5",
      },
      {
        data: data,
      }
    ),
  }).then((resp) => {
    const mtopjsonp5 = (json) => {
      console.log(json.data.data.stream);
    };
    eval(resp.data);
    // let json = resp.data.slice(11, -2);
    // console.log(JSON.parse(json))
  });
}

/**
 * @name: 获取视频地址
 * @param {string} playUrl 播放地址
 * @return {string} m3u8文件地址
 */
function getVideoUrl(playUrl) {
  axios({
    url: playUrl,
    method: "get",
    headers: {
      userAgent,
      cookie,
    },
  }).then((resp) => {
    const $ = cheerio.load(resp.data);
    const code = $("script")
      .filter((i, el) => $(el).text().includes("window.PageConfig"))
      .text();
    const window = {};
    eval(code);
    const playParams = hanlderPlayParams(playUrl, window.PageConfig);
    console.log(playParams);
  });
}

// getVideoUrl(
//   "https://v.youku.com/v_show/id_XNTk0Nzc1MTg1Mg==.html?spm=a2hja.14919748_WEBHOME_NEW.drawer2.d_zj1_1&s=decf386f28c24ee4bac6&scm=20140719.rcmd.35027.show_decf386f28c24ee4bac6"
// );

// getM3u8Url();

module.exports = {
  getVideoUrl,
};
