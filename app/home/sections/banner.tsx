import { BgImg, LogoImg } from '@lib/global/images';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

export const Banner = () => {
  return (
    <div className="w-full h-screen relative">
      <Image
        src={BgImg}
        alt="Banner"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col justify-center items-center gap-5">
        <Image src={LogoImg} alt="Banner" className="w-20" />
        <h1 className="text-4xl font-bold">
          Let{"'"}s get <br /> started
        </h1>
        <div className="flex gap-2">
          <Button color="default" className="uppercase w-[160px]">
            Existing Order
          </Button>
          <Button color="success" className="uppercase text-white w-[160px]">
            New Order
          </Button>
        </div>
      </div>
    </div>
  );
};
