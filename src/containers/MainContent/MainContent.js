import React, { Component } from 'react';
import {connect} from 'react-redux';
import './maincontent.css';
import {getNewsList} from '../../actions/maincontent';


export default class MainContent extends Component {
    componentDidMount(){
        this.props.dispatch(getNewsList())
    }

    render(){
       return (
           <main className="main_content">
               <nav>
                   <ul className="main_content_header">
                       <li><a href="#"> 全部</a></li>
                       <li><a href="#"> 精华</a></li>
                       <li><a href="#"> 分享</a></li>
                       <li><a href="#"> 问答</a></li>
                       <li><a href="#"> 招聘</a></li>
                   </ul>
               </nav>
               <div className="newlist">
                   <ul>
                        <li>
                            <img src="" alt="" width="30" height="30" className="manpic"/><span>50/22121</span> <span>置顶</span>
                            <span>中国最大的</span>
                        </li>
                   </ul>
               </div>
           </main>
       )
    }
}
export default connect(()=>({}))(MainContent)