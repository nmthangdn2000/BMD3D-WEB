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
import PlusSvg from './assets/icons/plus.svg';
import { useRouter } from 'next/navigation';

const ProjectDetail = () => {
  const router = useRouter();
  return (
    <div className="container h-screen relative py-8 px-4 mx-auto">
      <div className="flex gap-8 h-full">
        <div className="basis-3/12 overflow-auto h-full px-2 flex flex-col justify-between">
          <div>
            <div className="flex flex-col items-center">
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
                <p className="text-xs ">Project Detail</p>
              </Chip>
            </div>
            <Spacer y={4} />
            <Input
              variant="bordered"
              size="sm"
              type="text"
              isRequired
              label={'Project Name'}
              labelPlacement={'outside'}
              placeholder="Project Name"
              classNames={{
                input: ['text-xs'],
              }}
            />
            <Spacer y={4} />
            <Input
              variant="bordered"
              size="sm"
              type="text"
              isRequired
              label={'Address'}
              labelPlacement={'outside'}
              placeholder="Client / Project / Building"
              classNames={{
                input: ['text-xs'],
              }}
            />
            <Spacer y={4} />
            <div className="flex gap-4 flex-wrap">
              <DatePicker
                size="sm"
                label={'Start Date'}
                variant="bordered"
                isRequired
                className="min-w-[120px] flex-1"
                labelPlacement={'outside'}
                classNames={{
                  input: ['text-xs'],
                }}
              />
              <DatePicker
                size="sm"
                label={'Due Date'}
                variant="bordered"
                isRequired
                className="min-w-[120px] flex-1"
                labelPlacement={'outside'}
                classNames={{
                  input: ['text-xs'],
                }}
              />
            </div>
            <Spacer y={4} />
            <Textarea
              variant="bordered"
              isRequired
              size="sm"
              label="General Instruction"
              labelPlacement="outside"
              placeholder="Please provide any additional information or instructions for this project."
              className="w-full"
              classNames={{
                input: ['text-xs'],
              }}
            />
            <Spacer y={4} />
            <div>
              <span className="text-tiny">
                File Upload <span className="text-red-500">*</span>{' '}
                <span className="text-[10px]">
                  Please include Arch. PDF along with{' '}
                  <span className="text-xs text-black font-bold">( ? )</span>
                </span>
              </span>
              <Spacer y={1} />
              <DropFile />
            </div>
            <Spacer y={4} />
            <Input
              size="sm"
              type="text"
              isRequired
              label={'Share Files'}
              labelPlacement={'outside'}
              value={'https://www.google.com/'}
              readOnly
              classNames={{
                input: ['text-xs', '!text-[#009238]', 'underline'],
              }}
            />
            <Spacer y={8} />
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button
              className="bg-[#F2F2F2] flex-1 min-w-[100px]"
              onClick={() => {
                router.push('/');
              }}
            >
              CANCEL
            </Button>
            <Button
              className="bg-[#79C420] text-white flex-1 min-w-[100px]"
              onClick={() => {
                router.push('/add-order/setup-type');
              }}
            >
              NEXT
            </Button>
          </div>
        </div>

        <div className="basis-9/12 rounded overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col overflow-auto">
            <h1 className="text-sm font-bold px-3 py-4">FILES</h1>
            <div className="grid gap-6 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-3">
              {[...Array(7)].map((_, index) => (
                <div key={index} className="flex flex-col gap-2 items-stretch">
                  <div className="pt-1 w-full">
                    <Image
                      removeWrapper
                      className="w-full object-cover p-2 shadow-small h-[160px]"
                      src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                      fallbackSrc="https://via.placeholder.com/300x200"
                      alt="NextUI Image with fallback"
                    />
                  </div>
                  <span className="text-sm font-bold uppercase text-ellipsis mb-2">
                    Final-Rendering.jpeg
                  </span>
                </div>
              ))}
              <div className="flex flex-col gap-2 items-stretch w-full">
                <div className="pt-1 w-full">
                  <div className="w-full h-[160px] flex flex-col p-2 rounded-large cursor-pointer border-[#8A8A8A] border-dashed border-2">
                    <div className="flex-grow bg-[#F2F2F2] flex flex-col justify-center items-center">
                      <PlusSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-sm font-bold px-3 py-4">LOCATION</h1>
            <div className="ml-1 mr-1 p-2 shadow-small rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7630.695422698364!2d106.67709064609964!3d10.837220366470852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291cdeda3275%3A0xff2688431a9c883d!2zU8OibiBiw7NuZyBraGFuZyBhbg!5e0!3m2!1svi!2s!4v1719419929856!5m2!1svi!2s"
                width="600"
                height="262"
                loading="lazy"
                className="w-full h-[262px] border-none rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
