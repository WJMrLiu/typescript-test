import request from '@/utils/request';

export const testSysUserLogin = (props: any) => {
  return request({
    url: '/user/login',
    method: 'get',
    params: props,
  });
};
