import { http } from '../index'
import { useAuthStore } from '@/stores/auth'

class FileApi {
  basePath = '/admin'

  get uploadUrl () {
    return `${this.basePath}/file/upload`
  }

  getUploadHeaders () {
    const authStore = useAuthStore()
    return {
      Authorization: `Bearer ${authStore.token}`
    }
  }

  upload() {
    return http.post(this.uploadUrl)
  }

  history(params?: Record<string, unknown>) {
    return http.get(`${this.basePath}/file/history`, { params })
  }
}

export const fileApi = new FileApi()
