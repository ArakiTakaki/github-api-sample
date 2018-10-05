import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';

@inject('git')
@observer
export default class ShowRepos extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { repos } = this.props.git;

    if (repos.length == 0) return null;

    let list = [];
    for ( let repo of repos ){
      list.push(
        <div key={repo.id}>
          <h1>
            Repository Name :
            <a href={repo.html_url}>{repo.name}</a>
          </h1>
          <p>CLONE URL {repo.git_url}</p>
          <p>CLONE URL {repo.ssh_url}</p>
        </div>
      );
    }

    return(
      <div>
        {list}
      </div>
    )
  }

}

