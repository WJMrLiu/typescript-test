import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { Message } from 'element-ui';
// axios.defaults.timeout = 5000;
if (process.env !== 'production') {
  axios.defaults.baseURL = '/api';
}
if (process.env.VUE_APP_FLAG === 'buildtest') {
  axios.defaults.baseURL = 'http://shyc.dccnet.com.cn';
}

if (process.env.VUE_APP_FLAG === 'prod') {
  axios.defaults.baseURL = 'http://per.sh.icbc.com.cn';
}

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  // 给每个请求添加一个时间戳， 防止走缓存。 可以解决在ie浏览器上不请求的问题
  (config: AxiosRequestConfig) => {
    if (config.method === 'post') {
      config.data = {
        ...config.data,
        _t: Date.parse(new Date() + '') / 1000,
      };
    } else if (config.method === 'get') {
      config.params = {
        _t: Date.parse(new Date() + '') / 1000,
        ...config.params,
      };
    }
    return config;
  },
);

const request = (options: any) => {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      Message({
        type: 'error',
        message: '请求错误',
      });
      return Promise.reject(error);
    });
};

export default request;
