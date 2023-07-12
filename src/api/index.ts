import type { InternalAxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import axios, { AxiosError } from 'axios'
import { API_URL, HTTP_TIMEOUT } from '@/config/api.config'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'

class ApiService {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: API_URL,
      timeout: HTTP_TIMEOUT, // 设置请求超时时间
      validateStatus(status) {
        // 验证状态码是否在200-500之间
        return status >= 200 && status < 500
      }
    })

    this.initInterceptors()
  }

  initInterceptors() {
    this.instance.interceptors.request.use(this.handleRequest, this.handleError)
    this.instance.interceptors.response.use(this.handleResponse, this.handleError)
  }

  handleRequest(config: InternalAxiosRequestConfig) {
    const authStore = useAuthStore()
    if (authStore.token) {
      config.headers['Authorization'] = `Bearer ${authStore.token}`;
    }
    return config
  }

  handleResponse<T = any>(response: AxiosResponse<T>) {
    const authStore = useAuthStore()
    if (response.status === 401) {
      // 处理未登录
      authStore.logout()
      router.push({
        path: '/login',
        query: { code: 401 }
      })
    }
    return response
  }

  handleError(error: AxiosError) {
    // 在这里处理你的错误
    throw error
  }

  async get(url: string, params?: Record<string, unknown>) {
    return this.instance.get(url, { params }).then((res) => res.data)
  }

  async post<T = any>(url: string, data?: Record<string, unknown>): Promise<T> {
    return this.instance.post<T>(url, data).then((res) => res.data)
  }
}

export const http = new ApiService()
