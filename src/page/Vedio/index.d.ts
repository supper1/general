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
interface Comment{ // 评论类型
    createTime:string;
    student:Student;
    id:number;
    content:string;
    praise:number
}
interface Praise{ // 我的点赞
    commentId:number;
    id:number
}
interface General{
    id:number;
    play:number;
    praise:number
}
interface State { // state 类型审查
    inputOff:Boolean;
    Comments:Array<Comment>;
    myPraise:Array<Praise>;
    shareOff:Boolean;
    data:videoData;
    id:number;
    generals:any;
    myGeneral:General;
    commentCount:number;
    commentPraiseList:Array<number>;
    value:string;
    moreOff:Boolean;
    page:number
}
export {Props , State}
