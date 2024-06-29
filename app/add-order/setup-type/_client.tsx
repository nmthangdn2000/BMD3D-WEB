'use client';

import { Button, Chip, Image, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { LogoVerticalImg } from '@lib/global/images';

import './style.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useAuthentication } from '@lib/hooks/use-authentication';

const Masonry = dynamic(
  () => import('react-responsive-masonry').then((module) => module.default),
  {
    ssr: false,
  },
);

const ResponsiveMasonry = dynamic(
  () =>
    import('react-responsive-masonry').then(
      (module) => module.ResponsiveMasonry,
    ),
  {
    ssr: false,
  },
);

const images = Array.from(
  { length: 10 },
  (_, i) => require(`./assets/images/${i + 1}.jpg`).default,
);
const lightings = ['DAWN', 'DAY', 'DUSK', 'CUSTOM MODAL'];
const colours = ['A', 'B', 'C', 'D'];
const others = ['1', '2', '3', '4'];
const resolutions = ['4K', '10K'];

export const AddOrderSetupTypeClient = () => {
  const router = useRouter();
  const { isLoading: isLoadingAuth, user } = useAuthentication();

  const [lighting, setLighting] = useState<string>('');
  const [colour, setColour] = useState<string>('');
  const [other, setOther] = useState<string>('');
  const [resolution, setResolution] = useState<string>('');

  return (
    user && (
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
                  <p className="text-xs ">Setup Type</p>
                </Chip>
              </div>
              <Spacer y={8} />
              <div className="flex-grow flex flex-col gap-4 overflow-auto">
                <div className="flex flex-col gap-3">
                  <div>
                    <h1 className="text-sm font-bold text-[#8A8A8A] pl-3 pr-2">
                      LIGHTING
                    </h1>
                    <Spacer y={2} />
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                      {lightings.map((item, index) => (
                        <Button
                          key={index}
                          variant={lighting === item ? 'bordered' : 'flat'}
                          size="sm"
                          className={`border-1 ${
                            lighting === item
                              ? 'border-[#79C420]'
                              : 'border-gray-300'
                          } rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full`}
                          onClick={() => {
                            setLighting(item);
                          }}
                        >
                          {item}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Spacer y={4} />
                  <div>
                    <h1 className="text-sm font-bold text-[#8A8A8A] pl-3 pr-2">
                      COLOUR
                    </h1>
                    <Spacer y={2} />

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                      {colours.map((item, index) => (
                        <Button
                          key={index}
                          variant={colour === item ? 'bordered' : 'flat'}
                          size="sm"
                          className={`border-1 ${
                            colour === item
                              ? 'border-[#79C420]'
                              : 'border-gray-300'
                          } rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full`}
                          onClick={() => {
                            setColour(item);
                          }}
                        >
                          {item}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Spacer y={4} />
                  <div>
                    <h1 className="text-sm font-bold text-[#8A8A8A] pl-3 pr-2">
                      OTHER
                    </h1>
                    <Spacer y={2} />

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                      {others.map((item, index) => (
                        <Button
                          key={index}
                          variant={other === item ? 'bordered' : 'flat'}
                          size="sm"
                          className={`border-1 ${
                            other === item
                              ? 'border-[#79C420]'
                              : 'border-gray-300'
                          } rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full`}
                          onClick={() => {
                            setOther(item);
                          }}
                        >
                          {item}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Spacer y={4} />
                  <div>
                    <h1 className="text-sm font-bold text-[#8A8A8A] pl-3 pr-2">
                      RESOLUTION
                    </h1>
                    <Spacer y={2} />

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                      {resolutions.map((item, index) => (
                        <Button
                          key={index}
                          variant={resolution === item ? 'bordered' : 'flat'}
                          size="sm"
                          className={`border-1 ${
                            resolution === item
                              ? 'border-[#79C420]'
                              : 'border-gray-300'
                          } rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full`}
                          onClick={() => {
                            setResolution(item);
                          }}
                        >
                          {item}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 flex gap-3 bg-white z-10 pt-4 flex-wrap">
              <Button
                className="flex-grow bg-[#F2F2F2] font-bold rounded-lg p-0 h-[40px] min-w-[100px]"
                onClick={() => {
                  router.push('/project-detail');
                }}
              >
                BACK
              </Button>
              <Button
                className="flex-grow bg-[#79C420] text-white font-bold rounded-lg p-0 h-[40px] min-w-[100px]"
                onClick={() => {
                  router.push('/add-order/feature');
                }}
              >
                NEXT
              </Button>
            </div>
          </div>

          <div className="basis-9/12 overflow-auto pr-3">
            {/* <LightGallery
        elementClassNames={'grid-wrapper'}
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail]}
      > */}
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="8px">
                {images.map((image, index) => (
                  // <a href={image.src} key={index} data-src={image.src}>
                  <Image
                    key={index + 'image1'}
                    removeWrapper
                    src={image.src}
                    alt="Image"
                    radius="sm"
                    className="w-full h-full object-cover"
                  />
                  // </a>
                ))}
                {images.map((image, index) => (
                  // <a href={image.src} key={index} data-src={image.src}>
                  <Image
                    key={index + 'image2'}
                    removeWrapper
                    src={image.src}
                    alt="Image"
                    radius="sm"
                    className="w-full h-full object-cover"
                  />
                  // </a>
                ))}
              </Masonry>
            </ResponsiveMasonry>
            {/* </LightGallery> */}
          </div>
        </div>
      </div>
    )
  );
};
