import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/base.less';
import Route from './router/index';
import FastClick from 'fastclick';
import { AppContainer } from 'react-hot-loader'; //方式？？？


import registerServiceWorker from './registerServiceWorker';

FastClick.attach(document.body);


const render = Component => {
    /**
     * @name 热加载
     * @description 
     * 
     * 
     * */ 
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}
render(Route);

// ReactDOM.render(
//     <App />, 
//     document.getElementById('root')
// );
registerServiceWorker();
