
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建自定义响应数据接口
interface CustomResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL:import.meta.env.VITE_APP_API_URL, // 基础URL
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求发送前做一些处理，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('请求错误：', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<CustomResponse>) => {
    const res = response.data;
    
    // 这里可以根据后端的状态码约定做相应的处理
    if (res.code !== 200) {
    //   message.error(res.message || '请求失败');
      
      // 特定状态码处理，例如token过期
      if (res.code === 401) {
        // 处理登出逻辑
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      
      return Promise.reject(new Error(res.message || '请求失败'));
    }
    
    return res.data; // 直接返回数据部分
  },
  (error) => {
    console.error('响应错误：', error);
    // message.error(error.message || '网络错误');
    return Promise.reject(error);
  }
);

// 封装请求方法
export const request = {
  get<T = any>(url: string, config?: AxiosRequestConfig) {
    return service.get<any, T>(url, config);
  },
  
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return service.post<any, T>(url, data, config);
  },
  
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return service.put<any, T>(url, data, config);
  },
  
  delete<T = any>(url: string, config?: AxiosRequestConfig) {
    return service.delete<any, T>(url, config);
  }
};

export default request;