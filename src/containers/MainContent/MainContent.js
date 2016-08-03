import React, { Component } from 'react';
import {connect} from 'react-redux';
import './maincontent.css';
import {getNewsList} from '../../actions/maincontent';
import moment from 'moment';

export default class MainContent extends Component {
    componentDidMount(){
        this.props.dispatch(getNewsList())
    }

    render(){
        const {postList} = this.props;
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
                       {
                           postList.map((post,index) =>
                               <li key ={post.id + index}>
                                   <img src={post.author.avatar_url} title={post.author.loginname} width="30" height="30" className="manpic"/><span>{post.reply_count}/{post.visit_count}</span> <span>置顶</span>
                                   <span>{post.title}</span>
                               </li>
                           )
                       }

                   </ul>
               </div>
           </main>
       )
    }
}
export default connect(
    (state)=>({postList:state.maincontent.postList}))
(MainContent)