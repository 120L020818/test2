const URL_PREFIX = " http://192.168.0.104:10240/";
// const URL_PREFIX = "http://dd9eb9f.r2.cpolar.cn/";

const APIS = {
    login: "api/login",
    ecode: "api/ecode",
    register: "api/register",
    self: "api/self",
    request: "api/request",
    logout: "api/logout",
    dlgen: "api/dlgen",
    dlpro: "api/dlpro",
    apply: "api/apply",
    download: "api/download",
    isvalid: "api/isvalid",
    cadelete: "api/cadelete",
    applyadmin: "api/applyadmin",
    applypass: "api/applypass",
    applyrefuse: "api/applyrefuse",
    isvalidlistadmin: "api/isvalidlistadmin",
    deleteadmin: "api/deleteadmin",
    demo: "api/demo",
    test: "api/test",
    email: "api/email",
    isava: "api/isava",
}

for (const i in APIS) {
    APIS[i] = URL_PREFIX + APIS[i];
}

// const APIS2 = {
//     xiaoye:"http://upg2t5.natappfree.cc/shop/user/getCA",
// }

export default APIS

