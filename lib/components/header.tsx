import { LogoImg } from '@lib/global/images';
import { Image } from '@nextui-org/react';
import React from 'react';

const Header = () => {
  return (
    <header className="container fixed top-0 left-0 right-0 z-10 flex items-center justify-between w-full h-16 px-4 text-white">
      <div>
        <Image src={LogoImg.src} alt="Logo" width={40} height={40} />
      </div>
      <div className="flex items-center">
        <div className="text-xl font-bold">My App</div>
      </div>
    </header>
  );
};

export default Header;
