import React from 'react';
import viewImg from '../../img/viewb.png';
import './index.styl'
import {videoData} from '../../page/data';
interface State  { // state 类型审查
 
}
interface Props  { // state 类型审查
    push:Function;
    data:videoData;
    type?:Boolean;
    viewNum?:number
}

class Issue extends React.Component<Props,State> {
 
  readonly state: State = {
 
  }
  public async componentWillMount() {
     
  }
  gotoVedio = ():void=>{
    if(this.props.type){
      this.props.push("/AppVedio?id="+this.props.data.id)

    }else{
      this.props.push("/vedio?id="+this.props.data.id)

    }
  }
  render() {
    return (
      <div id="Issue" onClick={this.gotoVedio}>
        <div className="view_num">
          <img src={viewImg} alt="view"/>
          <span>{this.props.viewNum}</span>
        </div>
                 <div className="img_box"> 
                 <img src={this.props.data.imgUrl} alt="封面图" className="userImg"/>
                 <div className="shadow">
                    <div className="order">
                        {this.props.data.order}
                    </div>
                 </div>
                </div>   
                <div className="name">
                    <div className="top">
                        {this.props.data.title}
                    </div>
                    <div className="dec">
                        {this.props.data.dec}
                    </div>
                </div>
            
       
      </div>
    );
  }
}
export default Issue;
