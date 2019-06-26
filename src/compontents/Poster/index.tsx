import React from 'react';
import cardImg from '../../img/card.png';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './index.styl'
import user4 from '../../img/user4.jpg';
import user6 from '../../img/user6.jpg';
import user7 from '../../img/user7.jpg';
interface State { // state 类型审查
    swiperIndex:number
}
class Poster extends React.Component {

    readonly state: State = {
        swiperIndex:0
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
                        <div className="swiper-slide">
                            <img src={user4} alt="用户4" />

                        </div>
                         <div className="swiper-slide">
                            <img src={user6} alt="用户4" />

                        </div> 
                        <div className="swiper-slide">
                            <img src={user7} alt="用户4" />

                        </div>
                         <div className="swiper-slide">
                            <img src={user4} alt="用户4" />

                        </div>
                        <div className="swiper-slide">
                            <img src={user6} alt="用户4" />

                        </div>

                        <div className="swiper-slide">
                            <img src={user7} alt="用户4" />

                        </div>


                    </div>

                   
                </div>
                <div className="bottom_text">
                    <div className="name">
                        鲍 齐
                    </div>
                    <div className="user_dec">
                        中国人名解放军原海军上海基地副参谋长
                    </div>
                </div>

            </div>
        );
    }
}
export default Poster;
