import React from 'react';
import user4 from '../../img/user4.jpg'
import './index.styl'
interface State  { // state 类型审查
 
}
interface Props  { // state 类型审查
    push:Function
}

class Issue extends React.Component<Props,State> {
 
  readonly state: State = {
 
  }
  public async componentWillMount() {
      
  }
  gotoVedio = ():void=>{
    this.props.push("/vedio")
  }
  render() {
    return (
      <div id="Issue" onClick={this.gotoVedio}>
      
                 <div className="img_box"> 
                 <img src={user4} alt="封面图" className="userImg"/>
                 <div className="shadow">
                    <div className="order">
                        第一期
                    </div>
                 </div>
                </div>   
                <div className="name">
                    <div className="top">
                        刘文清：勤奋好学
                    </div>
                    <div className="dec">
                        任何时候都不能骄傲
                    </div>
                </div>
            
       
      </div>
    );
  }
}
export default Issue;
