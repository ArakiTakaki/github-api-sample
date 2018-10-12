import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import './style.css'

import {UserRepos} from '../../../component/modules/UserModules';

@inject('git')
@observer
export default class ShowRepos extends Component {

  constructor(props) {
    super(props);
  }

  onRepositoryGet() {
    this.props.git.getRepos();
  }

  //TODO MobXである程度制御したい。 (PopUPでURLぐらい流しても良いんじゃない？　)
  copyEvent(event){
    let copyModule = document.createElement('textarea');
    copyModule.textContent = event.target.dataset.link;
    document.body.appendChild(copyModule);
    copyModule.select();
    const copy = document.execCommand('copy');
    console.log(copy);
    document.body.removeChild(copyModule);
  }

  render() {
    const { repos } = this.props.git;

    //開ける用 API制限だるい。
    if(repos.length === 0)
      return <button onClick={this.onRepositoryGet.bind(this)}>リポジトリの表示</button>;

    let list = [];
    for ( let repo of repos ){
      list.push(
        <UserRepos
          repo={repo}
          event={this.copyEvent.bind(this)}
          key={repo.id}/>
      );
    }

    return(
      <div styleName="root">
        {list}
      </div>
    )
  }

}

