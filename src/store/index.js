import {defineStore} from "pinia";

export const useStore = defineStore('main', {
    state:()=>{  // 存放的就是模块的变量
        return {
            count: 10,
            username:"",
            type:"",
            publickey:"-----BEGIN PUBLIC KEY-----"+
                "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7vNFSYXK9s7faqcIZ912"+
                "ZYGdZa7wzkaEkxnvOSJ5XkZ16pkUj75fZuHfOPYKBqVihCV3fmIlgxJ63PTIgg/Z"+
                " 07qYZzXc5cKjPUsxmsxFnEpBLrlTF99I47wcwrh02mX319lTxsGZYcn9hDjxwmKD"+
                "8g1rQwwC0+lPSnm5iJINEuyPpv6fWaHWTIBoTnAE2z+zRpZZRB4vqPHhKRNn3mfy"+
                "37vKzkDNKRjWfGUrnuoSenBAy7xbd+AXaF8aLswDCgD4YAqp5XbeFQeuPNWoy0/Q"+
                "fpO80v2iADumlI5ql8ch5pMPa1S7GvWeWJ6usxCWWsvL0R+6BOvKDgG+e/srC1bE"+
                "CQIDAQAB"+
                "-----END PUBLIC KEY-----",
            privatekey:"-----BEGIN RSA PRIVATE KEY-----" +
                "MIIEowIBAAKCAQEA7vNFSYXK9s7faqcIZ912ZYGdZa7wzkaEkxnvOSJ5XkZ16pkU" +
                "j75fZuHfOPYKBqVihCV3fmIlgxJ63PTIgg/Z07qYZzXc5cKjPUsxmsxFnEpBLrlT" +
                "F99I47wcwrh02mX319lTxsGZYcn9hDjxwmKD8g1rQwwC0+lPSnm5iJINEuyPpv6f" +
                "WaHWTIBoTnAE2z+zRpZZRB4vqPHhKRNn3mfy37vKzkDNKRjWfGUrnuoSenBAy7xb" +
                "d+AXaF8aLswDCgD4YAqp5XbeFQeuPNWoy0/QfpO80v2iADumlI5ql8ch5pMPa1S7" +
                "GvWeWJ6usxCWWsvL0R+6BOvKDgG+e/srC1bECQIDAQABAoIBADDCoMFzlWrO5UVw" +
                "x2TWiuoEzJcq30Xgmv4fnTL2B3lG/Jn+WfVJPlOSxQftITeg+R0JPjyij5ATLdI3" +
                "+1CbJnKv0ZjCI40ZLlF8LieuBohxmKKNu9iTvl6GjQHpPSMyCqTX2uIksIWFf//C" +
                "1Qa7Lryuo1Q/t7YBlqYWd9dYImXZTi61JjvBsY0/uquVtoHc38U/v+Av3tmmtY+y" +
                "HJLTBSeeTxb/YaJMKy9x2E8dkBxNlQTCHEiTKAjkUIxAdafkUl0jm6ng2PhOSywk" +
                "wEKdJZrGVpChWv3+7TCBIQEdShfSIZpnaweCXUeTNmdQ8MnQiK7/twFD+CwrZTSO" +
                "XD6UoPkCgYEA8Lsjz95IW+Zt+SkgmuHyUL/yHpMudTa48V46YSdjpypbz1B8RaMt" +
                "yhCdNVBFLM0cqaeIInWk4X9ZSiO1G22wTXe//pjX0g+TklJP2KW4s1X7SX+n4qHL" +
                "dcNxVY/w0yABf92I0txc9XRfJdTi2MDY8Di43yN+5A0hnn42K3pgE+UCgYEA/hs3" +
                "USJ5GtxFQjP+nznyvk0vd9yYa15osVei5WiR2BiBE1PCqRX1W2P64q1wfZ80kttJ" +
                "0vKkGVH7pjTbn2iXy64IU1mg1vSwfACTffsf8t12g6KpjOJDc5YthnajDNZ4uZvi" +
                "hnAq3QRvqKwdaQQdjgerJSweh+qLbp6N5qJu9VUCgYEA6GWBeRc5+55E5JjTpTIj" +
                "X9ktwF6OJxIhEMLK0SfZiHPYFhe5IPEbL0tCuUk4vrt0xEO7pKi1+AudA3ndSRFn" +
                "diH486xSDbSD3mogMyIpYNfMs3PNe3h+lr2LF/LRpr/rMqmHgSjDhSJHCJqwNFhY" +
                "FfBsaN43jakvn3ZwjSCiyBECgYA0YN3NLqLyA3ePRvJ0VdiQm45uUZ1lfGduLtdY" +
                "HG77sUlh94EHo4wY04oSkZe/fUK0Btm3zuY+heSuhPTEbiXkCTKUI8SAqp16YhAF" +
                "Bu+1+yqDxdLXRIiM2eb2cZv4eHkYIWbXOWXMey6dASVq0TtaXIBNwENm1tT471vm" +
                "r5LZpQKBgBB7yvMa3FYm4thXEQWLejLMyKrxsqN6Su0W16rZNzQLuL+DnxeqyNrP" +
                "W7LJTzhmgv4PuwGsYLoYCB9BHQ8iqMwmwnLYORxMQp4V/77B0GFGyPrCPOH4FUi8" +
                "ujWv+/Hsusqc2ms8mbGXwNTi4P6UwrnV/cLL7+Ol43LRaAJXSMrP" +
                "-----END RSA PRIVATE KEY-----",
            customer:"-----BEGIN PUBLIC KEY-----" +
                "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkyO/9LewvY3sWcIJW276" +
                "kzZScJXzvgCwxMO1o7id0whxsbZVo/Qmxo0up78IVVVnMFJ4LWgRDYs1TCLba9Tx" +
                "8nEEUMPcso9UEoyuz2W8S6vTDuNg7e7QzCy3xhS0p0kNM5C6jMYQ1DrRqKkqMl8z" +
                "IrqPd2XwAZa5p4LJmQNdvDlpbujhuNiCnQu7t0pFRhG1Uehs7FyhfR3hywd3WhAp" +
                "1ieAIZPYS9CC/qd/5AFE9xxF3UqQsNX75g6kUPWOcrOUAMfh2tJ51ysmAyPO5Nia" +
                "eixBL56AjmK524JhY5I2TWXudqdl0YtXHJgrCQ7jZ98n5gRO4f2/hewwYvPNrXOZ" +
                "AQIDAQAB\n" +
                "-----END PUBLIC KEY-----"
        }
    },
    getters:{ // 相当于vue里面的计算属性，可以缓存数据

    },
    actions:{ // 可以通过actions 方法，改变 state 里面的值。

    }
})


