// 服务器地址，见 .env
export const API_HOST = import.meta.env.VITE_API_HOST;

export const API_PREFIX = import.meta.env.VITE_API_PREFIX;

export const API_URL = `${API_HOST}${API_PREFIX}`;

export const HTTP_TIMEOUT = 10000; // 设置请求超时时间
