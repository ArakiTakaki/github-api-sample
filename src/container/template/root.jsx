import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';

//storesから使用するstoreを選択する
@inject('git')
@observer
export default class Root extends Component {

  componentDidMount() {
    this.props.git.getUser('ArakiTakaki');
  }

  render() {
    const {userDetail} = this.props.git;

    console.log(Object.keys(userDetail));
    return (
      <div>
        <h1>
        {userDetail.name}
        </h1>
      </div>
    )

  }

}
