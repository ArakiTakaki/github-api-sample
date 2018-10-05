const baseUrl ="https://github.com";

/**
 *
 * @param {string} api API名を叩く
 * @param {GET, POST, PUT, DELETE} method HTTPMethod
 * @param {Object} values [{key: value}]型
 */
export async function createFetch(api,method,values){
  let url = baseUrl + api;
  let header = {};

  if(method == 'GET') url += "?" + getParamsParse(values);
  if(method != 'GET') header = values;

  const body = {
    method: method,
    mode: 'same-origin',
    headers: header
  }
  return await fetch(url,body);
}

function getParamsParse(params){
  let list = [];
  for(let key of params){
    list.push(`${key}=${param[key]}`);
  }
  return list.join('&');
}
