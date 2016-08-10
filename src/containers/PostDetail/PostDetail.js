import React ,{Component} from 'react';
import {connect} from 'react-redux';
import './postDetail.css';
import {postDetail} from '../../actions/postDetail'
import moment from 'moment'
function postType(post) {
    if (post.good) {
        return <span className="posttype  puttop">精华</span>
    }
    if (post.top) {
        return <span className="posttype  puttop">置顶</span>
    }
}

function comefrom(tab){
    switch (tab) {
        case "share":
            return <span>分享</span>;
        case "good":
            return <span>精华</span>;
        case "job":
            return <span>招聘</span>;
        case "ask":
            return <span>问答</span>;
        default:
            return <span/>
    }
}

class PostDetail extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {dispatch} = this.props;
        const id = this.props.params.id;
        dispatch(postDetail(id))
    }


    render(){
        const {postdetail,replay} = this.props;
        return (

            <div className="postDetail">
                {postdetail && postdetail.id &&
                    <article>
                        <header className="postDetail_header">
                            <h1 className="postdetail_title">
                                {postType(postdetail)} {postdetail.title}
                            </h1>
                            <ul className="article_message">
                                <li>•发布于 {moment(postdetail.create_at).format("YYYY-MM-DD hh:mm")}</li>
                                <li>•作者 {postdetail.author.loginname}</li>
                                <li>•{postdetail.visit_count} 次浏览</li>
                                <li>•来自 {comefrom(postdetail.tab)}</li>
                            </ul>
                        </header>
                        <main className="postDetail_content" dangerouslySetInnerHTML={{__html:postdetail.content}}>
                        </main>
                        <section>
                            <h5 className="postdetail_replay_count">{postdetail.reply_count} 回复</h5>
                            <ul className="replies_list">
                                {
                                    replay.map((v,index)=>
                                        <li key={v.id + index}>
                                            <p className="reply_title">
                                                <img src={v.author.avatar_url} className="post_portrait" alt="portrait"/>
                                                <span>{v.author.loginname}</span>
                                                <span>{index+1}楼</span>
                                                <span>•{moment(v.create_at).format("YYYY-MM-DD hh:mm")}</span>

                                                {v.ups.length!==0 &&
                                                    <a className="upmount">{v.ups.length}</a>
                                                }
                                            </p>
                                            <p dangerouslySetInnerHTML={{__html:v.content}}></p>
                                        </li>
                                    )
                                }

                            </ul>
                        </section>
                    </article>

                }
            </div>


        )
    }
}

export default connect(state=>({
    postdetail:state.postdetail.postdetail,
    replay:state.postdetail.replay
}))(PostDetail)