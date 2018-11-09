import React, { Component } from 'react';
import './home.less';


class Base extends Component {
  //class中的方法类似function函数，函数之间没有逗号，对象之后是等号；
  pageData = {
    a:1,
    //模板显示 ,每个标签需要唯一key值，否则会有警告
    arr:[
      <span key='1'>第一个模板</span>,
      <span key='2'>第二个模板</span>
    ],
    list:[{
      "name":"111",
      "id":1,
    },{
      "name":"222",
      "id":2,
    },{
      "name":"333",
      "id":3,
    },{
      "name":"444",
      "id":4,
      "type":1,
    },],

    createList:[]
  }

  componentWillMount(){
    let arr = [];
    for(let i = 0; i<100 ;i++){
      arr.push(i);
    }
    // filter以某个条件过滤到需要的项，map对当前数据项进行处理，两个都可以返回；
    this.pageData.createList.push(
      arr.filter((item,index) => {
        return item % 8 === 0;
      })
    )
    console.log(this.pageData.createList)
  }
  render() {
    // https://blog.csdn.net/wmzy1067111110/article/details/51538241  react jsx中判断语句写法
    return (
      <div className="page_bg">
        <p>{11+"桔子酒店"}</p>
        {/* render模板中用定义的数据需要加this（TODO:和vue不一致） */}
        {/* 不能使用if-else，表达式语句 */}
        <p>{ this.pageData.a ? 6: 7 }</p>
        <p>{ this.pageData.arr }</p>
        <ul>{
          // forEach不行？？？
          //注意key，循环过程中多个判断处理方法
          this.pageData.list.map((item,index) => {
              return <li key={index} className={`item_${index}`}>
                <div>{item.id}-{item.name}<span>测试</span></div>
              </li>
              
          })
        }</ul>
        {/* React DOM结点使用骆驼拼写法给属性命名 */}
        <span className='num_list' tabIndex="0">{
            this.pageData.createList[0].map((item,index) => {
              return <em key={index}>{item}</em>
            })
        }</span>
        {/* 多级判断语句 */}
        
      </div>
    );
  }
}

export default Base;
/**
 * @name README
 * 常用的表达式有：变量名；函数定义表达式；属性访问表达式；函数调用表达式；算数表达式；关系表达式；逻辑表达式；
 * 
 * */ 

//  https://blog.csdn.net/a153375250/article/details/53434299 jsx语法
