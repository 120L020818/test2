const URL_PREFIX="http://localhost:10240/";

const APIS={
    login:"api/login",
    ecode:"api/ecode",
    register:"api/register",
}

for(const i in APIS){
    APIS[i]=URL_PREFIX+APIS[i];
}

export default APIS;