import { Button, Divider, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FilePlusSvg from './assets/icons/file-plus.svg';
import ExistingOrderPng from './assets/images/existing-order.png';
import ImgMainJPG from './assets/images/img-main.jpg';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import styles from './styles.module.scss';
import CloseSvg from './assets/icons/close.svg';

export const Main = () => {
  const router = useRouter();

  const existingOrderRef = useRef<HTMLDivElement>(null);

  const [showExistingOrder, setShowExistingOrder] = useState(false);

  const handleExistingOrder = () => {
    setShowExistingOrder(!showExistingOrder);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-end py-16 px-4 mx-auto">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            removeWrapper
            src={ImgMainJPG.src}
            radius="none"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="fixed top-16 left-0 right-0 bottom-0">
        <motion.div
          className="flex items-center container mx-auto"
          initial={{ height: '100%' }}
          animate={{
            height: showExistingOrder
              ? `calc(100% - ${existingOrderRef.current?.offsetHeight}px)`
              : '100%',
          }}
          transition={{ duration: 0.5 }} // thời gian chuyển đổi, có thể điều chỉnh
        >
          <div className={`${styles['bg']} flex flex-col gap-6 max-w-[650px]`}>
            <Divider className="bg-[#79C420] h-2 w-[120px]" />
            <h1 className="font-bold text-6xl text-white">
              Sell your property <br /> with ease.
            </h1>

            <span className="font-light text-2xl text-white max-w-[500px]">
              Reach more buyer, showcase your home with stunning visuals, and
              close the deal faster.
            </span>

            <div className="relative flex gap-3">
              <Button
                className="bg-[#F2F2F2] font-bold rounded-lg w-[154px]"
                onClick={handleExistingOrder}
              >
                EXISTING ORDER
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
        </motion.div>
        <div
          ref={existingOrderRef}
          className="flex flex-col bg-white transition-all duration-300 ease-in-out"
          style={{
            opacity: showExistingOrder ? 1 : 0,
          }}
        >
          <div className="container h-[24vh] relative flex flex-col gap-2 pt-4 pb-8 px-4 mx-auto">
            <div className="flex justify-between items-center">
              <span className="text-[#434446] font-bold">EXISTING ORDER</span>
              <button onClick={handleExistingOrder}>
                <CloseSvg className="text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer" />
              </button>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 basis-1/6 first:pl-1 pr-3 last:pr-1 "
                >
                  <div
                    className="relative pt-1 w-full cursor-pointer"
                    onClick={() => {
                      router.push('/view-order');
                    }}
                  >
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
              <div className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/6 pr-5">
                <div className="pt-1">
                  <div
                    className="h-[164px] flex flex-col cursor-pointer p-2 rounded-large border-[#8A8A8A] border-dashed border-2"
                    onClick={() => {
                      router.push('/project-detail');
                    }}
                  >
                    <div className="flex-grow bg-[#e7e7e7] transition-all duration-300 ease-in-out hover:bg-[#F2F2F2] flex flex-col gap-2 justify-center items-center">
                      <FilePlusSvg />
                      <span className="text-xs text-[#434446]">
                        Add New Order
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
