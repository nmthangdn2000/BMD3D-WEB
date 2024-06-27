import { DropFile } from '@lib/components/drop-file';
import { LogoVerticalImg } from '@lib/global/images';
import {
  Button,
  Chip,
  DatePicker,
  Divider,
  Image,
  Input,
  Spacer,
  Textarea,
} from '@nextui-org/react';
import React from 'react';

export const ProjectDetail = () => {
  return (
    <div className="container w-full h-screen relative py-16 px-4">
      <div className="flex gap-8">
        <div className="basis-4/12 overflow-auto h-[calc(100vh-8rem)] px-2">
          <div className="flex flex-col items-center">
            <Image src={LogoVerticalImg.src} alt="Banner" className="w-20" />
            <Spacer y={4} />
            <Chip radius="sm">
              <p className="text-xs ">Project Detail</p>
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
          <div className="flex">
            <DatePicker
              size="sm"
              label={'Start Date'}
              isRequired
              className="max-w-[284px]"
              labelPlacement={'outside'}
              classNames={{
                input: ['text-xs'],
              }}
            />
            <DatePicker
              size="sm"
              label={'Due Date'}
              isRequired
              className="max-w-[284px]"
              labelPlacement={'outside'}
              classNames={{
                input: ['text-xs'],
              }}
            />
          </div>
          <Spacer y={4} />
          <Textarea
            isRequired
            size="sm"
            label="General Instruction"
            labelPlacement="outside"
            placeholder="Please provide any additional information or instructions for this project."
            className="max-w-xs"
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
          <div className="flex gap-4">
            <Button className="bg-[#F2F2F2] flex-1">CANCEL</Button>
            <Button className="bg-[#79C420] text-white flex-1">NEXT</Button>
          </div>
        </div>
        <div className="basis-8/12 rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7630.695422698364!2d106.67709064609964!3d10.837220366470852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291cdeda3275%3A0xff2688431a9c883d!2zU8OibiBiw7NuZyBraGFuZyBhbg!5e0!3m2!1svi!2s!4v1719419929856!5m2!1svi!2s"
            width="600"
            height="450"
            loading="lazy"
            className="w-full h-[calc(100vh-8rem)] border-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
