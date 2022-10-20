const URL_PREFIX="http://localhost:10240/";

const APIS={
    login:"api/login",
    ecode:"api/ecode",
    register:"api/register",
    self:"api/self",
    request:"api/request",
    logout:"api/logout",
    dlgen:"api/dlgen",
    dlpro:"api/dlpro",
    apply:"api/apply",
    download:"api/download",
    isvalid:"api/isvalid",
    cadelete:"api/cadelete",
}

for(const i in APIS){
    APIS[i]=URL_PREFIX+APIS[i];
}

export default APIS;