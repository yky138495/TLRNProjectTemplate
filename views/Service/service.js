'use strict';

var Service = {
  host:'http://127.0.0.1:3000',
  login: '/user/login',
  loginByToken: '/user/login/token',
  getUser: '/user/get',
  createUser: '/user/create',
  updatePassword: '/user/password/update',
  deleteUser: '/user/delete',
  getOfflinePro: '/offlinepro/get'
};

module.exports = Service;
