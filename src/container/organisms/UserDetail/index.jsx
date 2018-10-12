import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import ShowRepos from '../ShowRepos';
import Fadein from  '../../../animations/fadein.css';
import './style.css'

import {UserProfile} from '../../../component/modules/UserModules';

@inject('git')
@observer
export default class UserDetail extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { user_detail } = this.props.git;

    if (Object.keys(user_detail).length == 0) return;

    console.log(Object.keys(user_detail));
    for (let key of Object.keys(user_detail)) {
      console.log(`${key} : ${user_detail[key]}`);
    }

    return (
      <div className={Fadein.def} >
        <UserProfile
          link={user_detail.link}
          name={user_detail.name}
          img={user_detail.avatar_url}
          repos={user_detail.public_repos}/>
        <p>
          公開リポジトリ: {user_detail.public_repos}
        </p>
        <div>
          <ShowRepos/>
        </div>
        <p>
        </p>
      </div>
    )
  }
}