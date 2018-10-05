import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import ShowRepos from '../ShowRepos';
import Fadein from  '../../../animations/fadein.css';

@inject('git')
@observer
export default class UserDetail extends Component {
  constructor(props) {
    super(props)
  }

  onRepositoryGet() {
    this.props.git.getRepos();
  }

  render() {
    const { user_detail } = this.props.git;
    //varidation
    if (Object.keys(user_detail).length == 0) return null;

    console.log(Object.keys(user_detail));
    for (let key of Object.keys(user_detail)) {
      console.log(`${key} : ${user_detail[key]}`);
    }

    return (
      <div className={Fadein.def}>
        <h1>
          {user_detail.name}
        </h1>
        <div>
          <button onClick={this.onRepositoryGet.bind(this)}>
            リポジトリの閲覧
          </button>
          <ShowRepos/>
        </div>
        <p>
          公開リポジトリ: {user_detail.public_repos}
        </p>
      </div>
    )
  }
}