import { useLocation, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * 路由守卫, 判断权限是否存在,不存在返回登录页
 */
export const useAuthGuide = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const isLogin = localStorage.getItem('Authorization');

    if (!isLogin) {
      history.push('/');
    }
  }, [location, history]);
};
