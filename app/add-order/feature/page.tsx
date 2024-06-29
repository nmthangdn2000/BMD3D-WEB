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
import ChevronUpSvg from './assets/icons/chevron-up.svg';

const AddOrderFeature = () => {
  const router = useRouter();
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
                  <button>
                    <PlusCircleSvg className="text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer" />
                  </button>
                </div>

                <div className="border-1 rounded-lg p-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xs font-medium text-[#8A8A8A] pl-3 pr-2">
                      Setup 1
                    </h2>
                    <button>
                      <CloseSvg className="text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer" />
                    </button>
                  </div>
                  <Input
                    size="sm"
                    type="text"
                    variant="bordered"
                    placeholder="Placeholder"
                    classNames={{
                      input: ['text-xs placeholder:text-[#AAAAAA]'],
                      inputWrapper: [
                        'border-[1px] group-data-[focus=true]:border-[#79C420] mt-1',
                      ],
                      label: ['font-medium !text-[#8A8A8A] pl-2'],
                    }}
                  />
                  <div className="flex justify-end items-center text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer">
                    <span className="text-xs">Custom</span>
                    <ChevronDownSvg />
                  </div>
                </div>

                <div className="border-1 rounded-lg p-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xs font-medium text-[#8A8A8A] pl-3 pr-2">
                      Setup 2
                    </h2>
                    <button>
                      <CloseSvg className="text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer" />
                    </button>
                  </div>
                  <Input
                    size="sm"
                    type="text"
                    variant="bordered"
                    placeholder="Placeholder"
                    classNames={{
                      input: ['text-xs placeholder:text-[#AAAAAA]'],
                      inputWrapper: [
                        'border-[1px] group-data-[focus=true]:border-[#79C420] mt-1',
                      ],
                      label: ['font-medium !text-[#8A8A8A] pl-2'],
                    }}
                  />
                  <div className="flex justify-end items-center text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer">
                    <span className="text-xs">Custom</span>
                    <ChevronDownSvg />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-bold text-[#8A8A8A] pl-3 pr-2">
                    View
                  </h1>
                  <button>
                    <PlusCircleSvg className="text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer" />
                  </button>
                </div>

                <div className="border-1 rounded-lg p-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xs font-medium text-[#8A8A8A] pl-3 pr-2">
                      View 1
                    </h2>
                    <button>
                      <CloseSvg className="text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer" />
                    </button>
                  </div>
                  <Input
                    size="sm"
                    type="text"
                    variant="bordered"
                    placeholder="Placeholder"
                    classNames={{
                      input: ['text-xs placeholder:text-[#AAAAAA]'],
                      inputWrapper: [
                        'border-[1px] group-data-[focus=true]:border-[#79C420] mt-1',
                      ],
                      label: ['font-medium !text-[#8A8A8A] pl-2'],
                    }}
                  />
                  <div className="flex flex-col gap-4 mt-3">
                    <h1 className="text-xs font-medium text-[#8A8A8A] pl-3 pr-2">
                      Lightning
                    </h1>
                    <div className="flex">
                      <div className="w-[25%] basis-1/4 pr-2 last:pr-0">
                        <Button
                          variant="bordered"
                          size="sm"
                          className="border-1 border-[#79C420] rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full"
                        >
                          Dawn
                        </Button>
                      </div>
                      <div className="w-[25%] basis-1/4 pr-2 last:pr-0">
                        <Button
                          variant="flat"
                          size="sm"
                          className="border-1 bg-[#F2F2F2] border-none rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full"
                        >
                          Day
                        </Button>
                      </div>
                      <div className="w-[25%] basis-1/4 pr-2 last:pr-0">
                        <Button
                          variant="flat"
                          size="sm"
                          className="border-1 bg-[#F2F2F2] border-none rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full"
                        >
                          Dusk
                        </Button>
                      </div>
                      <div className="w-[25%] basis-1/4 pr-2 last:pr-0">
                        <Button
                          variant="flat"
                          size="sm"
                          className="border-1 bg-[#F2F2F2] border-none rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full"
                        >
                          Custom
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-3">
                    <h1 className="text-xs font-medium text-[#8A8A8A] pl-3 pr-2">
                      Color
                    </h1>
                    <div className="flex">
                      <div className="w-[25%] basis-1/4 pr-2 last:pr-0">
                        <Button
                          variant="bordered"
                          size="sm"
                          className="border-1 border-[#79C420] rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full"
                        >
                          A
                        </Button>
                      </div>
                      <div className="w-[25%] basis-1/4 pr-2 last:pr-0">
                        <Button
                          variant="flat"
                          size="sm"
                          className="border-1 bg-[#F2F2F2] border-none rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full"
                        >
                          B
                        </Button>
                      </div>
                      <div className="w-[25%] basis-1/4 pr-2 last:pr-0">
                        <Button
                          variant="flat"
                          size="sm"
                          className="border-1 bg-[#F2F2F2] border-none rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full"
                        >
                          C
                        </Button>
                      </div>
                      <div className="w-[25%] basis-1/4 pr-2 last:pr-0">
                        <Button
                          variant="flat"
                          size="sm"
                          className="border-1 bg-[#F2F2F2] border-none rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full"
                        >
                          D
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-3">
                    <h1 className="text-xs font-medium text-[#8A8A8A] pl-3 pr-2">
                      Resolution
                    </h1>
                    <div className="flex">
                      <div className="w-[50%] basis-1/2 pr-2 last:pr-0">
                        <Button
                          variant="bordered"
                          size="sm"
                          className="border-1 border-[#79C420] rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full"
                        >
                          4K
                        </Button>
                      </div>
                      <div className="w-[50%] basis-1/2 pr-2 last:pr-0">
                        <Button
                          variant="flat"
                          size="sm"
                          className="border-1 bg-[#F2F2F2] border-none rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full"
                        >
                          8K
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer">
                    <ChevronUpSvg />
                    <span className="text-xs">Collapse</span>
                  </div>
                </div>
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
            <h1 className="text-base font-bold px-3 py-4">SET UP</h1>
            <div className="flex flex-wrap pl-5">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/4 pr-5"
                >
                  <div className="pt-1 w-full">
                    <Image
                      removeWrapper
                      className="w-full h-[152px] object-cover p-2 shadow-small"
                      src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                      fallbackSrc="https://via.placeholder.com/300x200"
                      alt="NextUI Image with fallback"
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <span className="text-[14px] font-bold uppercase text-ellipsis">
                      Front Lobby
                    </span>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-[#434446] opacity-60">
                        Large
                      </span>
                      <div className="flex items-center gap-[2px] text-xs font-bold">
                        <span>$</span>
                        <span>100</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/4 pr-5">
                <div className="pt-1">
                  <div className="h-[152px] flex flex-col p-2 rounded-large border-[#8A8A8A] border-dashed border-2">
                    <div className="flex-grow bg-[#F2F2F2] flex flex-col justify-center items-center">
                      <PlusSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-base font-bold px-3 py-4">VIEW</h1>
            <div className="flex flex-wrap pl-5">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/4 pr-5"
                >
                  <div className="pt-1 w-full">
                    <Image
                      removeWrapper
                      className="w-full h-[152px] object-cover p-2 shadow-small"
                      src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                      fallbackSrc="https://via.placeholder.com/300x200"
                      alt="NextUI Image with fallback"
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <span className="text-[14px] font-bold uppercase text-ellipsis">
                      Front Lobby
                    </span>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-[#434446] opacity-60">
                        Large
                      </span>
                      <div className="flex items-center gap-[2px] text-xs font-bold">
                        <span>$</span>
                        <span>100</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/4 pr-5">
                <div className="pt-1">
                  <div className="h-[152px] flex flex-col p-2 rounded-large border-[#8A8A8A] border-dashed border-2">
                    <div className="flex-grow bg-[#F2F2F2] flex flex-col justify-center items-center">
                      <PlusSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-base font-bold px-3 py-4">DRONE</h1>
            <div className="flex flex-wrap pl-5">
              {[...Array(0)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/4 pr-5"
                >
                  <div className="pt-1 w-full">
                    <Image
                      removeWrapper
                      className="w-full h-[152px] object-cover p-2 shadow-small"
                      src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                      fallbackSrc="https://via.placeholder.com/300x200"
                      alt="NextUI Image with fallback"
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <span className="text-[14px] font-bold uppercase text-ellipsis">
                      Front Lobby
                    </span>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-[#434446] opacity-60">
                        Large
                      </span>
                      <div className="flex items-center gap-[2px] text-xs font-bold">
                        <span>$</span>
                        <span>100</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/4 pr-5">
                <div className="pt-1">
                  <div className="h-[152px] flex flex-col p-2 rounded-large border-[#8A8A8A] border-dashed border-2">
                    <div className="flex-grow bg-[#F2F2F2] flex flex-col justify-center items-center">
                      <PlusSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-base font-bold px-3 py-4">ANIMATION</h1>
            <div className="flex flex-wrap pl-5">
              {[...Array(0)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/4 pr-5"
                >
                  <div className="pt-1 w-full">
                    <Image
                      removeWrapper
                      className="w-full h-[152px] object-cover p-2 shadow-small"
                      src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                      fallbackSrc="https://via.placeholder.com/300x200"
                      alt="NextUI Image with fallback"
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <span className="text-[14px] font-bold uppercase text-ellipsis">
                      Front Lobby
                    </span>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-[#434446] opacity-60">
                        Large
                      </span>
                      <div className="flex items-center gap-[2px] text-xs font-bold">
                        <span>$</span>
                        <span>100</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/4 pr-5">
                <div className="pt-1">
                  <div className="h-[152px] flex flex-col p-2 rounded-large border-[#8A8A8A] border-dashed border-2">
                    <div className="flex-grow bg-[#F2F2F2] flex flex-col justify-center items-center">
                      <PlusSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrderFeature;
