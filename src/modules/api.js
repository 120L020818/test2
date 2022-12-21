const URL_PREFIX = "http://192.168.0.106:10240/";
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
    wopka: "api/wopka",
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
    bank: "api/bank",
    vrfy: "api/vrfy",
    log: "api/blog",
    ret: "api/ret",
}

for (const i in APIS) {
    APIS[i] = URL_PREFIX + APIS[i];
}

export default APIS

