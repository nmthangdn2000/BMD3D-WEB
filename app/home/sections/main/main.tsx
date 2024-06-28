import { Button, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FilePlusSvg from './assets/icons/file-plus.svg';
import ExistingOrderPng from './assets/images/existing-order.png';
import Img1Png from './assets/images/img1.png';
import Img2Png from './assets/images/img2.png';
import Img3Png from './assets/images/img3.png';
import Img4Png from './assets/images/img4.png';

export const Main = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="shadow-lg bg-white">
        <div className="container h-[72vh] relative flex justify-center items-end py-16 px-4 mx-auto">
          <div className="absolute top-0 left-0 w-full h-[86%] flex px-12 pt-28">
            <div className="basis-1/6 flex flex-col justify-end items-end">
              <Image
                removeWrapper
                src={Img1Png.src}
                className="w-full object-contain"
              />
            </div>
            <div className="basis-3/5 px-4 pb-16">
              <Image
                removeWrapper
                src={Img2Png.src}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="basis-1/8 flex flex-col items-end pt-36">
              <Image
                removeWrapper
                src={Img3Png.src}
                className="w-full object-contain"
              />
            </div>
            <div className="basis-1/8 flex flex-col justify-end items-end -ml-12 pb-2">
              <Image
                removeWrapper
                src={Img4Png.src}
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="relative flex gap-3">
            <Button className="bg-[#F2F2F2] font-bold rounded-lg w-[154px]">
              LEARN MORE
            </Button>
            <Button
              className="bg-[#79C420] text-white font-bold rounded-lg w-[154px]"
              onClick={() => {
                router.push('/project-detail');
              }}
            >
              ORDER NOW
            </Button>
          </div>
        </div>
      </div>
      <div className="container h-[28vh] relative flex flex-col justify-center gap-4 py-4 px-4 mx-auto">
        <h1 className="text-[#434446] font-bold">EXISTING ORDER</h1>
        <div className="flex">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 basis-1/5 first:pl-1 pr-3 last:pr-1"
            >
              <div className="relative pt-1 w-full">
                <Image
                  className="w-full h-[164px] object-cover p-2 shadow-small"
                  src={ExistingOrderPng.src}
                  fallbackSrc="https://via.placeholder.com/300x200"
                  alt="NextUI Image with fallback"
                />

                <span className="absolute bottom-3 left-4 text-sm text-white font-bold z-10">
                  IMG NAME
                </span>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/5 pr-5">
            <div className="pt-1">
              <div className="h-[164px] flex flex-col p-2 rounded-large border-[#8A8A8A] border-dashed border-2">
                <div className="flex-grow bg-[#F2F2F2] flex flex-col gap-2 justify-center items-center">
                  <FilePlusSvg />
                  <span className="text-xs text-[#434446]">Add New Order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
