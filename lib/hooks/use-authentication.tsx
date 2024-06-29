import { setUser } from '@lib/services/global-states';
import { useAppDispatch, useAppSelector } from '@lib/store';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const LOGIN_PATH = '/login';

export const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.globalStates);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === LOGIN_PATH) return;
    if (!user) window.location.href = LOGIN_PATH;
  }, [pathname, user]);

  useEffect(() => {
    if (pathname === LOGIN_PATH) return;

    const cookie = document.cookie;
    const accessToken = cookie.split('accessToken=')[1];

    if (accessToken && accessToken === 'TRUE_TOKEN_ey12312312313') {
      dispatch(setUser({ name: 'NM Thang', accessToken }));
      return;
    }

    window.location.href = LOGIN_PATH;
  }, [dispatch, pathname]);

  return user;
};
