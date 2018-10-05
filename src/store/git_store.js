import { observable, action } from 'mobx';
import * as API from './git_api';

export default class GitStore {

  // ログイン用ユーザネーム
  @observable username = '';

  // ログイン用パスワード
  @observable password = '';

  // リポジトリ
  @observable repos = [];

  // ユーザの詳細情報
  @observable user_detail = {};

  // 読み込み中のフラグ
  @observable now_loading_flag = true;

  /**
   * ユーザ情報の取得を行う
   * @param {string} username
   */
  async getUser(username){
    this.now_loading_flag = false;
    this.user_detail = {};
    this.user_detail = await API.getUserDetailRequest(username);
    this.repos = []; //repositoryの初期化
    this.now_loading_flag = true;
  }

  /**
   * ユーザ情報の取得を行う
   * @param {string} username
   */
  async getRepos(){
    if (this.user_detail.repos_url == undefined) return;
    this.now_loading_flag = false;
    this.repos = await API.getUserRepositoryRequest(this.user_detail.repos_url);
    this.now_loading_flag = true;
  }


}