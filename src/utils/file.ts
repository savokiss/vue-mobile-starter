import { API_HOST } from "@/config/api.config";

/**
 * 计算文件大小
 * @param {number} size 字节
 * @returns {string}
 */
export function fileSize(size: number): string {
  if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + "KB";
  } else if (size < 1024 * 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + "MB";
  } else {
    return (size / 1024 / 1024 / 1024).toFixed(2) + "GB";
  }
}

/**
 * 获取文件扩展名
 * @param {string} filePath
 * @returns {string}
 */
export function fileType(filePath: string): string {
  const index = filePath.lastIndexOf(".");
  return filePath.substring(index + 1);
}

// 获取服务端文件 URL
export function getFileUrl(filePath) {
  return `${API_HOST}/public/${filePath}`;
}

/**
 * n-upload 组件要求的 UploadFileInfo
 * @see https://www.naiveui.com/zh-CN/os-theme/components/upload#Upload-Props
 */
export function getUploadFileInfo (filePath: string, options = {}) {
  return [{
    id: 1,
    name: filePath,
    url: getFileUrl(filePath),
    status: 'finished',
    ...options,
  }]
}
