import { PdfFileImg } from '@lib/global/images';
import { Image, Tooltip } from '@nextui-org/react';
import React from 'react';

type ItemFileProps = {
  filename: string;
};

export const ItemFile = ({ filename }: ItemFileProps) => {
  return (
    <div className="flex flex-col gap-2 items-stretch w-[120px] cursor-pointer">
      <div className="pt-1">
        <Image
          removeWrapper
          className="object-cover p-2 shadow-small h-[120px] "
          src={PdfFileImg.src}
          fallbackSrc="https://via.placeholder.com/300x200"
          alt="NextUI Image with fallback"
        />
      </div>
      <Tooltip content={filename} delay={500}>
        <span className="text-sm font-bold uppercase mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {filename}
        </span>
      </Tooltip>
    </div>
  );
};
