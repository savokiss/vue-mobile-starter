import { http } from '../index';

type LoginData = {
  username: string;
  password: string;
}

type LoginResult = {
  code: number;
  expire: string;
  token: string;
}

export function adminLogin(data: LoginData) {
  return http.post<LoginResult>(`/wx/login`, data);
}

export function adminLogout() {
  return http.post(`/wx/logout`);
}