import React from 'react';
import menuImg from '../../img/menu.png';
import './index.styl'
import Issue from '../Issue/index'
import {vedioArr} from '../../page/data'
interface State  { // state 类型审查
  data:any
}
interface viewDate{
  id:number,
  play:number
}
interface Props{
    push:Function,
    viewArr:Array<viewDate>
}


class Anthology extends React.Component<Props,State> {
 
  readonly state: State = {
    data:{}
  }
  public async componentWillMount() {
    let data:any = {}
    this.props.viewArr.map((item:any)=>data[item.id]=item.play)
    this.setState({
      data
    })
   
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
            { vedioArr.map(item=><Issue
             key={item.id} 
             data={item} 
             push={this.props.push}
             viewNum={this.state.data[item.id]}
             />) 
             }
         
            </div>
          </div>
       
      </div>
    );
  }
}
export default Anthology;
