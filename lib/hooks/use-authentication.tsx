import { setUser } from '@lib/services/global-states';
import { useAppDispatch, useAppSelector } from '@lib/store';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LOGIN_PATH = '/login';
const REGISTER_PATH = '/register';

export const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.globalStates);
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const cookie = document.cookie;
    const accessToken = cookie.split('accessToken=')[1];

    if (accessToken === 'TRUE_TOKEN_ey12312312313') {
      dispatch(setUser({ name: 'NM Thang', accessToken }));
    } else if (![LOGIN_PATH, REGISTER_PATH].includes(pathname))
      window.location.href = LOGIN_PATH;

    setIsLoading(false);
  }, [dispatch, pathname, setIsLoading]);

  return { isLoading, user };
};
