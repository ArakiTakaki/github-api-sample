import { observable, action } from 'mobx';
import * as API from './git_api';

export default class GitStore {
  @observable username = '';
  @observable password = '';
  @observable items = [];
  @observable userDetail = {};

  /**
   * @param {string} username
   */
  async getUser(username){
    this.userDetail = await API.getUserDetailRequest(username);
  }

}