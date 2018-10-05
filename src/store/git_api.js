import {createFetch} from '../util/api/fetch'

export const getUserDetailRequest = async (api) => {
  try{
    const res = await fetch('https://api.github.com/users/' + api, {mode:'cors'})
    return await res.json();
  }catch(e){
    return new Error('接続ができませんでした。');
  }
}