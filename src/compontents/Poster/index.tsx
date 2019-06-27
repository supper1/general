import React from 'react';
import cardImg from '../../img/card.png';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './index.styl'
import {userArr} from '../../page/data'
interface State { // state 类型审查
    swiperIndex:number,
}
interface Props {
    push:Function
}
class Poster extends React.Component<Props,State> {

    readonly state: State = {
        swiperIndex:0,
    }
    public async componentWillMount() {

    }
    componentDidMount() {
        let _this = this
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: -35,
            width: window.innerWidth,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            on: {
                slideChangeTransitionEnd: ()=>{
                   _this.setState({
                    swiperIndex:swiper.activeIndex
                   })
                },
              },
        });

    }
    gotoUser = (id:number):void=>{
        this.props.push("/user?id="+id)
    }
    render() {
        return (
            <div id="Poster">
                <div className="title">
                    <img src={cardImg} alt="card" className="cardImg" />
                    <span className="tip_text">
                        将军介绍
                </span>
                </div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                      { userArr.map(item=><div key={item.id} className="swiper-slide" onClick={()=>this.gotoUser(item.id)}>
                            <img src={item.imgUrl} alt="用户4" />

                        </div>)}
                         


                    </div>

                   
                </div>
                <div className="bottom_text">
                    <div className="name">
                    {userArr[this.state.swiperIndex].name}
                    </div>
                    <div className="user_dec">
                        {userArr[this.state.swiperIndex].langPosition}
                    </div>
                </div>

            </div>
        );
    }
}
export default Poster;
