import { isObject } from 'es-toolkit/compat'
import { isFormData } from './is';


type RequestOptions = RequestInit & {
    baseURL?: string;
    timeout?: number;
};

type Response<T = any> = {
    code: number;
    data: T;
    message: string;
};

class HttpRequest {
    private baseURL: string;
    private timeout: number;

    constructor(options: RequestOptions = {}) {
        this.baseURL = options.baseURL || '';
        this.timeout = options.timeout || 10000;
    }

    // 请求拦截器
    private beforeRequest(options: RequestInit) {
        const headers = new Headers(options.headers);
        // 添加token
        const token = localStorage.getItem('token');
        if (token) {
            headers.append('Authorization', `Bearer ${token}`);
        }
        return {
            ...options, headers,
            // mode: 'no-cors', // 跨域模式
        };
    }

    // 响应拦截器
    private afterRequest(response: Response) {
        // 这里可以统一处理响应
        const { code, data, message } = response;

        if (code === 200) {
            return data;
        }

        // 处理token过期
        if (code === 401) {
            // 清除token并跳转登录页
            localStorage.removeItem('token');
            window.location.href = '/login';
            throw new Error('登录已过期，请重新登录');
        }

        throw new Error(message || '请求失败');
    }

    async request<T>(url: string, options: RequestOptions = {}): Promise<T> {
        const finalURL = this.baseURL + url;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        try {
            const finalOptions = this.beforeRequest({
                ...options,
                signal: controller.signal,
            });

            const response = await fetch(finalURL, finalOptions);
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result
            return this.afterRequest(result);
        } catch (error) {
            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    throw new Error('请求超时');
                }
                throw error;
            }
            throw new Error('请求失败');
        }
    }

    // GET请求
    get<T>(url: string, params?: Record<string, any>, options?: RequestOptions) {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request<T>(url + queryString, {
            method: 'GET',
            ...options
        });
    }

    // POST请求
    post<T>(url: string, data?: any, options?: RequestOptions) {
        return this.request<T>(url, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data',
            // },
            body: isFormData(data) ? data : JSON.stringify(data),
            ...options
        });
    }

    // PUT请求
    put<T>(url: string, data?: any, options?: RequestOptions) {
        return this.request<T>(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            ...options
        });
    }

    // DELETE请求
    delete<T>(url: string, options?: RequestOptions) {
        return this.request<T>(url, {
            method: 'DELETE',
            ...options
        });
    }
}

// 创建实例
const request = new HttpRequest({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 10000
});

export default request;