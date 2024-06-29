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
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import CartItemImg from './assets/images/cart-item.png';
import PlusSvg from './assets/icons/plus.svg';
import CloseSvg from './assets/icons/close.svg';
import ChevronDownSvg from './assets/icons/chevron-down.svg';
import ChevronUpSvg from './assets/icons/chevron-up.svg';
import Link from 'next/link';
import { CartItemData, ItemOrder } from '@app/payment/components/item-order';
import { useAuthentication } from '@lib/hooks/use-authentication';

const ordersDefault: CartItemData[] = [
  {
    src: CartItemImg.src,
    quantity: 1,
    unitPrice: 100,
    lightning: 'Day',
    season: 'Summer',
    res: '4K',
    lightningType: 'Lightning',
    seasonType: 'Season',
    resType: 'Res',
  },
  {
    src: CartItemImg.src,
    quantity: 1,
    unitPrice: 100,
    lightning: 'Day',
    season: 'Summer',
    res: '4K',
    lightningType: 'Lightning',
    seasonType: 'Season',
    resType: 'Res',
  },
  {
    src: CartItemImg.src,
    quantity: 1,
    unitPrice: 100,
    lightning: 'Day',
    season: 'Summer',
    res: '4K',
    lightningType: 'Lightning',
    seasonType: 'Season',
    resType: 'Res',
  },
  {
    src: CartItemImg.src,
    quantity: 1,
    unitPrice: 100,
    lightning: 'Day',
    season: 'Summer',
    res: '4K',
    lightningType: 'Lightning',
    seasonType: 'Season',
    resType: 'Res',
  },
];

const Payment = () => {
  const router = useRouter();
  const { isLoading: isLoadingAuth, user } = useAuthentication();

  const [orders, setOrders] = React.useState<CartItemData[]>(ordersDefault);
  const [subtotal, setSubtotal] = React.useState(0);

  useEffect(() => {
    const newSubtotal = orders.reduce(
      (acc, order) => acc + order.unitPrice * order.quantity,
      0,
    );
    setSubtotal(newSubtotal);
  }, [orders]);

  if (!user) {
    return null;
  }

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
              <Chip radius="sm" className="bg-[#F2F2F2]">
                <p className="text-xs text-[#434446] font-bold">
                  Billing Details
                </p>
              </Chip>
            </div>

            <div className="flex-grow flex flex-col gap-6 overflow-auto">
              <form action="#" className="flex flex-col gap-3">
                <Input
                  variant="bordered"
                  size="sm"
                  type="text"
                  label="Billing Company"
                  labelPlacement={'outside'}
                  placeholder="Project Name"
                  classNames={{
                    input: ['text-xs placeholder:text-[#AAAAAA]'],
                    inputWrapper: [
                      'border-[1px] group-data-[focus=true]:border-[#79C420]',
                    ],
                    label: ['font-medium !text-[#8A8A8A] pl-2'],
                  }}
                />
                <div className="flex gap-3">
                  <Input
                    variant="bordered"
                    size="sm"
                    type="text"
                    label="First Name"
                    labelPlacement={'outside'}
                    placeholder="First Name"
                    classNames={{
                      input: ['text-xs placeholder:text-[#AAAAAA]'],
                      inputWrapper: [
                        'flex-grow border-[1px] group-data-[focus=true]:border-[#79C420]',
                      ],
                      label: ['font-medium !text-[#8A8A8A] pl-2'],
                    }}
                  />
                  <Input
                    variant="bordered"
                    size="sm"
                    type="text"
                    label="Last Name"
                    labelPlacement={'outside'}
                    placeholder="Last Name"
                    classNames={{
                      input: ['text-xs placeholder:text-[#AAAAAA]'],
                      inputWrapper: [
                        'flex-grow border-[1px] group-data-[focus=true]:border-[#79C420]',
                      ],
                      label: ['font-medium !text-[#8A8A8A] pl-2'],
                    }}
                  />
                </div>
                <div className="flex gap-3">
                  <Input
                    variant="bordered"
                    size="sm"
                    type="text"
                    label="Email"
                    labelPlacement={'outside'}
                    placeholder="nicolek22@gmail.com"
                    classNames={{
                      input: ['text-xs placeholder:text-[#AAAAAA]'],
                      inputWrapper: [
                        'flex-grow border-[1px] group-data-[focus=true]:border-[#79C420]',
                      ],
                      label: ['font-medium !text-[#8A8A8A] pl-2'],
                    }}
                  />
                  <Input
                    variant="bordered"
                    size="sm"
                    type="text"
                    label="Phone"
                    labelPlacement={'outside'}
                    placeholder="0100-04-02-76"
                    classNames={{
                      input: ['text-xs placeholder:text-[#AAAAAA]'],
                      inputWrapper: [
                        'flex-grow border-[1px] group-data-[focus=true]:border-[#79C420]',
                      ],
                      label: ['font-medium !text-[#8A8A8A] pl-2'],
                    }}
                  />
                </div>
              </form>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-bold">Subtotal:</h1>
                  <div className="flex items-center gap-[2px] text-sm font-bold">
                    <span>$</span>
                    <span>{subtotal}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-bold">Discount:</h1>
                  <span className="text-sm font-bold">CODE</span>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-bold">GST:</h1>
                  <div className="flex items-center gap-[2px] text-sm font-bold">
                    <span>$</span>
                    <span>5</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-bold">Total:</h1>
                  <div className="flex items-center gap-[2px] text-sm font-bold">
                    <span>$</span>
                    <span>{subtotal + 5}</span>
                  </div>
                </div>
              </div>

              <p className="text-[10px] font-medium text-[#8A8A8A] uppercase">
                50% Deposit is required to commence work.
                <br />
                E-Transfers are prefered.
                <br />
                Full payment is due before final files will be released.
                <br />
                Additonal fees may apply.
              </p>
            </div>
          </div>

          <div className="sticky bottom-0 flex gap-3 bg-white z-10 pt-4 flex-wrap">
            <Button className="flex-grow bg-[#F2F2F2] font-bold rounded-lg p-0 h-[40px] min-w-[100px]">
              SAVE QUOTE
            </Button>
            <Button
              className="flex-grow bg-[#79C420] text-white font-bold rounded-lg p-0 h-[40px] min-w-[100px]"
              onClick={() => {
                router.push('/view-order');
              }}
            >
              CHECK OUT
            </Button>
          </div>
        </div>

        <div className="basis-9/12 rounded flex">
          <div className="w-1/2 basis-1/2 pr-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-[#434446] font-bold px-3 py-4">
                ORDER DETAILS
              </h1>
              <div className="border-1 border-[#F2F2F2] p-3 rounded-lg flex flex-col gap-3">
                <div className="flex items-center gap-5">
                  <h2 className="text-[#434446] text-sm font-bold">Project:</h2>
                  <span className="text-[#434446] text-sm font-medium uppercase">
                    Glenora Townhouse
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <h2 className="text-[#434446] text-sm font-bold">Address:</h2>
                  <span className="text-[#434446] text-sm font-medium uppercase">
                    3950 RAINBOW STREET, VICTORIA BC
                  </span>
                </div>
                <div className="flex">
                  <div className="w-1/2 basis-1/2">
                    <div className="flex items-center gap-5">
                      <h2 className="text-[#434446] text-sm font-bold">
                        Start:
                      </h2>
                      <span className="text-[#434446] text-sm font-medium uppercase">
                        24-07-22
                      </span>
                    </div>
                  </div>

                  <div className="w-1/2 basis-1/2">
                    <div className="flex items-center gap-5">
                      <h2 className="text-[#434446] text-sm font-bold">Due:</h2>
                      <span className="text-[#434446] text-sm font-medium uppercase">
                        24-08-15
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/2 basis-1/2">
                    <div className="flex items-center gap-5">
                      <h2 className="text-[#434446] text-sm font-bold">
                        Budget:
                      </h2>
                      <span className="text-[#434446] text-sm font-medium uppercase">
                        All the Detail
                      </span>
                    </div>
                  </div>

                  <div className="w-1/2 basis-1/2">
                    <div className="flex items-center gap-5">
                      <h2 className="text-[#434446] text-sm font-bold">
                        Speed:
                      </h2>
                      <span className="text-[#434446] text-sm font-medium uppercase">
                        Rush
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-1 border-[#F2F2F2] p-3 rounded-lg flex flex-col gap-3">
                <h2 className="text-sm text-[#434446] font-bold">
                  General instruction:
                </h2>
                <p className="text-sm text-[#434446] font-medium">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua.
                </p>
              </div>
              <div className="border-1 border-[#F2F2F2] p-3 rounded-lg flex flex-col items-stretch gap-3">
                <h2 className="text-sm text-[#434446] font-bold">
                  Project Files
                </h2>
                <ul className="list-disc text-sm text-[#434446] font-medium pl-4">
                  <li>Project-Color.pdf</li>
                  <li>Final-Rendering.Jpeg</li>
                </ul>
                <div className="flex items-center gap-5 max-w-full">
                  <h2 className="flex-shrink-0 text-sm text-[#434446] font-bold">
                    Share links:
                  </h2>
                  <Link
                    href="#"
                    className="text-sm text-[#009238] font-bold text-ellipsis"
                  >
                    www.wetransfer.com/project...
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 basis-1/2 pr-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-[#434446] font-bold px-3 py-4">MY CART</h1>
              <div className="flex flex-col gap-6">
                {orders.map((order, index) => (
                  <ItemOrder
                    key={index}
                    data={order}
                    onRemove={() => {
                      const newOrders = orders.filter((_, i) => i !== index);
                      setOrders(newOrders);
                    }}
                    onDecrease={() => {
                      const newOrders = [...orders];
                      newOrders[index].quantity = Math.max(
                        1,
                        newOrders[index].quantity - 1,
                      );
                      setOrders(newOrders);
                    }}
                    onIncrease={() => {
                      const newOrders = [...orders];
                      newOrders[index].quantity += 1;
                      setOrders(newOrders);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
