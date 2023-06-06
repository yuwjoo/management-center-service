function aa() {
  function A() {
    var t = this;
    (this.playerSID = this.getVVID()),
      (this._supportFullscreen = !0),
      (this._isSupportFairplay = !1),
      (this._cbcs = !1),
      (this._defaultSupportType = this.getSupportType()),
      B.isIE && B.version < 10 && (this._supportFullscreen = !1),
      (this._isSupport265 = !1),
      (this._isSupportFairplay =
        !!B.isSafari &&
        parseInt(B.version, 10) >= 11 &&
        !!window.WebKitMediaKeys &&
        window.WebKitMediaKeys.isTypeSupported(
          "com.apple.fps.1_0",
          "video/mp4"
        )),
      A.widevineSupportCheck().then(function (A) {
        (t._isSupportWidevine = A),
          A && B.isChrome && parseInt(B.version, 10) >= 69 && (t._cbcs = !0);
      });
  }
  return (
    (A.prototype.reset = function () {
      this.playerSID = this.getVVID();
    }),
    (A.prototype.getVVID = function () {
      for (
        var A = "" + new Date().getTime() + g.rand() + g.randomString(14),
          t = "",
          e = Math.ceil(A.length / 2),
          n = Math.ceil(A.length / 2),
          r = 0;
        r < n;
        r++
      )
        (t += "" + A[r] + (A[e] || "")), e++;
      return t;
    }),
    (A.prototype.getH265CodecsSupported = function () {
      return (
        window.MediaSource &&
        "function" == typeof window.MediaSource.isTypeSupported &&
        window.MediaSource.isTypeSupported(
          'video/mp4; codecs="hvc1.1.6.L93.B0"'
        ) &&
        window.MediaSource.isTypeSupported(
          'video/mp4; codecs="hev1.1.6.L93.B0"'
        )
      );
    }),
    (A.prototype.getSupportType = function () {
      if (
        A.isSupportM3u8() &&
        (!window.MediaSource || c.compareVersion(B.version, "10") < 0)
      )
        return i.M3U8;
      var t = navigator.userAgent.toLowerCase(),
        e = B.isChrome && c.compareVersion(B.version, 49) < 0,
        n = (t.indexOf("360ee") > -1 || t.indexOf("360se") > -1) && e,
        r =
          B.isIE ||
          t.indexOf("msie") > -1 ||
          t.indexOf("compatible") > -1 ||
          t.indexOf("trident") > -1,
        o = c.compareVersion(B.version, "11.0") <= 0;
      return (!A.isSupportChromeHls() && !A.isSupportSafariHls()) ||
        e ||
        n ||
        (r && o)
        ? i.MP4
        : i.HLS;
    }),
    (A.isXp = function () {
      var A = navigator.userAgent.match(/\(([^)]+)/);
      return (
        !(!A || !A[1]) && "WindowsNT5.1" === (A = A[1].replace(/\s+/g, ""))
      );
    }),
    (A.whiteList = function () {
      return (
        !A.isXp() && (!B.isChrome || c.compareVersion(B.version, "62") >= 0)
      );
    }),
    (A.widevineSupportCheck = function () {
      return navigator.requestMediaKeySystemAccess && A.whiteList()
        ? navigator
            .requestMediaKeySystemAccess("com.widevine.alpha", [
              {
                initDataTypes: [],
                videoCapabilities: [
                  {
                    contentType: 'video/mp4; codecs="avc1.64001e"',
                    robustness: "SW_SECURE_CRYPTO",
                  },
                ],
                audioCapabilities: [
                  {
                    contentType: 'audio/mp4; codecs="mp4a.40.2"',
                    robustness: "SW_SECURE_CRYPTO",
                  },
                ],
              },
            ])
            .then(function () {
              return !0;
            })
            .catch(function () {
              return !1;
            })
        : Promise.resolve(!1);
    }),
    (A.isSupportM3u8 = function () {
      var A = document.createElement("video"),
        t = [
          "application/x-mpegURL",
          "audio/mpegurl",
          "vnd.apple.mpegURL",
          "application/vnd.apple.mpegURL",
        ],
        e = !1;
      if (A && "function" == typeof A.canPlayType)
        for (var n = 0, r = t.length; n < r; n++)
          if (A.canPlayType(t[n])) {
            e = !0;
            break;
          }
      return e;
    }),
    (A.isSupportChromeHls = function () {
      window.MediaSource = window.MediaSource || window.WebKitMediaSource;
      var A =
          new RegExp(
            "(.*\\.(youku|tudou)\\.com|.*\\.youku\\.alibaba\\.net|.*\\.youku\\.tv)$"
          ).test(location.hostname) || "file:" === location.protocol,
        t =
          window.MediaSource &&
          "function" == typeof window.MediaSource.isTypeSupported &&
          window.MediaSource.isTypeSupported(
            'video/mp4; codecs="avc1.42E01E,mp4a.40.2"'
          );
      return A && !B.isSafari && t;
    }),
    (A.isSupportSafariHls = function () {
      return (
        window.MediaSource &&
        B.isMac &&
        B.isSafari &&
        c.compareVersion(B.version, "7") >= 0
      );
    }),
    Object.defineProperty(A.prototype, "defaultSupportType", {
      get: function () {
        return this._defaultSupportType;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(A.prototype, "supportFullscreen", {
      get: function () {
        return this._supportFullscreen;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(A.prototype, "isSupportWidevine", {
      get: function () {
        return this._isSupportWidevine;
      },
      set: function (A) {
        (this._isSupportWidevine = A),
          !1 === A
            ? (this._cbcs = !1)
            : B.isChrome && parseInt(B.version, 10) >= 69 && (this._cbcs = !0);
      },
      enumerable: !1,
      configurable: !0,
    }),
    (A.prototype.supportWidevine = function () {
      var t = this;
      return void 0 === this._isSupportWidevine
        ? A.widevineSupportCheck().then(function (A) {
            return (
              (t._isSupportWidevine = A),
              A &&
                B.isChrome &&
                parseInt(B.version, 10) >= 69 &&
                (t._cbcs = !0),
              A
            );
          })
        : Promise.resolve(this._isSupportWidevine);
    }),
    Object.defineProperty(A.prototype, "cbcs", {
      get: function () {
        return this._cbcs;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(A.prototype, "supportFairplay", {
      get: function () {
        return this._isSupportFairplay;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(A.prototype, "onLine", {
      get: function () {
        return navigator.onLine;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(A.prototype, "isSupport265", {
      get: function () {
        return this._isSupport265;
      },
      enumerable: !1,
      configurable: !0,
    }),
    A
  );
}
const g = {
  MRG32k3a: function () {
    var A = this;
    return (function (t) {
      var e = 4294967087,
        n = 4294944443,
        r = 12345,
        i = 12345,
        o = 123,
        a = 12345,
        s = 12345,
        w = 123;
      0 === t.length && (t = [+new Date()]);
      for (var D = A.Mash(), P = 0; P < t.length; P++)
        (r += 4294967296 * D(t[P])),
          (i += 4294967296 * D(t[P])),
          (o += 4294967296 * D(t[P])),
          (a += 4294967296 * D(t[P])),
          (s += 4294967296 * D(t[P])),
          (w += 4294967296 * D(t[P]));
      (r %= e), (i %= e), (o %= e), (a %= n), (s %= n), (w %= n), (D = null);
      var B = function () {
          var A,
            t,
            e = 4294967087,
            n = 4294944443;
          return (
            (A = 1403580 * i - 810728 * r),
            (A -= ((A / e) | 0) * e) < 0 && (A += e),
            (r = i),
            (i = o),
            (o = A),
            (t = 527612 * w - 1370589 * a),
            (t -= ((t / n) | 0) * n) < 0 && (t += n),
            (a = s),
            (s = w),
            (w = t),
            A <= t ? A - t + e : A - t
          );
        },
        E = function () {
          return 2.3283064365386963e-10 * B();
        };
      return (
        (E.uint32 = B),
        (E.fract53 = function () {
          return E() + 11102230246251565e-32 * (2097151 & B());
        }),
        (E.version = "MRG32k3a 0.9"),
        (E.args = t),
        E
      );
    })(Array.prototype.slice.call(arguments));
  },
  rand: function (A, t) {
    t = void 0 === t ? "" : t;
    var e = this.MRG32k3a(A || 0, location.href, Date.now());
    return t + Math.round(1e5 * e()).toString(32);
  },
  randomString: function (A) {
    var t =
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
        ""
      );
    (A = A || 3), (A = isNaN(A) ? 3 : A);
    for (var e = t.length, n = ""; A >= 0; )
      (n += t[Math.floor(Math.random() * e)]), A--;
    return n;
  },
  Mash: function () {
    var A = 4022871197,
      t = function (t) {
        t = t.toString();
        for (var e = 0; e < t.length; e++) {
          var n = 0.02519603282416938 * (A += t.charCodeAt(e));
          (n -= A = n >>> 0),
            (A = (n *= A) >>> 0),
            (A += 4294967296 * (n -= A));
        }
        return 2.3283064365386963e-10 * (A >>> 0);
      };
    return (t.version = "Mash 0.9"), t;
  },
  S: function (A) {
    function t(A, t) {
      return (A << t) | (A >>> (32 - t));
    }
    function e(A) {
      var t,
        e = "";
      for (t = 7; t >= 0; t--) e += ((A >>> (4 * t)) & 15).toString(16);
      return e;
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      w,
      D,
      P,
      B = new Array(80),
      E = 1732584193,
      f = 4023233417,
      Q = 2562383102,
      g = 271733878,
      c = 3285377520,
      v = (A = (function (A) {
        A = A.replace(/\r\n/g, "\n");
        for (var t = "", e = 0; e < A.length; e++) {
          var n = A.charCodeAt(e);
          n < 128
            ? (t += String.fromCharCode(n))
            : n > 127 && n < 2048
            ? ((t += String.fromCharCode((n >> 6) | 192)),
              (t += String.fromCharCode((63 & n) | 128)))
            : ((t += String.fromCharCode((n >> 12) | 224)),
              (t += String.fromCharCode(((n >> 6) & 63) | 128)),
              (t += String.fromCharCode((63 & n) | 128)));
        }
        return t;
      })(A)).length,
      u = [];
    for (r = 0; r < v - 3; r += 4)
      (i =
        (A.charCodeAt(r) << 24) |
        (A.charCodeAt(r + 1) << 16) |
        (A.charCodeAt(r + 2) << 8) |
        A.charCodeAt(r + 3)),
        u.push(i);
    switch (v % 4) {
      case 0:
        r = 2147483648;
        break;
      case 1:
        r = (A.charCodeAt(v - 1) << 24) | 8388608;
        break;
      case 2:
        r = (A.charCodeAt(v - 2) << 24) | (A.charCodeAt(v - 1) << 16) | 32768;
        break;
      case 3:
        r =
          (A.charCodeAt(v - 3) << 24) |
          (A.charCodeAt(v - 2) << 16) |
          (A.charCodeAt(v - 1) << 8) |
          128;
    }
    for (u.push(r); u.length % 16 != 14; ) u.push(0);
    for (
      u.push(v >>> 29), u.push((v << 3) & 4294967295), n = 0;
      n < u.length;
      n += 16
    ) {
      for (r = 0; r < 16; r++) B[r] = u[n + r];
      for (r = 16; r <= 79; r++)
        B[r] = t(B[r - 3] ^ B[r - 8] ^ B[r - 14] ^ B[r - 16], 1);
      for (o = E, a = f, s = Q, w = g, D = c, r = 0; r <= 19; r++)
        (P =
          (t(o, 5) + ((a & s) | (~a & w)) + D + B[r] + 1518500249) &
          4294967295),
          (D = w),
          (w = s),
          (s = t(a, 30)),
          (a = o),
          (o = P);
      for (r = 20; r <= 39; r++)
        (P = (t(o, 5) + (a ^ s ^ w) + D + B[r] + 1859775393) & 4294967295),
          (D = w),
          (w = s),
          (s = t(a, 30)),
          (a = o),
          (o = P);
      for (r = 40; r <= 59; r++)
        (P =
          (t(o, 5) + ((a & s) | (a & w) | (s & w)) + D + B[r] + 2400959708) &
          4294967295),
          (D = w),
          (w = s),
          (s = t(a, 30)),
          (a = o),
          (o = P);
      for (r = 60; r <= 79; r++)
        (P = (t(o, 5) + (a ^ s ^ w) + D + B[r] + 3395469782) & 4294967295),
          (D = w),
          (w = s),
          (s = t(a, 30)),
          (a = o),
          (o = P);
      (E = (E + o) & 4294967295),
        (f = (f + a) & 4294967295),
        (Q = (Q + s) & 4294967295),
        (g = (g + w) & 4294967295),
        (c = (c + D) & 4294967295);
    }
    return (P = e(E) + e(f) + e(Q) + e(g) + e(c)).toLowerCase();
  },
};
function E(A) {
  void 0 === A && (A = "");
  var t = {
    ext: {},
  };
  A || "object" != typeof navigator || (A = navigator.userAgent || "");
  for (var e = P(w, A), n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.match,
      o = r.map,
      a = {
        browser: i[5] || i[3] || i[1] || "",
        version: i[4] || i[2] || "0",
      };
    if (a.browser) {
      var s = o.name.toLowerCase();
      void 0 === t.name
        ? ((t["is" + o.name] = !0),
          (t.version = a.version),
          (t.majorVersion = parseInt(a.version, 10)),
          (t.name = s))
        : ((t["is" + o.name] = !0),
          (t.ext[s] = {
            version: a.version,
            majorVersion: parseInt(a.version, 10),
          }));
    }
  }
  var B = P(D, A)[0] || {
      match: [],
      map: {},
    },
    E = B.match,
    f = B.map;
  return (
    E[0] && ((t["is" + f.name] = !0), (t.platform = f.name.toLowerCase())),
    (t.isMobile = f.mobile || !1),
    (t.isDesktop = f.desktop || !1),
    (t.isIOS = f.ios || !1),
    t
  );
}

function P(A, t) {
  for (var e = [], n = 0; n < A.length; n++)
    if (!e.length || !A[n].skipIfMatched) {
      var r = A[n].reg.exec(t);
      if (
        (r &&
          e.push({
            map: A[n],
            match: r,
          }),
        e.length && A[n].breakIfMatched)
      )
        break;
    }
  return e;
}
const w = [
  {
    name: "YoukuHD",
    reg: /(youku_hd|youkuhd)\/([\d.]+)/i,
  },
  {
    name: "YoukuHD",
    reg: /(youku_hd|youkuhd);/i,
  },
  {
    name: "Youku",
    reg: /(youku|youku_hd|youkuhd)\/([\d.]+)/i,
  },
  {
    name: "Wechat",
    reg: /(micromessenger)\/([\d.]+)/i,
  },
  {
    name: "QQ",
    reg: /(qq)\/([\d.]+)/i,
  },
  {
    name: "Weibo",
    reg: /(weibo).*weibo__([\d.]+)/i,
  },
  {
    name: "QZone",
    reg: /(qzone)\/.*_qz_([\d.]+)/i,
  },
  {
    name: "Baidu",
    reg: /(baiduboxapp)\/([\d.]+)/i,
  },
  {
    name: "DingDing",
    reg: /(aliapp\(dingtalk)\/([\d.]+)/i,
  },
  {
    name: "Taobao",
    reg: /(aliapp\(tb)\/([\d.]+)/i,
  },
  {
    name: "Alipay",
    reg: /(alipayclient|aliapp\(AP)\/([\d.]+)/i,
  },
  {
    name: "AliTrip",
    reg: /(alitrip|aliapp\(lx)\/([\d.]+)/i,
  },
  {
    name: "UC",
    reg: /(ucbrowser)\/([\d.]+)/i,
  },
  {
    name: "WindVane",
    reg: /(windvane)\/([\d.]+)/i,
  },
  {
    name: "Liebao",
    reg: /(liebao[^/]*)\/([\d.]+)/i,
  },
  {
    name: "360",
    reg: /(qihoobrowser)\/([\d.]+)/i,
  },
  {
    name: "360SoSuo",
    reg: /(mso_app)\s*\(([\d.]+)/i,
  },
  {
    name: "QQLive",
    reg: /(qqlivebrowser)\/([\d.]+)/i,
  },
  {
    name: "QQBrowser",
    reg: /(qqbrowser)\/([\d.]+)/i,
  },
  {
    name: "Iqiyi",
    reg: /(iqiyiversion)\/([\d.]+)/i,
  },
  {
    name: "BaiduBrowser",
    reg: /(baidubrowser)\/([\d.]+)/i,
  },
  {
    name: "Sogou",
    reg: /(sogou[\w]*browser)\/([\d.]+)/i,
  },
  {
    name: "Edge",
    reg: /(edge)\/([\d.]+)/i,
  },
  {
    name: "Opera",
    reg: /(opr)\/([\d.]+)/i,
    skipIfMatched: !0,
  },
  {
    name: "Chrome",
    reg: /(chrome)\/([\d.]+)/i,
    skipIfMatched: !0,
  },
  {
    name: "Chrome",
    reg: /(crios)\/([\d.]+)/i,
    skipIfMatched: !0,
  },
  {
    name: "IEMobile",
    reg: /(iemobile)[/]([\d.]+)/i,
    skipIfMatched: !0,
  },
  {
    name: "Firefox",
    reg: /(firefox)\/([\d.]+)/i,
    skipIfMatched: !0,
  },
  {
    name: "Opera",
    reg: /(opera)(?:.*version|)[ /]([\d.]+)/i,
    skipIfMatched: !0,
  },
  {
    name: "Safari",
    reg: /(version)(applewebkit)[/]([\d.]+).*(safari)[/]([\d.]+)/i,
    skipIfMatched: !0,
  },
  {
    name: "Safari",
    reg: /(webkit)[ /]([\d.]+).*(version)[/]([\d.]+).*(safari)[/]([\d.]+)/i,
    skipIfMatched: !0,
  },
  {
    name: "IE",
    reg: /(msie) ([\d.]+)/i,
  },
  {
    name: "IE",
    reg: /trident.*(rv)(?::| )([\d.]+)/i,
  },
];
const D = [
  {
    name: "IPad",
    reg: /(ipad|iphone.*youku_hd\/[\d.]+)/i,
    mobile: !0,
    ios: !0,
    breakIfMatched: !0,
  },
  {
    name: "IPad",
    reg: /(ipad|iphone.*youku_hd)/i,
    mobile: !0,
    ios: !0,
    breakIfMatched: !0,
  },
  {
    name: "IPod",
    reg: /(ipod)/i,
    mobile: !0,
    ios: !0,
    breakIfMatched: !0,
  },
  {
    name: "WindowsPhone",
    reg: /(windows phone)/i,
    mobile: !0,
    breakIfMatched: !0,
  },
  {
    name: "IPhone",
    reg: /(iphone)/i,
    mobile: !0,
    ios: !0,
    breakIfMatched: !0,
  },
  {
    name: "Android",
    reg: /(android)/i,
    mobile: !0,
    breakIfMatched: !0,
  },
  {
    name: "Windows",
    reg: /(win)/i,
    desktop: !0,
    breakIfMatched: !0,
  },
  {
    name: "Mac",
    reg: /(mac)/i,
    desktop: !0,
    breakIfMatched: !0,
  },
  {
    name: "Linux",
    reg: /(linux)/i,
    desktop: !0,
    breakIfMatched: !0,
  },
];
const c = (function () {
  function A() {}
  return (
    (A.compareVersion = function (A, t) {
      (A = String(A).split(".")), (t = String(t).split("."));
      try {
        for (var e = 0, n = Math.max(A.length, t.length); e < n; e++) {
          var r = (isFinite(A[e]) && Number(A[e])) || 0,
            i = (isFinite(t[e]) && Number(t[e])) || 0;
          if (r < i) return -1;
          if (r > i) return 1;
        }
      } catch (A) {
        return -1;
      }
      return 0;
    }),
    (A.countLength = function (A) {
      for (var t = 0, e = 0; e < A.length; e++)
        A.charCodeAt(e) > 255 ? (t += 1) : (t += 0.5);
      return t;
    }),
    (A.convertStringToBuffer = function (A) {
      for (var t = new Uint8Array(A.length), e = 0; e < A.length; e += 1)
        t[e] = A.charCodeAt(e);
      return t;
    }),
    (A.convertBufferToString = function (A) {
      for (
        var t = A instanceof ArrayBuffer ? new Uint8Array(A) : A, e = "", n = 0;
        n < t.length;
        n += 1
      )
        e += String.fromCharCode(t[n]);
      return e;
    }),
    A
  );
})();
const i = {};
(function (A) {
  (A.KRender = "KRender"),
    (A.NPlayer = "NPlayer"),
    (A.HLS = "hls"),
    (A.DASH = "dash"),
    (A.FLV = "flv"),
    (A.M3U8 = "m3u8"),
    (A.BLOB = "blob"),
    (A.CUSTOM = "custom"),
    (A.MP4 = "mp4"),
    (A.NONE = "none");
})(i);
const B = E();

module.exports = aa();
