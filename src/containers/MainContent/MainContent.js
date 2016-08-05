import React, { Component } from 'react';
import {connect} from 'react-redux';
import './maincontent.css';
import {getNewsList,checkoutTab} from '../../actions/maincontent';
import moment from 'moment';
import cs from 'classname'

function postType(post) {
    if (post.good) {
        return <span className="posttype  puttop">精华</span>
    } else if(post.top){
        return <span className="posttype  puttop">置顶</span>
    } else {
        switch (post.tab) {
            case "ask":
                return <span className="posttype  share">问答</span>
            case "job":
                return <span className="posttype  share">招聘</span>

            case "share":
                return <span className="posttype  share">分享</span>
        }
    }
}
const tabList = [
    {titleName:"全部",url:"all"},
    {titleName:"精华",url:"good"},
    {titleName:"分享",url:"share"},
    {titleName:"问答",url:"ask"},
    {titleName:"招聘",url:"job"}
];





export default class MainContent extends Component {
    componentDidMount(){
        this.props.dispatch(getNewsList())
    }

    handleTabClick(url){
        this.props.dispatch(checkoutTab(url))
    }
    render(){
        const {postList,selectedTab} = this.props;
       return (
           <main className="main_content">
               <nav>
                   <ul className="main_content_header">
                       {
                           tabList.map((tab,index) =>
                               <li key={tab.url}><a href="javascript:void (0)" className={cs({selected:tab.url==selectedTab})} onClick={this.handleTabClick.bind(this,tab.url)}> {tab.titleName}</a></li>
                           )
                       }
                   </ul>
               </nav>
               <div className="newlist">
                   <ul>
                       {
                           postList.map((post,index) =>
                               <li key ={post.id + index}>
                                   <img src={post.author.avatar_url} title={post.author.loginname} width="30" height="30" className="manpic"/>
                                   <span>{post.reply_count}/{post.visit_count}</span>
                                   {
                                       postType(post)
                                   }
                                   <span>{post.title}</span>
                                   <span className="lastreplay">{moment(post.last_reply_at).endOf('day').fromNow()}</span>
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
    (state)=>({
        postList:state.maincontent.postList,
        selectedTab:state.maincontent.selectedTab

    }))
(MainContent)