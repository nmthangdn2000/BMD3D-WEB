import { OrderInfoFormData } from '@app/checkout/_components/order-info/type';

export type GlobalStatesState = {
  user: {
    name: string;
    accessToken: string;
  } | null;
};
