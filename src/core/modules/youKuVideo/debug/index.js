// m3u8文件地址 (可以直接请求)
url: https://valipl.cp31.ott.cibntv.net/6572C07469932715D95732507/030006000062A9BA7AABA86457BC38BCDD7D2D-283A-4A55-91D3-AF465ECE6AE5.m3u8
method: get
params: 
{
    ccode: 0502
    duration: 1354
    expire: 18000
    psid: dbb275f183d9e14eed76598f049e3ae541346 // 改变
    ups_client_netip: 78eb7670
    ups_ts: 1683207462 // 当前时间戳
    ups_userid: // 为空（可能是登录账号后才有）
    utid: hQyiGoD58DYCAW/xlXGMQzUN // 改变
    vid: XMjg2NjY0OTM2
    vkey: B004c51bd8001913b9cdfa0b1d8f86bf1 // 改变
    s: 48ba3a685ab411e5b432
    eo: 0
    t: 91cf2bdab6b55c0 // 改变
    cug: 1
    fms: 3a0e5d9aa024ad6c // 改变
    tr: 1354
    le: fc6c6e778edae6340a407a56ed82bc68 // 改变
    ckt: 5
    m_onoff: 0
    rid: 2000000073EDE62A1E0AE69B0CAD66A698FC7E3902000000
    type: mp4hdv3
    bc: 2
    dre: u37
    si: 73
    dst: 1
    sm: 1
    operate_type: 1
}
改变的参数： 
    psid
    utid
    vkey
    t
    fms
    le


// 这个js会包含m3u8文件地址（jsonp请求）
url: https://acs.youku.com/h5/mtop.youku.play.ups.appinfo.get/1.1/
method: GET
params: 
{
    jsv: 2.6.1
    appKey: 24679788
    t: 1683207462808 // 时间戳
    sign: 84871621d07b1f1b6495728703b5a1fa // 改变（签名）
    api: mtop.youku.play.ups.appinfo.get // 请求路径中的地址
    v: 1.1
    timeout: 15000
    AntiFlood: true
    AntiCreep: true
    type: jsonp
    dataType: jsonp
    callback: mtopjsonp1
    data: {"steal_params":"{\"ccode\":\"0502\",\"utid\":\"hQyiGoD58DYCAW/xlXGMQzUN\",\"version\":\"9.2.82\",\"ckey\":\"140#sgTok+6WzzPxkzo2+ixQ4pN8s77BNcm2/ZVSlI3Q7zZ9PPbd6jkN0M03IXWvI50HKQUSlp1zzqXC2EiSRFrxpzDmO6h/zzrb22U3lp1xzkuoVoy2PFrz2PzvL6hqzFzMx6g+ONdOHaU+WFqNygx/ShxfTTAgDsV/DlSuX/tfaptxdKjG1QW2KkfMFD9BpnT5NR9Y3/bhgdr1PfGQ40gD/NipKbwK4CfBe8fVyDzZuNPSiWOnhQuucE0DTX3yaRWBqqCi69QHjEUNV7xv4U9S1LVgHvbxXkzxUgVbH9hk4jruZCt3nC4Kf9tRSHRaUiayAyWV/rlHfKGav7g1ITEwpwYdexkfj3+J6XOt4t1k0kNqsTokEeuCQqGa8JP2h/wQ9GJRc1JiZc0czXaDzojOztQMDtzkPmGUmDklbokwgbJzAVfbxvwgbZSQLnwKcoDFDi8aMCXCy9Z0Ly59+SkQDvF68M/OGNRpxzhM1bj2/Klekeou2AwAil/dAQtLSzK+YEYut4XnnAtoFxYNW6szPWYpROyNHNjPBCikfd3RDNtzoFAPYJDEhxpsBwZp4gPrNo7aqA2Q9F1MEwygqen5KBG2vXSuyt6h+5CvrK/Zqx9TQ0v+eDsyvZxguFwJoqCTJysOtzAUL1oJTFHs4AQKlyxmlzgF0qTRcU+viWZCTZorvMZ75z9FSgM8Vdb/ka/ZXd1K5Djpfm1osJmZOSt/yUGz8LjaVO7xNBkm17NrIAljbInN9jX8GHJ8XwAVj6ZMjppsRPFXLyfot3v8vaDw/A+n2Qjr6i3XWQI2m9nKw5+JHDfs158sdvVWih41qNSmnmHtaQ57PRsb5qS+7uFgRJi8hLjCecyAQwxznf1PjmpaIfzSK5gm3Fh/Pi17UhAKoHEzYkdMr7KmeXdgYuGEjGJRb6ysRfqV\",\"client_ip\":\"192.168.1.1\",\"client_ts\":1683207462}","biz_params":"{\"vid\":\"XMjg2NjY0OTM2\",\"h265\":0,\"current_showid\":\"300825\",\"preferClarity\":-1,\"media_type\":\"standard,subtitle\",\"app_ver\":\"9.2.82\",\"extag\":\"EXT-X-PRIVINF\",\"play_ability\":16782592,\"master_m3u8\":1,\"local_vid\":\"XMjg2NjY0OTM2\",\"local_time\":1683207458,\"skh\":1,\"start_point_ms\":180000,\"last_clarity\":-1}","ad_params":"{\"vs\":\"1.0\",\"pver\":\"9.2.82\",\"sver\":\"2.0\",\"site\":1,\"aw\":\"w\",\"fu\":0,\"d\":\"0\",\"bt\":\"pc\",\"os\":\"win\",\"osv\":\"10\",\"dq\":\"auto\",\"atm\":\"\",\"partnerid\":\"null\",\"wintype\":\"interior\",\"isvert\":0,\"vip\":0,\"emb\":\"\",\"p\":1,\"rst\":\"mp4\",\"needbf\":2,\"avs\":\"1.0\"}"}
}
data中不同的参数： utid, ckey, start_point_ms


// 将json数据转换成url params格式字符串，例如：{aa: 1, bb: 2} 转换成 'aa=1&bb=2'
function r(A) {
    var t = [];
    for (var e in A)
        A[e] && t.push(e + "=" + encodeURIComponent(A[e]));
    return t.join("&")
}

// 获取token
function a(e) {
    var t = new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
    return t ? t[1] : void 0
}

// 生成签名
function sign(A) {
    function t(A, t) {
        return A << t | A >>> 32 - t
    }
    function e(A, t) {
        var e, n, r, i, o;
        return r = 2147483648 & A,
        i = 2147483648 & t,
        o = (1073741823 & A) + (1073741823 & t),
        (e = 1073741824 & A) & (n = 1073741824 & t) ? 2147483648 ^ o ^ r ^ i : e | n ? 1073741824 & o ? 3221225472 ^ o ^ r ^ i : 1073741824 ^ o ^ r ^ i : o ^ r ^ i
    }
    function n(A, n, r, i, o, a, s) {
        return A = e(A, e(e(function(A, t, e) {
            return A & t | ~A & e
        }(n, r, i), o), s)),
        e(t(A, a), n)
    }
    function r(A, n, r, i, o, a, s) {
        return A = e(A, e(e(function(A, t, e) {
            return A & e | t & ~e
        }(n, r, i), o), s)),
        e(t(A, a), n)
    }
    function i(A, n, r, i, o, a, s) {
        return A = e(A, e(e(function(A, t, e) {
            return A ^ t ^ e
        }(n, r, i), o), s)),
        e(t(A, a), n)
    }
    function o(A, n, r, i, o, a, s) {
        return A = e(A, e(e(function(A, t, e) {
            return t ^ (A | ~e)
        }(n, r, i), o), s)),
        e(t(A, a), n)
    }
    function a(A) {
        var t, e = "", n = "";
        for (t = 0; 3 >= t; t++)
            e += (n = "0" + (A >>> 8 * t & 255).toString(16)).substr(n.length - 2, 2);
        return e
    }
    var s, w, D, P, B, E, f, Q, g, c;
    for (c = function(A) {
        for (var t, e = A.length, n = e + 8, r = 16 * ((n - n % 64) / 64 + 1), i = new Array(r - 1), o = 0, a = 0; e > a; )
            o = a % 4 * 8,
            i[t = (a - a % 4) / 4] = i[t] | A.charCodeAt(a) << o,
            a++;
        return o = a % 4 * 8,
        i[t = (a - a % 4) / 4] = i[t] | 128 << o,
        i[r - 2] = e << 3,
        i[r - 1] = e >>> 29,
        i
    }(A = function(A) {
        A = A.replace(/\r\n/g, "\n");
        for (var t = "", e = 0; e < A.length; e++) {
            var n = A.charCodeAt(e);
            128 > n ? t += String.fromCharCode(n) : n > 127 && 2048 > n ? (t += String.fromCharCode(n >> 6 | 192),
            t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224),
            t += String.fromCharCode(n >> 6 & 63 | 128),
            t += String.fromCharCode(63 & n | 128))
        }
        return t
    }(A)),
    E = 1732584193,
    f = 4023233417,
    Q = 2562383102,
    g = 271733878,
    s = 0; s < c.length; s += 16)
        w = E,
        D = f,
        P = Q,
        B = g,
        E = n(E, f, Q, g, c[s + 0], 7, 3614090360),
        g = n(g, E, f, Q, c[s + 1], 12, 3905402710),
        Q = n(Q, g, E, f, c[s + 2], 17, 606105819),
        f = n(f, Q, g, E, c[s + 3], 22, 3250441966),
        E = n(E, f, Q, g, c[s + 4], 7, 4118548399),
        g = n(g, E, f, Q, c[s + 5], 12, 1200080426),
        Q = n(Q, g, E, f, c[s + 6], 17, 2821735955),
        f = n(f, Q, g, E, c[s + 7], 22, 4249261313),
        E = n(E, f, Q, g, c[s + 8], 7, 1770035416),
        g = n(g, E, f, Q, c[s + 9], 12, 2336552879),
        Q = n(Q, g, E, f, c[s + 10], 17, 4294925233),
        f = n(f, Q, g, E, c[s + 11], 22, 2304563134),
        E = n(E, f, Q, g, c[s + 12], 7, 1804603682),
        g = n(g, E, f, Q, c[s + 13], 12, 4254626195),
        Q = n(Q, g, E, f, c[s + 14], 17, 2792965006),
        E = r(E, f = n(f, Q, g, E, c[s + 15], 22, 1236535329), Q, g, c[s + 1], 5, 4129170786),
        g = r(g, E, f, Q, c[s + 6], 9, 3225465664),
        Q = r(Q, g, E, f, c[s + 11], 14, 643717713),
        f = r(f, Q, g, E, c[s + 0], 20, 3921069994),
        E = r(E, f, Q, g, c[s + 5], 5, 3593408605),
        g = r(g, E, f, Q, c[s + 10], 9, 38016083),
        Q = r(Q, g, E, f, c[s + 15], 14, 3634488961),
        f = r(f, Q, g, E, c[s + 4], 20, 3889429448),
        E = r(E, f, Q, g, c[s + 9], 5, 568446438),
        g = r(g, E, f, Q, c[s + 14], 9, 3275163606),
        Q = r(Q, g, E, f, c[s + 3], 14, 4107603335),
        f = r(f, Q, g, E, c[s + 8], 20, 1163531501),
        E = r(E, f, Q, g, c[s + 13], 5, 2850285829),
        g = r(g, E, f, Q, c[s + 2], 9, 4243563512),
        Q = r(Q, g, E, f, c[s + 7], 14, 1735328473),
        E = i(E, f = r(f, Q, g, E, c[s + 12], 20, 2368359562), Q, g, c[s + 5], 4, 4294588738),
        g = i(g, E, f, Q, c[s + 8], 11, 2272392833),
        Q = i(Q, g, E, f, c[s + 11], 16, 1839030562),
        f = i(f, Q, g, E, c[s + 14], 23, 4259657740),
        E = i(E, f, Q, g, c[s + 1], 4, 2763975236),
        g = i(g, E, f, Q, c[s + 4], 11, 1272893353),
        Q = i(Q, g, E, f, c[s + 7], 16, 4139469664),
        f = i(f, Q, g, E, c[s + 10], 23, 3200236656),
        E = i(E, f, Q, g, c[s + 13], 4, 681279174),
        g = i(g, E, f, Q, c[s + 0], 11, 3936430074),
        Q = i(Q, g, E, f, c[s + 3], 16, 3572445317),
        f = i(f, Q, g, E, c[s + 6], 23, 76029189),
        E = i(E, f, Q, g, c[s + 9], 4, 3654602809),
        g = i(g, E, f, Q, c[s + 12], 11, 3873151461),
        Q = i(Q, g, E, f, c[s + 15], 16, 530742520),
        E = o(E, f = i(f, Q, g, E, c[s + 2], 23, 3299628645), Q, g, c[s + 0], 6, 4096336452),
        g = o(g, E, f, Q, c[s + 7], 10, 1126891415),
        Q = o(Q, g, E, f, c[s + 14], 15, 2878612391),
        f = o(f, Q, g, E, c[s + 5], 21, 4237533241),
        E = o(E, f, Q, g, c[s + 12], 6, 1700485571),
        g = o(g, E, f, Q, c[s + 3], 10, 2399980690),
        Q = o(Q, g, E, f, c[s + 10], 15, 4293915773),
        f = o(f, Q, g, E, c[s + 1], 21, 2240044497),
        E = o(E, f, Q, g, c[s + 8], 6, 1873313359),
        g = o(g, E, f, Q, c[s + 15], 10, 4264355552),
        Q = o(Q, g, E, f, c[s + 6], 15, 2734768916),
        f = o(f, Q, g, E, c[s + 13], 21, 1309151649),
        E = o(E, f, Q, g, c[s + 4], 6, 4149444226),
        g = o(g, E, f, Q, c[s + 11], 10, 3174756917),
        Q = o(Q, g, E, f, c[s + 2], 15, 718787259),
        f = o(f, Q, g, E, c[s + 9], 21, 3951481745),
        E = e(E, w),
        f = e(f, D),
        Q = e(Q, P),
        g = e(g, B);
    return (a(E) + a(f) + a(Q) + a(g)).toLowerCase()
}


function S(A, t, e) {
    return function() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        var i = A - n.length;
        return i <= 0 ? e.apply(null, t.concat(n)) : S(i, t.concat(n), e)
    }
}
function getUpsParams() {
    var A = this.ctx.config
      , t = this.ctx.supportType === i.MP4
      , e = this.ctx.config.isElectron
      , n = this.ctx.version;
    e && (n = this.ctx.config.electronMinorVersion || this.ctx.config.electronVersion);
    var o = {
        ccode: A.ccode,
        version: n,
        cna: this.ctx.cna,
        enableAutoLevel: this.ctx.system.defaultSupportType === i.HLS && !t,
        staticM3u8: !t,
        enableSubtitle: !t,
        sei: this.ctx.config.environment === r.ElectronIku,
        vid: A.vid
    };
    if (this.ctx.config.environment === r.IkuWeb && (o.sub_channel = "iku"),
    this.ctx.ckey && (o.ckey = this.ctx.ckey),
    this.ctx.upsParams) {
        var a = _A(XE, !0)(this.ctx.upsParams);
        o = Object.assign(o, a)
    }
    if (this.ctx.drm && (o = Object.assign(o, this.ctx.drm)),
    this.ctx.customParams) {
        var s = _A(JE, !0)(this.ctx.customParams);
        o = Object.assign(o, s)
    }
    this.ctx.adParams && (o.adParams = this.ctx.adParams);
    var w = {};
    return this.ctx.config.isElectron && (this.ctx.upsParams.sourcetype && (w.sourcetype = this.ctx.upsParams.sourcetype),
    this.ctx.config.environment === r.ElectronIkuOffline && (w.downloadMode = !0)),
    o.extParams = w,
    "function" == typeof this.ctx.upsParams.params && (o = this.ctx.upsParams.params(o)),
    o
}
function Dt(A) {
    var t = this;
    this.version = "9.2.82",
    this.system = new V, // 引用文件V (可能有些属性只在浏览器有)
    this.status = new M,
    this.points = new x(this),
    this.mediaData = new $A(this),
    this.programs = new z,
    this.config = new F,
    this.watermark = new nt(this),
    this.debugLogger = new s,
    this.language = new FA(this),
    this.urlParams = {};
    var e = rt.parse(location.href);
    ["support_type", "requestType", "env", "url", "p2p", "sourcetype"].forEach((function(A) {
        e.params[A] && (t.urlParams[A] = e.params[A])
    }
    )),
    this.init(A)
}
const t = {}; // 不清楚具体取值
const AA = {
    context: new Dt(t)
}
const info = {
    ctx: AA.context
}
const fun = S(1, 2, 3); // 不知道具体传参
const r = getUpsParams.call(info);
let A = fun(r);
Object.keys(A).forEach((function(t) {
    A[t] = JSON.stringify(A[t])
}))

w.params = {
    AntiFlood: true, // 好像是固定的
    AntiCreep: true, // 好像是固定的
    timeout: 15000, // 好像是固定的
    ecode: 0, // 好像是固定的
    v: "1.1", // 好像是固定的
    api: "mtop.youku.play.ups.appinfo.get", // 固定的
    appKey: "24679788",  // 好像是固定的
    data: JSON.stringify(A)
}
w.options = {
    path: "//acs.youku.com/h5/mtop.youku.play.ups.appinfo.get/1.1/", // 暂定写死（其实是有拼接逻辑的）
    querystring: "", // 下面o.querystring中的值
    postdata: w.params.data,
    token: a("_m_h5_tk") // token值
}
o = w.options;
o.path = w.options.path;
o.querystring = { // 除了 data以外的所有参数
    "jsv": "2.6.1", // 写死
    "appKey": "24679788", // 取的 w.params.appKey
    "t": 1683209801196, // 时间戳

    // sign(n.token + "&" + a + "&" + o + "&" + e.data)
    // 传参：n.token = w.options.token
    // 传参：a = 时间戳
    // 传参：o = appKey, 可看做等于 w.params.appKey(因为取o的值时还做了一些判断，但目前来看都是返回这个)
    // 传参：e.data = w.params.data
    "sign": "f78ce0678db8f750d2956f6247715981",

    "api": "mtop.youku.play.ups.appinfo.get", // w.params.api
    "v": "1.1", // w.params.v
    "ecode": 0, // w.params.ecode
    "timeout": 15000, // w.params.timeout
    "AntiFlood": true, // w.params.AntiFlood
    "AntiCreep": true, // w.params.AntiCreep
    "type": "jsonp", // 固定的（仅限本接口）
    "dataType": "jsonp", // 固定的（仅限本接口）
    "callback": "mtopjsonp1" // 暂定写死
}
o.postdata = w.options.postdata

url = o.path + "?" + r(o.querystring) + "&" + r(o.postdata)




const playUrl = https://v.youku.com/v_show/id_XMjg2NjU2OTk2.html?spm=a2hja.14919748_WEBHOME_NEW.drawer2.d_zj1_1&s=48ba3a685ab411e5b432&scm=20140719.rcmd.35027.show_48ba3a685ab411e5b432
const list = playUrl.match(/[^\s&?#=\/]+=[^\s&?#=]+/g);
const n = list.reduce((obj, cur) => {
    const data = cur.split("=");
    obj[data[0]] = data[1]
}, {})
PageConfig // 就在播放页的html源码中
a = {
    vvlogconfig: {
        "spm-url": n["spm"],
        "scm": n["scm"],
        "plchid": PageConfig.folderCateWord || "",  // 好像固定 ""
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
}

o = n;

s = PageConfig.videoId2;

l = Object.assign(a, {
    vid: s,
    currentShowId: PageConfig.showid,
    ccode: PageConfig.isTudou ? "050F" : "0502",
    autoplay: true,
    upsServiceConfig: {
        requesttype: PageConfig.isTudou ? "jsonp" : "mtop"
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

{
    "data": {
        "summary": "更新至206集",
        "hover": {
            "desc1": "奶龙",
            "desc2": "动画·冒险·友情·幽默",
            "img": "https://m.ykimg.com/0535000062A98A911FD85209120CB6CB",
            "desc3": "天才少年小七和萌萌奶龙这对活宝的日常生活，奶龙由于所在的星球发生变故，来到地球天才少年小七家，小七擅长各种发明，带着奶龙穿梭在武林空间、荒岛空间、游戏空间展开冒险，奶龙的身份正随着剧情的展开逐步揭晓。"
        },
        "subtitleType": "ARITHMETIC_REASON",
        "img": "https://m.ykimg.com/0527000062A98C9C1408C20919845C93",
        "summaryType": "UPDATE_STATUS",
        "subtitle": "奶龙小七爆笑冒险",
        "action": {
            "extra": {
                "politicsSensitive": false
            },
            "report": {
                "spmD": "1_5",
                "reportDataOpt": false,
                "scmD": "show_abcd0c2114a74359a930",
                "trackInfo": {
                    "component_id": "web_detail_recommend",
                    "pv_req_id": "null",
                    "pvv_vid": "XMjg2NjU2OTk2",
                    "component_instance_id": 239086,
                    "utdid": "hQyiGoD58DYCAW/xlXGMQzUN",
                    "servertime": 1684156906278,
                    "pageid": "PCSHOW_CHILD_NORMAL",
                    "alginfo": "-1rkScore-20.2838-1rcType-2micro_genre-1sceneId-213101-1rkBiz-2yk_show_playpage_model_with_mit_v1_qyd_ts-1abId-2165448-1pn-21-1itemId-2588562-1itemType-22",
                    "req_id": "reqid=bed9e5f4-1820-43ad-849c-eb9a7e5ae9b7#1684156906294",
                    "lifecycle": 1,
                    "itemid": "588562",
                    "drawerid": "36160",
                    "recext": "reqid=bed9e5f4-1820-43ad-849c-eb9a7e5ae9b7#1684156906294",
                    "material_id": "media_0527000062A98C9C1408C20919845C93",
                    "sam": "1007.110529.623.165448",
                    "pvv_sid": "48ba3a685ab411e5b432",
                    "cms_req_id": "213dec3716841569062723946efda6"
                },
                "scmC": "239086",
                "arg1": "web_detail_recommend",
                "spmC": "1_1",
                "spmAB": "a2h08.8165823",
                "index": 5,
                "pageName": "page_playpage",
                "scmAB": "20140719.rcmd"
            },
            "type": "JUMP_TO_SHOW",
            "value": "abcd0c2114a74359a930",
            "reportDisabled": false
        },
        "title": "奶龙",
        "mark": {
            "data": {
                "color": "YELLOW",
                "text": "VIP"
            },
            "type": "SIMPLE"
        }
    },
    "id": 588562,
    "level": 3,
    "more": false,
    "type": 10021
},