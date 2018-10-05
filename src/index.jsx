import { h, render } from 'preact';
import { Provider } from 'mobx-preact';
import Root from './container/template/root';
import GitStore from './store/git_store';

//この中にstoreを増やしていく。
const stores = {
  git: new GitStore()
};

render(
  <Provider {...stores}>
    <Root/>
  </Provider>
, document.getElementById('mount'));