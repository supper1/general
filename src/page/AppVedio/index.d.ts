import React from 'react';
import { History, Location } from "history"
import { match } from "react-router-dom"
import {videoData} from '../data'
interface Props extends React.Props<any> {  // 参数类型审查
    match: match;
    history: History;
    Location: Location;
    home: any
}
interface Student{ // 用户数据类型
    imgUrl:string;
    nickName:string;
}
 
 
interface State { // state 类型审查
    inputOff:Boolean;
 
    shareOff:Boolean;
    data:videoData;
    id:number
}
export {Props , State}
