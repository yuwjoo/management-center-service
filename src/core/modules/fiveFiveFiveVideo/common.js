const CryptoJS = require("./crypto");
const key = CryptoJS.enc.Utf8.parse("55cc5c42a943afdc"); // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("d11324dcscfe16c0"); // 十六位十六进制数作为密钥偏移量
const userAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"; // 浏览器信息
const servers = [
  "https://player2.lscsfw.com:6723/api",
  "https://player.sakurot.com:3458/api",
]; // 请求m3u8文件地址，两个地址都可用，但同时只能使用一个
const webUrls = [
  "https://www.555dyy13.com",
  "https://www.555dyy14.com",
  "https://www.555dyy15.com",
  "https://www.555dyy16.com",
]; // 网站地址（有多个备用地址）

/**
 * @name: 加密函数
 * @param {*} _0x16eb06
 * @return {*}
 */
function encryptPackData(_0x16eb06) {
  const _0x2cd5c3 = CryptoJS.enc.Utf8.parse(_0x16eb06);
  const _0x1924c3 = CryptoJS.AES.encrypt(_0x2cd5c3, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return _0x1924c3.ciphertext.toString().toUpperCase();
}

/**
 * @name: 解密函数
 * @param {*} _0x671add
 * @return {*}
 */
function decryptPackData(_0x671add) {
  const _0x95e934 = CryptoJS.enc.Hex.parse(_0x671add);
  const _0x2864b7 = CryptoJS.enc.Base64.stringify(_0x95e934);
  const _0x175606 = CryptoJS.AES.decrypt(_0x2864b7, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return _0x175606.toString(CryptoJS.enc.Utf8);
}

module.exports = {
  userAgent,
  servers,
  webUrls,
  encryptPackData,
  decryptPackData,
};
