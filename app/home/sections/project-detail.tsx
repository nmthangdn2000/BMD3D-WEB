import { LogoImg } from '@lib/global/images';
import { DatePicker, Divider, Image, Input, Spacer } from '@nextui-org/react';
import React from 'react';

export const ProjectDetail = () => {
  return (
    <div className="container w-full h-screen relative py-16 px-4">
      <div className="flex gap-8">
        <div className="basis-8/12 rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7630.695422698364!2d106.67709064609964!3d10.837220366470852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291cdeda3275%3A0xff2688431a9c883d!2zU8OibiBiw7NuZyBraGFuZyBhbg!5e0!3m2!1svi!2s!4v1719419929856!5m2!1svi!2s"
            width="600"
            height="450"
            loading="lazy"
            className="w-full h-[calc(100vh-8rem)] border-none"
          ></iframe>
        </div>
        <div className="basis-4/12 ">
          <div className="flex flex-col items-center">
            <Image src={LogoImg.src} alt="Banner" className="w-20" />
            <p>1234 Name Street</p>
            <p>Project Detail</p>
            <Divider className="w-[80%] my-4 h-1 bg-green-500" />
            <p className="text-xs">HELPFUL INSTRUCTIONS / DESCRIPTION</p>
          </div>
          <Spacer y={8} />
          <Input
            type="text"
            isRequired
            label={'PROJECT NAME'}
            labelPlacement={'outside'}
            placeholder="CLIENT / PROJECT / BUILDING"
          />
          <Spacer y={4} />
          <Input
            type="text"
            isRequired
            label={'ADDRESS'}
            labelPlacement={'outside'}
            placeholder="CLIENT / PROJECT / BUILDING"
          />
          <Spacer y={4} />
          <div className="flex">
            <DatePicker
              label={'START DATE'}
              isRequired
              className="max-w-[284px]"
              style={{}}
              labelPlacement={'outside'}
            />
            <DatePicker
              label={'DUE DATE'}
              isRequired
              className="max-w-[284px]"
              labelPlacement={'outside'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
