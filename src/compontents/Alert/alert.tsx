/**
 * @description  弹窗提示组件
 * @author raziel
 * @since 19/06/06
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './alert.css'
// import
interface State { // state 类型审查
  off: boolean,
  closeAlert: Function,
  alertTip: string,
  alertStatus: boolean
}
interface Props { // props 类型审查
  alertTip: string,
  closeAlert?: Function,
  alertStatus?: boolean
}
// let defaultState: State = {
//   off: false,
//   alertTip: '提示',
//   alertStatus: false,
//   closeAlert: () => { }
// }
class Alert extends React.Component<State> {

  readonly state: State = {
    off: false,
    alertTip: '提示',
    alertStatus: false,
    closeAlert: () => { }
  };

  // 关闭弹框
  confirm = (): void => {
    this.setState({
      alertStatus: false
    })
    this.state.closeAlert();
  }
  open = (options: Props): void => {

    options.alertStatus = true;
    this.setState({

      ...options
    })
  }
  render() {

    return (

      <div className="alert-con" style={this.state.alertStatus ? { display: 'block' } : { display: 'none' }}>
        <div className="alert-context" >
          <div className="alert-content-detail"> <div>
            {this.state.alertTip}
          </div> </div>
          <div className="comfirm" onClick={this.confirm}>确 定</div>
        </div>
      </div>

    );
  }
}
let div = document.createElement('div');
document.body.appendChild(div);

let Box = ReactDOM.render(React.createElement(
  Alert,
), div);



export default Box;