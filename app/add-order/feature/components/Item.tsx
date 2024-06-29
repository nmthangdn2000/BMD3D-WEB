import React from 'react';
import { Button, Input } from '@nextui-org/react';
import { motion } from 'framer-motion';

import ChevronDownSvg from '../assets/icons/chevron-down.svg';
import CloseSvg from '../assets/icons/close.svg';
import ChevronUpSvg from '../assets/icons/chevron-up.svg';

const Lightnings = ['Dawn', 'Day', 'Dusk', 'Custom'];
const colors = ['A', 'B', 'C', 'D'];
const resolutions = ['4K', '8K'];

export type ItemFeatureData = {
  name: string;
  lightning: string;
  color: string;
  resolution: string;
};

type ItemFeatureProps = {
  id: number;
  onRemove: (id: number) => void;
  data: ItemFeatureData;
  name: string;
};

export const ItemFeature = ({ onRemove, data, name, id }: ItemFeatureProps) => {
  const [show, setShow] = React.useState<boolean>(true);

  const [lightning, setLightning] = React.useState<string>(data.lightning);
  const [color, setColor] = React.useState<string>(data.color);
  const [resolution, setResolution] = React.useState<string>(data.resolution);

  return (
    <div className="border-1 rounded-lg p-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xs font-medium text-[#8A8A8A] pl-3 pr-2">
          {name} {id}
        </h2>
        <button
          onClick={() => {
            onRemove(id);
          }}
        >
          <CloseSvg className="text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer" />
        </button>
      </div>
      <div>
        <Input
          variant="bordered"
          size="sm"
          type="text"
          placeholder="Placeholder"
          classNames={{
            input: ['text-xs placeholder:text-[#AAAAAA]'],
            inputWrapper: [
              'border-[1px] group-data-[focus=true]:border-[#79C420] mt-1',
            ],
            label: ['font-medium !text-[#8A8A8A] pl-2'],
          }}
        />

        <div
          onClick={() => setShow(true)}
          style={{ display: show ? 'none' : 'flex' }}
          className="flex justify-end items-center text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer"
        >
          <span className="text-xs">Custom</span>
          <ChevronDownSvg />
        </div>
      </div>

      <motion.div
        initial={{ height: 0, overflow: 'hidden' }}
        animate={{ height: show ? 'auto' : 0, overflow: 'hidden' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-4 mt-3">
          <h1 className="text-xs font-medium text-[#8A8A8A] pl-3 pr-2">
            Lightning
          </h1>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3">
            {Lightnings.map((item, index) => (
              <Button
                key={index}
                variant={lightning === item ? 'bordered' : 'flat'}
                size="sm"
                className={`border-1 ${
                  lightning === item ? 'border-[#79C420]' : 'border-gray-300'
                } rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full`}
                onClick={() => {
                  setLightning(item);
                }}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <h1 className="text-xs font-medium text-[#8A8A8A] pl-3 pr-2">
            Color
          </h1>

          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3">
            {colors.map((item, index) => (
              <Button
                key={index}
                variant={color === item ? 'bordered' : 'flat'}
                size="sm"
                className={`border-1 ${
                  color === item ? 'border-[#79C420]' : 'border-gray-300'
                } rounded-lg text-[#434446] font-bold h-8 py-0 px-0 w-full`}
                onClick={() => {
                  setColor(item);
                }}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <h1 className="text-xs font-medium text-[#8A8A8A] pl-3 pr-2">
            Resolution
          </h1>

          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3">
            {resolutions.map((item, index) => (
              <Button
                key={index}
                variant={resolution === item ? 'bordered' : 'flat'}
                size="sm"
                className={`border-1 ${
                  resolution === item ? 'border-[#79C420]' : 'border-gray-300'
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, display: 'none' }}
        animate={{ opacity: show ? 1 : 0, display: show ? 'block' : 'none' }}
        transition={{ duration: 0.3 }}
      >
        <div
          onClick={() => setShow(false)}
          className="flex justify-center items-center text-[#8A8A8A] hover:text-[#3A3A3A] transition-colors cursor-pointer mt-2"
        >
          <ChevronUpSvg />
          <span className="text-xs">Collapse</span>
        </div>
      </motion.div>
    </div>
  );
};
