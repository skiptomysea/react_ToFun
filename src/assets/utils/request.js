import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import api from '../api'

export function qnfetch(url, datas = {}, method = 'GET') {
  if (method === 'GET') {
    return fetch(url)
  } else {
    return fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(datas)
    })
  }
};

export function fetchWithToken(url) {
  if (localStorage.getItem('Token')) {
    const Token = localStorage.getItem('Token')

    return fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${Token}`
      },
    })
  } else {
    alert('重新登录吧')
  }
}

export const apiURL = api;
