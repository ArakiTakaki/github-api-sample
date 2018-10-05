import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import UserDetail from '../organisms/UserDetail';
import LoadingModule from '../organisms/loading';

//storesから使用するstoreを選択する
@inject('git')
@observer
export default class Root extends Component {

  constructor(props){
    super(props)
    this.state = {
      inputUser: ""
    }
  }

  onTextChange(event){
    this.setState({inputUser:event.target.value});
  }

  onSubmit(){
    this.props.git.getUser(this.state.inputUser);
  }

  render() {
    return (
      <div>
        <LoadingModule/>
        <input
          type="text"
          onInput={this.onTextChange.bind(this)}
          name=""
          id=""/>
        <button
          onClick={this.onSubmit.bind(this)}>
          ユーザを探す
        </button>
        <UserDetail/>

      </div>
    )
  }

}
