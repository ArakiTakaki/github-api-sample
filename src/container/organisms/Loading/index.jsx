import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import './style.css';

@inject('git')
@observer
export default class LoadingModule extends Component {

  render(){
    const {now_loading_flag} = this.props.git;
    if(now_loading_flag) return;
    return (
      <div styleName="root">
        <span styleName="sample1"></span>
        <span styleName="sample2"></span>
        <span styleName="sample3"></span>
        <span styleName="sample4"></span>
      </div>
    );
  }
}

