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
const UpdateUserInfo = (data) => {
  return apiAxios({
    method: 'post',
    url: '/api/UpdateUserInfo',
    data: data,
  });
};
const GetArticle = (data) => {
  return apiAxios({
    method: 'post',
    url: '/api/getArticle',
  });
};
const FindArticle = (data) => {
  return apiAxios({
    method: 'post',
    url: '/api/findArticle',
    data: data,
  });
};
const GetVideo = (data) => {
  return apiAxios({
    method: 'post',
    url: '/api/getVideo',
  });
};
const FindVideo = (data) => {
  return apiAxios({
    method: 'post',
    url: '/api/findVideo',
    data: data,
  });
};
export {
  Login,
  Register,
  Upload,
  UserInfo,
  UpdateUserInfo,
  GetArticle,
  FindArticle,
  GetVideo,
  FindVideo,
};
