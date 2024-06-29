'use client';

import { Button, Divider, Image, Input, Spacer } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import BgImg from './assets/images/bg.jpg';
import LogoImg from './assets/images/logo.png';
import EyeOpenSvg from './assets/icons/eye-open.svg';
import EyeCloseSvg from './assets/icons/eye-close.svg';
import GoogleSvg from './assets/icons/google.svg';
import MetaSvg from './assets/icons/meta.svg';
import AppleSvg from './assets/icons/apple.svg';
import { useAuthentication } from '@lib/hooks/use-authentication';
import { useAppDispatch } from '@lib/store';
import { setUser } from '@lib/services/global-states';

const Login = () => {
  const router = useRouter();

  const { isLoading: isLoadingAuth, user } = useAuthentication();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoadingAuth) return;
    if (user) router.replace('/');
  }, [user, router, isLoadingAuth]);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    dispatch(
      setUser({ name: 'NM Thang', accessToken: 'TRUE_TOKEN_ey12312312313' }),
    );
  };

  return (
    !user && (
      <div className="relative w-full h-screen">
        <div className="relative w-full h-full z-0">
          <Image
            removeWrapper
            src={BgImg.src}
            alt="Banner"
            radius="none"
            className="w-full h-full object-cover z-0"
          />

          <div className="absolute top-32 left-16 flex flex-col gap-6">
            <div className="relative w-[476px] h-[140px]">
              <div className="absolute top-0 left-0 w-full h-full backdrop-blur-lg bg-white/60 rounded-[20px]"></div>

              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-full flex justify-center items-center mix-blend-darken">
                  <Image
                    removeWrapper
                    src={LogoImg.src}
                    alt="Banner"
                    radius="none"
                    className="w-[320px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="top-0 left-0 self-start backdrop-blur-lg bg-white/60 rounded-xl px-5 py-2">
              <span className="font-semibold text-[#434446] opacity-65">
                Sell your property with ease!
              </span>
            </div>
          </div>
        </div>

        <div className="fixed right-0 top-0 bottom-0 w-[40%] bg-white h-screen flex justify-center items-center">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-[40px] font-bold uppercase">
                Let{'’'}s <br /> get started
              </span>
              <div>
                <Divider className="h-2 w-[30%] float-end mt-6 bg-[#79C420]" />
              </div>
            </div>
            <div>
              <Input
                variant="bordered"
                size="sm"
                type="text"
                label={'Your email address / phone number'}
                labelPlacement={'outside'}
                placeholder="Project Name"
                classNames={{
                  input: ['text-xs'],
                  inputWrapper: [
                    'border-[1px] group-data-[focus=true]:border-[#79C420]',
                  ],
                  label: ['font-medium !text-[#8A8A8A] pl-2'],
                }}
              />
              <Spacer y={4} />
              <Input
                variant="bordered"
                size="sm"
                type={showPassword ? 'text' : 'password'}
                label={'Your password'}
                labelPlacement={'outside'}
                placeholder="Project Name"
                classNames={{
                  input: ['text-xs w-unset flex-grow'],
                  inputWrapper: [
                    'border-[1px] group-data-[focus=true]:border-[#79C420]',
                  ],
                  label: ['font-medium !text-[#8A8A8A] pl-2'],
                }}
                endContent={
                  !showPassword ? (
                    <EyeOpenSvg
                      className="flex-shrink-0 text-[#8A8A8A] cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <EyeCloseSvg
                      width="20"
                      height="20"
                      className="flex-shrink-0 text-[#8A8A8A] cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  )
                }
              />
            </div>
            <Button
              className="bg-[#79C420] text-white font-bold rounded-lg "
              onClick={handleLogin}
            >
              LOG IN
            </Button>
            <div className="flex justify-center">
              <span className="text-[14px] font-medium text-[#434446]">
                Doesn{'’'}t have an Account?{' '}
                <Link
                  href={'/register'}
                  className="text-[#79C420] cursor-pointer"
                >
                  Register
                </Link>
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-[14px]">Or login with </span>
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-lg shadow-lg flex justify-center items-center cursor-pointer hover:bg-gray-50">
                  <GoogleSvg className="cursor-pointer" />
                </div>
                <div className="w-12 h-12 rounded-lg shadow-lg flex justify-center items-center cursor-pointer hover:bg-gray-50">
                  <MetaSvg className="cursor-pointer" />
                </div>
                <div className="w-12 h-12 rounded-lg shadow-lg flex justify-center items-center cursor-pointer hover:bg-gray-50">
                  <AppleSvg className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
