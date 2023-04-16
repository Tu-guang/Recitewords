import qs from 'qs';
import { apiAxios } from './request.js';

const Login = (data) => {
  return apiAxios({
    method: 'post',
    url: '/api/login',
    data: data,
  });
};

const Register = (data) => {
  return apiAxios({
    method: 'post',
    url: '/api/register',
    data: data,
  });
};

const Upload = (data) => {
  return apiAxios({
    method: 'post',
    url: 'http://localhost:8081/api/upload',
    data: data,
  });
};
const UserInfo = (data) => {
  return apiAxios({
    method: 'post',
    url: '/api/userInfo',
    data: data,
  });
};
export { Login, Register, Upload, UserInfo };
