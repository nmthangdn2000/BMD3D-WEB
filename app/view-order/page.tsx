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
} from '@nextui-org/react';
import React from 'react';
import TickCircleSvg from './assets/icons/tick-circle.svg';
import classnames from 'classnames';

import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';

const ViewOrder = () => {
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
                <p className="text-xs ">Dashboard</p>
              </Chip>
            </div>
            <Spacer y={4} />
            <Input
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
              size="sm"
              type="text"
              isRequired
              label={'Client'}
              labelPlacement={'outside'}
              placeholder="Client / Project / Building"
              classNames={{
                input: ['text-xs'],
              }}
            />
            <Spacer y={4} />
            <div className="flex gap-3">
              <DatePicker
                size="sm"
                label={'Start'}
                isRequired
                className="max-w-[284px]"
                labelPlacement={'outside'}
                classNames={{
                  input: ['text-xs'],
                }}
              />
              <DatePicker
                size="sm"
                label={'End'}
                isRequired
                className="max-w-[284px]"
                labelPlacement={'outside'}
                classNames={{
                  input: ['text-xs'],
                }}
              />
            </div>
            <Spacer y={4} />
            <div className="flex flex-col gap-2">
              <label className="text-xs">Work Status</label>
              <div className={styles['work-status']}>
                <div className={styles['line']} />
                <div className={styles['status']}>
                  <div
                    className={classnames(
                      styles['finish-line'],
                      styles['full'],
                    )}
                  />
                  <TickCircleSvg className="relative bg-white" />
                  <span className="text-xs font-medium">Estimating</span>
                </div>
                <div className={styles['status']}>
                  <div
                    className={classnames(
                      styles['finish-line'],
                      styles['full'],
                    )}
                  />
                  <TickCircleSvg className="relative bg-white" />
                  <span className="text-xs font-medium">In Progress</span>
                </div>
                <div className={styles['status']}>
                  <div className={styles['finish-line']} />
                  <TickCircleSvg className="relative bg-white" />
                  <span className="text-xs font-medium">Finish</span>
                </div>
              </div>
            </div>
            <Spacer y={4} />
            <div>
              <span className="text-tiny">Load Files</span>
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
          <div className="flex gap-3">
            <Button
              className="bg-[#F2F2F2] flex-1 rounded-lg"
              onClick={() => {
                router.push('/');
              }}
            >
              CANCEL
            </Button>
            <Button className="bg-[#79C420] text-white flex-1 rounded-lg">
              UPDATE
            </Button>
          </div>
        </div>

        <div className="basis-9/12 rounded overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col">
            <h1 className="text-sm font-bold px-3 py-4">FILES</h1>
            <div className="flex gap-5 overflow-x-auto">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/4"
                >
                  <div className="pt-1 w-full px-[10px] first:pl-1 last:pr-1">
                    <Image
                      className="w-full h-[152px] object-cover p-2 shadow-small"
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
            </div>
          </div>
          <Spacer y={4} />
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
          <Spacer y={4} />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold px-3 py-4">FEATURES</h1>
            <div className="flex gap-5 overflow-x-auto">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col gap-2 items-stretch basis-1/4"
                >
                  <div className="pl-1 pt-1 w-full">
                    <Image
                      className="w-full h-[152px] object-cover p-2 shadow-small"
                      src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                      fallbackSrc="https://via.placeholder.com/300x200"
                      alt="NextUI Image with fallback"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold uppercase text-ellipsis">
                      Setup
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      Large
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
