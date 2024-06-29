import { LogoImg } from '@lib/global/images';
import { setUser } from '@lib/services/global-states';
import { useAppDispatch } from '@lib/store';
import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
    window.location.href = '/login';
  };

  const navLinks = [
    {
      title: 'About',
      url: '/home',
    },
    {
      title: 'Gallery',
      url: '/gallery',
    },
    {
      title: 'Feature',
      url: '/feature',
    },
    {
      title: 'Cart',
      url: '/cart',
    },
    {
      title: 'Contact Us',
      url: '/contact',
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white">
      <div className="container flex items-center justify-between h-16 px-4  mx-auto">
        <Image
          src={LogoImg.src}
          alt="Logo"
          className="flex-shrink-0 w-[120px] h-[42px]"
          width="120px"
          height="42px"
        />
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-12">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.title}
                href={navLink.url}
                className="font-bold text-[#434446] hover:text-green-600 transition-colors"
              >
                {navLink.title}
              </Link>
            ))}
          </div>
        </div>
        <Button
          variant="flat"
          size="sm"
          className="text-sm font-bold text-[#434446] px-6"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </div>
    </header>
  );
};

export default Header;
