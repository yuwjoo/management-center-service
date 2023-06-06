const axios = require("axios");

const data = JSON.stringify(
    {"steal_params":"{\"ccode\":\"0502\",\"utid\":\"hQyiGoD58DYCAW/xlXGMQzUN\",\"version\":\"9.2.89\",\"ckey\":\"140#TQ2olOsYzzW9/zo23zps4pN8s77xtoECElMg+iHYhVOuBsNy1ys8J0o3axR4O6/d8VsLD3hqzznsWhIlgJTzzRD3vmWqlQzx2DD3VthqzFKyGB6gr8rxzDrbL8/qlbrz3zuBEHmiByrATNUXZxf5LouY/yA2i58WRnVN7tRksDQ8nZFHN/zrEv/53rzawhZTogYQwdUQZx0Qe8S6vKwa6VeK0Ik2oidz8xLA1z9MRs1S6oe1pnmXpHJEXYg/Uy+h9zDFJ7fXvEwvHDiDc8vI3aUFeuc15EevLWnYzuxYKMwx3xyW1srNoLQwr5YhZSgi1juJa7TxAAd72FMdH3NjJ2FEKav1y+UmeEZjmlQFznZBBEjy9BqVnpRQ0sWTaWKA3bXybOw0ItymtUqflIPVnROGdWi6iQfJBg+2mEtYCgtht8ghSBpr0RZhx8hx4ROlk27h2vkOUTSC2Vlxf2wxCH9FS7F7judoJDpQ7zK2plUFIm4yofElmoUkW8reXqBjxIN+m1exNJD0Fi9lhQhSyuMASvyPnJqLtBC1hMwZFaV1vDXxkx5O4dHCZnEMZsUhnSEiKA1OVSsaGKQoBwEei+iNzkCvweom5m82wQ7taqrSFpelJXNp2p5kDlWoFeeptD3Rp3/zUYcSeTVtGTohondaHxL+2JFWf6vpWUQY9U7dwXp+Z65H04we6YaxN09Igb8HFvWXDGKmOBNE834K/ufyKl1JyQyg0D84dnZ0/8ZMcSMChuR4WudcYN3KfI9je5LWxFVH2oXRiVH04R/YJC7a4OY+0tHYK9/VKzw2IZjKfb15+5vP1DwBymja4j6VlfShjfagH6sPeTLp5+ZqC30tB2T0qxN9vcbm7mnc44Cn2VWXtVcUjTMDOhM1FVZCSlMIEBfgSQ==\",\"client_ip\":\"192.168.1.1\",\"client_ts\":1684162993}","biz_params":"{\"vid\":\"XNTk0Nzc1MTg1Mg==\",\"h265\":0,\"current_showid\":\"577845\",\"preferClarity\":-1,\"media_type\":\"standard\",\"app_ver\":\"9.2.89\",\"extag\":\"EXT-X-PRIVINF\",\"play_ability\":16782592,\"local_vid\":\"XNTk0Nzc1MTg1Mg==\",\"local_time\":1684162990,\"skh\":1,\"start_point_ms\":102103,\"last_clarity\":-1}","ad_params":"{\"vs\":\"1.0\",\"pver\":\"9.2.89\",\"sver\":\"2.0\",\"site\":1,\"aw\":\"w\",\"fu\":0,\"d\":\"0\",\"bt\":\"pc\",\"os\":\"win\",\"osv\":\"10\",\"dq\":\"auto\",\"atm\":\"\",\"partnerid\":\"null\",\"wintype\":\"interior\",\"isvert\":0,\"vip\":0,\"emb\":\"\",\"p\":1,\"rst\":\"mp4\",\"needbf\":2,\"avs\":\"1.0\"}"}
);

axios({
    url: `https://acs.youku.com/h5/mtop.youku.play.ups.appinfo.get/1.1/`,
    // url: `https://acs.youku.com/h5/mtop.youku.play.ups.appinfo.get/1.1/?jsv=2.6.1&appKey=24679788&t=1683993882685&sign=db45df8365662328bb88073077c09965&api=mtop.youku.play.ups.appinfo.get&v=1.1&timeout=15000&AntiFlood=true&AntiCreep=true&type=jsonp&dataType=jsonp&callback=mtopjsonp1&data=${data}`,
    method: "get",
    headers: {
        Cookie: 'P_F=1; isI18n=false; __ysuid=1683997416509bDE; __ayft=1683997416510; __aysid=1683997416510Bit; __ayscnt=1; cna=hQyiGoD58DYCAW/xlXGMQzUN; xlly_s=1; _m_h5_tk=d24d72e23a99afa76592aa578b725fbd_1684166856909; _m_h5_tk_enc=f52c15140f954e3c6653ebad5dcee88a; __arycid=dd-3-00; __arcms=dd-3-00; __arpvid=1684162857931cW2P2d-1684162857939; __aypstp=87; __ayspstp=87; __ayvstp=60; __aysvstp=60; tfstk=ckYcBBACOnSbzSu9FK_jlgs8AkhRZwzNKF8WzfbLoYEB7nYPiVrzYZn-ZtDI3l1..; l=fBOPv4JRNUlT23A9BOfwPurza77OSIRAguPzaNbMi9fPOV195HnPB1Zqji8pC3GVFsByR3l39SNMBeYBqn4rHnBgP5vFbGkmnmOk-Wf..; isg=BKenj2Nhj9yMHwt0HoLRbBYPNttxLHsOp0PRqnkUqTZdaMcqgf7rXhJ6iGh2gFOG'
    },
    params: {
        "jsv": "2.6.1",
        "appKey": "24679788",
        "t": 1684162993629,
        "sign": "d48a0cbd0d1cda6c842ee0f16fa2c177",
        "api": "mtop.youku.play.ups.appinfo.get",
        "v": "1.1",
        "ecode": 0,
        "timeout": 15000,
        "AntiFlood": true,
        "AntiCreep": true,
        "type": "jsonp",
        "dataType": "jsonp",
        "callback": "mtopjsonp5",
    
        data: data,
    }
}).then(res => {
    console.log(res.data)
    console.log("请求成功")
}).catch(err => {
    console.log("请求失败", err)
})