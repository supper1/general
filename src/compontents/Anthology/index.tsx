import React from 'react';
import menuImg from '../../img/menu.png';
import user4 from '../../img/user4.jpg'
import './index.styl'
import Issue from '../Issue/index'
interface State  { // state 类型审查
 
}
interface Props{
    push:Function
}


class Anthology extends React.Component<Props,State> {
 
  readonly state: State = {
 
  }
  public async componentWillMount() {
 
  }
  viewMore = ():void=>{
    this.props.push("/list")
  }
  render() {
    return (
      <div id="Anthology">
          <div className="title">
            <img src={menuImg} alt="菜单" className="menuImg"/>
            <span className="Anthology_text">
                选 集
            </span>
            <div className="view_more" onClick={this.viewMore}>
                查看更多 >
            </div>
          </div>
          <div className="scroll_box">
          <div className="box">
             <Issue push={this.props.push}/>
             <Issue push={this.props.push}/>
             <Issue push={this.props.push}/>
             <Issue push={this.props.push}/>
             <Issue push={this.props.push}/>
         
            </div>
          </div>
       
      </div>
    );
  }
}
export default Anthology;
