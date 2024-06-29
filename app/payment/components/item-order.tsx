import { Image, Spacer } from '@nextui-org/react';
import React, { useEffect } from 'react';
import CloseSvg from '../assets/icons/close.svg';

export type CartItemData = {
  src: string;
  quantity: number;
  unitPrice: number;
  lightning: string;
  season: string;
  res: string;
  lightningType: string;
  seasonType: string;
  resType: string;
};

type CartItemType = {
  data: CartItemData;
  onRemove?: () => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
};

export const ItemOrder = ({
  data,
  onRemove,
  onIncrease,
  onDecrease,
}: CartItemType) => {
  const {
    src,
    quantity,
    unitPrice,
    lightning,
    season,
    res,
    lightningType,
    seasonType,
    resType,
  } = data;

  return (
    <div className="relative border-1 border-[#F2F2F2] p-5 rounded-lg flex gap-5">
      <div className="absolute top-2 right-2">
        <button onClick={onRemove}>
          <CloseSvg className="text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer" />
        </button>
      </div>
      <Image
        removeWrapper
        src={src}
        className="w-2/5 h-[144px] object-cover rounded-md"
      />
      <div className="flex flex-col gap-3 text-[#434446] h-[144px] overflow-hidden">
        <div className="flex items-center gap-8">
          <h2 className="flex-grow text-sm font-bold">Large Setup</h2>
          <div className="flex items-center bg-[#F2F2F2] rounded-full">
            <span
              onClick={onDecrease}
              className="text-[#434446] text-sm font-bold w-6 h-6 flex justify-center items-center cursor-pointer hover:bg-[#e6e6e6] rounded-tl-full rounded-bl-full"
            >
              -
            </span>
            <span className="text-[#434446] text-sm font-bold w-6 h-6 flex justify-center items-center">
              {quantity}
            </span>
            <span
              onClick={onIncrease}
              className="text-[#434446] text-sm font-bold w-6 h-6 flex justify-center items-center cursor-pointer hover:bg-[#e6e6e6] rounded-tr-full rounded-br-full"
            >
              +
            </span>
          </div>
          <div className="flex items-center gap-[2px] text-xs font-bold pr-4">
            <span>$</span>
            <span>
              {unitPrice.toLocaleString('en-US', {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex items-center gap-2 text-xs">
            {lightningType && (
              <>
                <h3>Lightning:</h3>
                <span>{lightningType}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs">
            {seasonType && (
              <>
                <h3>Season:</h3>
                <span>{seasonType}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs">
            {resType && (
              <>
                <h3>Res:</h3>
                <span>{resType}</span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 text-xs">
          {lightning && (
            <>
              <h3>Lightning:</h3>
              <span>{lightning}</span>
            </>
          )}

          {season && (
            <>
              <Spacer y={1} />
              <h3>Season:</h3>
              <span>{season}</span>
            </>
          )}

          {res && (
            <>
              <Spacer y={1} />
              <h3>Res:</h3>
              <span>{res}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
