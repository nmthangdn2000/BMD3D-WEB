import { PdfFileImg } from '@lib/global/images';
import { Image, Tooltip } from '@nextui-org/react';
import React from 'react';

import TrashSvg from '../assets/icons/trash.svg';

type ItemFileProps = {
  filename: string;
  index: number;
  onRemove: (index: number) => void;
};

export const ItemFile = ({ index, filename, onRemove }: ItemFileProps) => {
  return (
    <div className="group relative flex flex-col gap-2 items-stretch w-[120px] cursor-pointer">
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
      <div className="absolute rounded-lg z-10 w-full h-full bg-black/40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity flex items-center justify-center">
        <div
          className="w-8 h-8 rounded flex items-center justify-center bg-white"
          onClick={() => {
            onRemove(index);
          }}
        >
          <TrashSvg />
        </div>
      </div>
    </div>
  );
};
