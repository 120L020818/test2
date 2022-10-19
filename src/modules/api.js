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
}

for(const i in APIS){
    APIS[i]=URL_PREFIX+APIS[i];
}

export default APIS;