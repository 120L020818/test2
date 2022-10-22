const URL_PREFIX="http://172.20.120.110:10240/";

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
    applyadmin:"api/applyadmin",
    applypass:"api/applypass",
    applyrefuse:"api/applyrefuse",
    isvalidlistadmin:"api/isvalidlistadmin",
    deleteadmin:"api/deleteadmin",
}

for(const i in APIS){
    APIS[i]=URL_PREFIX+APIS[i];
}

export default APIS;