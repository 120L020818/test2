import {createRouter, createWebHistory} from 'vue-router'
import MyLogin from "@/components/MyLogin";
import myRegister from "@/components/MyRegister";
import myAgreement from "@/components/MyAgreement";
import myTemp from "@/components/MyTemp";
import myIndex from "@/components/MyIndex";
import myTest from "@/components/MyTest";
import myChild01 from "@/components/MyChild01";
import myChild02 from "@/components/MyChild02";

import ChildCAApply from "@/components/ChildCAApply";
import ChildCADelete from "@/components/ChildCADelete";
import ChildCADownload from "@/components/ChildCADownload";
import ChildCAIsValid from "@/components/ChildCAIsValid";
import ChildCARequest from "@/components/ChildCARequest";
import ChildCASelf from "@/components/ChildCASelf";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: "login",
            component: MyLogin
        },
        {
            path: '/register',
            name: 'register',
            component: myRegister
        },
        {
            path: '/agreement',
            name: 'agreement',
            component: myAgreement
        },
        {
            path: '/temp',
            name: 'temp',
            component: myTemp
        },
        {
            path: '/index',
            name: "index",
            component: myIndex,
            children: [{
                path: '/index/caApply',
                name: "caApply",
                component: ChildCAApply
                },
                {
                    path: '/index/caDelete',
                    name: "caDelete",
                    component: ChildCADelete
                },{
                    path: '/index/caDownload',
                    name: "caDownload",
                    component: ChildCADownload
                },{
                    path: '/index/caIsValid',
                    name: "caIsValid",
                    component: ChildCAIsValid
                },{
                    path: '/index/caRequest',
                    name: "caRequest",
                    component: ChildCARequest
                },
                {
                    path: '/index/child1',
                    name: "child1",
                    component: myChild01
                },{
                    path: '/index/self',
                    name: "caSelf",
                    component: ChildCASelf
                },
            ]
        },
        {
            path: '/test',
            name: "test",
            component: myTest
        },
        // {
        //     path: '/mychild01',
        //     name:"mychild01",
        //     component: myChild01
        // },
        {
            path: '/mychild02',
            name:"mychild02",
            component: myChild02
        },
    ]
})
export default router