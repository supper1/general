import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Store from '../redux/store/Store';
import * as actionTypes from '../redux/constants/actionTypes'
import "../compontents/Loading/index.styl"
const Cover = React.lazy(() => import("../page/Cover"));


const AppRouter: React.FC = () => {
    useEffect(() => {
        
        let time_end: number = new Date(1560388334000).getDate()
        let now_time: number = new Date().getDate()
        Store.dispatch({
            type: actionTypes.SAVE_TIME_CLOCK,
            data: now_time - time_end + 1
        })
        let u:string = navigator.userAgent;
        let isiOS:boolean = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if(isiOS){
            Store.dispatch({
                type:actionTypes.SHARE_URL,
                data:{
                    url:window.location.href
                }
            })
           
        }else{
            Store.dispatch({
                type:actionTypes.SHARE_URL,
                data:{
                    url:false
                }
            })
        }
        
    });

    return (
        <Router>
            <Suspense fallback={ <div className="Loading_box">
                <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            </div>}>
                <div>
                    <Switch>
                        <Route path='/' exact component={Cover} />
               

                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </div>
            </Suspense>
        </Router>
    )

}

export default AppRouter