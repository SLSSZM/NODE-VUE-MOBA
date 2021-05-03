import axios from 'axios'
import Vue from 'vue'
import router from '../router/index'

//创建axios实例
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || '/admin/api',
  timeout: 5000
})

// 请求拦截
http.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
http.interceptors.response.use(response => {
  return response
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message.error(err.response.data.message)
    if (err.response.status === 401) {
      router.push('/login')
    }
  }

  return Promise.reject(err)
})

export default http
