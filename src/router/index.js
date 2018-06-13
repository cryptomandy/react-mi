import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'; // ???

//页面
import home from "../pages/home/home";
import about from "../pages/member/about/about";
/**
 * @name react-router说明
 * @summary 
 * 
 * */ 
//http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu 
//https://www.cnblogs.com/zhanghuiming/p/7592132.html  routerV4
export default class RouteConfig extends Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/about" component={about} />
                </Switch>
            </HashRouter>
        )
    }
}