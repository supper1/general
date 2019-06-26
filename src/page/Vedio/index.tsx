import React from 'react';
import { connect } from 'react-redux'
import { History, Location } from "history"
import { match } from "react-router-dom"
import * as homeActions from '../../redux/actions/home'
import { bindActionCreators } from 'redux';
import okImg from '../../img/ok.png'
import viewImg from '../../img/view.png'
import Anthology from '../../compontents/Anthology/index'
import Poster from '../../compontents/Poster/index'
import isokImg from '../../img/isok.png'
import commentImg from '../../img/comment.png'
import shareImg from '../../img/share.png';
import './index.styl'

interface Props extends React.Props<any> {  // 参数类型审查
    match: match;
    history: History;
    Location: Location;
    home: any
}
interface State { // state 类型审查
}


class Vedio extends React.Component<Props, State> {
    readonly state: State = {

    }
    public async componentWillMount() {

    }
    public back = (): void => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div id="Vedio">
                <div className="vedio_box">
                    <video
                        src="http://www.raziel.site/general/v22.mp4"
                        width="100%"
                        height="100%"
                        poster="http://www.raziel.site/general/poster1.png"
                        controls
                    >

                    </video>
                </div>
                <div className="vedio_dec">
                    <div className="title_box">
                        <div className="title">
                            第一期  齐路通：自强不息
                       </div>
                        <div className="icon_box">
                            <div className="icon_item">
                                <img src={okImg} />
                                <span>
                                    195123312
                                </span>
                            </div>
                            <div className="icon_item">
                                <img src={viewImg} />
                                <span>
                                    19512342
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="dec_box">
                        本期介绍：假字假字假字假字假字假字假字假字假字假字假字假字假字假字
                        假字假字假字假字假字假字假字假字假字假字假字假字
                    </div>
                </div>
                <Anthology push={this.props.history.push} />
                <Poster />
                <div className="comment_box active">
                    <span className="comment_text">
                        全部评论
                    <span>
                            212331
                    </span>
                    </span>
                    <span className="icon_box">
                        <div className="icon_item">
                            <img src={commentImg} alt="评论" />
                            <span>
                                评 论
                        </span>
                        </div>
                        <div className="icon_item">
                            <img src={isokImg} alt="点赞" />
                            <span>
                                点 赞
                        </span>
                        </div>
                        <div className="icon_item">
                            <img src={shareImg} alt="分享" />
                            <span>
                                分 享
                        </span>
                        </div>
                    </span>
                </div>
                <div className="comments">
                        <div className="item">
                            <div className="tip">
                                <div className="user_dec">
                                    <img
                                    src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK7H70jhKO2oEyKkLB4EqHEJARTZxfCsLHbeN00gkoJPpIUTib8mx6kdr97FqYZo78a9tNibF2zdDlw/132" 
                                    alt="头像地址"
                                    />
                                    <div className="user_dec_box">
                                        <div className="user_name">
                                            用户的昵称假字假字假字
                                        </div>
                                        <div className="user_time">
                                            2019-06-23
                                        </div>
                                    </div>
                                </div>
                                <div className="ok_num">
                                        <img src={isokImg} alt="点赞"/>
                                        <span>
                                            7
                                        </span>
                                </div>
                            </div>
                            <div className="content">
                            假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假
                            字假字假字假字假字假字假字假字
                            </div>

                        </div>
                </div>

                <div className="input_box">
                    <img 
                    src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK7H70jhKO2oEyKkLB4EqHEJARTZxfCsLHbeN00gkoJPpIUTib8mx6kdr97FqYZo78a9tNibF2zdDlw/132" 
                    alt="头像"/>

                    <input type="text" className="input"/>
                    <button className="submit">发 表</button>
                </div>
            </div>
        );
    }
}
const mapState = (state: any) => ({
    home: state.home
});
const mapDispatchToProps = (dispatch: any) => {
    return {
        homeActions: bindActionCreators(homeActions, dispatch)
    }
}
export default connect(mapState, mapDispatchToProps)(Vedio);
