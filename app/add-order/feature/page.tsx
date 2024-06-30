'use client';

import { DropFile } from '@lib/components/drop-file';
import { LogoVerticalImg } from '@lib/global/images';
import {
  Button,
  Chip,
  DatePicker,
  Image,
  Input,
  Spacer,
  Textarea,
} from '@nextui-org/react';
import React from 'react';
import { useRouter } from 'next/navigation';

import PlusCircleSvg from './assets/icons/plus-circle.svg';
import PlusSvg from './assets/icons/plus.svg';
import CloseSvg from './assets/icons/close.svg';
import ChevronDownSvg from './assets/icons/chevron-down.svg';
import {
  ItemFeature,
  ItemFeatureData,
} from '@app/add-order/feature/components/Item';
import { useAuthentication } from '@lib/hooks/use-authentication';
import { url } from 'inspector';

const viewDefault: ItemFeatureData = {
  name: 'View 1',
  lightning: 'Dawn',
  color: 'A',
  resolution: '4K',
};

const setupDefault: ItemFeatureData = {
  name: 'Setup 1',
  lightning: 'Dawn',
  color: 'A',
  resolution: '4K',
};

const exteriorMenu = [
  {
    image: require(`./assets/images/large.jpg`).default,
    name: '+ LARGE SETUP',
    sub: 'per building',
    price: '100',
  },
  {
    image: require(`./assets/images/largeView.jpg`).default,
    name: '+ LARGE VIEW',
    sub: 'per view',
    price: '100',
  },
  {
    image: require(`./assets/images/drone.jpg`).default,
    name: '+ DRONE',
    sub: 'per shoot',
    price: '100',
  },
  {
    image: require(`./assets/images/medium.jpg`).default,
    name: '+ MEDIUM SETUP',
    sub: 'per black',
    price: '100',
  },
  {
    image: require(`./assets/images/small.jpeg`).default,
    name: '+ SMALL SETUP',
    sub: 'per home',
    price: '100',
  },
  {
    image: require(`./assets/images/xs.jpg`).default,
    name: '+ XS SETUP',
    sub: 'per abject',
    price: '100',
  },
  {
    image: require(`./assets/images/360.jpg`).default,
    name: '+ 360° SETUP',
    sub: 'per pav',
    price: '100',
  },
  {
    image: require(`./assets/images/anim.jpg`).default,
    name: '+ ANMI. SETUP',
    sub: 'per scene',
    price: '100',
  },
];

const AddOrderFeature = () => {
  const router = useRouter();
  const { isLoading: isLoadingAuth, user } = useAuthentication();

  const [views, setViews] = React.useState<ItemFeatureData[]>([viewDefault]);
  const [setups, setSetups] = React.useState<ItemFeatureData[]>([viewDefault]);

  const handleRemoveView = (index: number) => {
    setViews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddView = () => {
    setViews((prev) => [
      ...prev,
      {
        name: `View ${prev.length + 1}`,
        lightning: 'Dawn',
        color: 'A',
        resolution: '4K',
      },
    ]);
  };

  const handleRemoveSetup = (index: number) => {
    setSetups((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddSetup = () => {
    setSetups((prev) => [
      ...prev,
      {
        name: `Setup ${prev.length + 1}`,
        lightning: 'Dawn',
        color: 'A',
        resolution: '4K',
      },
    ]);
  };

  if (!user) return null;

  return (
    <div className="container h-screen relative py-8 px-4 mx-auto">
      <div className="flex gap-8 h-full">
        <div className="relative basis-3/12 overflow-auto h-full px-2 flex flex-col justify-between">
          <div>
            <div className="sticky top-0 flex flex-col items-center bg-white z-10 pb-4">
              <Image
                src={LogoVerticalImg.src}
                alt="Banner"
                className="w-20 cursor-pointer"
                onClick={() => {
                  router.push('/');
                }}
              />
              <Spacer y={4} />
              <Chip radius="sm">
                <p className="text-xs ">Features</p>
              </Chip>
            </div>

            <div className="flex-grow flex flex-col gap-4 overflow-auto">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-bold text-[#8A8A8A] pl-3 pr-2">
                    Setup
                  </h1>
                  <button
                    onClick={() => {
                      handleAddSetup();
                    }}
                  >
                    <PlusCircleSvg className="text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer" />
                  </button>
                </div>

                {setups.map((item, index) => (
                  <ItemFeature
                    key={index}
                    id={index}
                    name="Setup"
                    data={item}
                    onRemove={handleRemoveSetup}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-bold text-[#8A8A8A] pl-3 pr-2">
                    View
                  </h1>
                  <button
                    onClick={() => {
                      handleAddView();
                    }}
                  >
                    <PlusCircleSvg className="text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer" />
                  </button>
                </div>

                {views.map((item, index) => (
                  <ItemFeature
                    key={index}
                    id={index}
                    name="View"
                    data={item}
                    onRemove={handleRemoveView}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 flex gap-3 bg-white z-10 pt-4 flex-wrap">
            <Button
              className="flex-grow bg-[#F2F2F2] font-bold rounded-lg p-0 h-[40px] min-w-[100px]"
              onClick={() => {
                router.push('/add-order/setup-type');
              }}
            >
              BACK
            </Button>
            <Button
              className="flex-grow bg-[#79C420] text-white font-bold rounded-lg p-0 h-[40px] min-w-[100px]"
              onClick={() => {
                router.push('/payment');
              }}
            >
              NEXT
            </Button>
          </div>
        </div>

        <div className="basis-9/12 rounded flex flex-col gap-6 overflow-auto">
          <div className="flex flex-col">
            <h1 className="text-base font-bold px-3 py-4">YOUR ORDER</h1>
            <div className="flex flex-wrap px-5 gap-3">
              {exteriorMenu.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col gap-2 items-stretch"
                >
                  <div className="pt-1 w-full">
                    <Image
                      removeWrapper
                      className="w-full h-[160px] max-w-[250px] object-cover p-2 shadow-small"
                      src={item.image.src}
                      fallbackSrc="https://via.placeholder.com/300x200"
                      alt={item.name + 'image'}
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <span className="text-[14px] font-bold uppercase text-ellipsis">
                      {item.name}
                    </span>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-[#434446] opacity-60">
                        {item.sub}
                      </span>
                      <div className="flex items-center gap-[2px] text-xs font-bold">
                        <span>$</span>
                        <span>{item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-base font-bold px-3 py-4">EXTERIOR MENU</h1>
            <div className="flex flex-wrap px-5 gap-3">
              {exteriorMenu.map((item, index) =>
                index !== 1 && index !== 2 ? (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col gap-2 items-stretch"
                  >
                    <div className="pt-1 w-full">
                      <Image
                        removeWrapper
                        className="w-full h-[160px] max-w-[250px] object-cover p-2 shadow-small"
                        src={item.image.src}
                        fallbackSrc="https://via.placeholder.com/300x200"
                        alt={item.name + 'image'}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <span className="text-[14px] font-bold uppercase text-ellipsis">
                        {item.name}
                      </span>
                      <div className="flex justify-between">
                        <span className="text-xs font-medium text-[#434446] opacity-60">
                          {item.sub}
                        </span>
                        <div className="flex items-center gap-[2px] text-xs font-bold">
                          <span>$</span>
                          <span>{item.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrderFeature;
