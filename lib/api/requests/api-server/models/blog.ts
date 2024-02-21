import { IBase } from './base';

export enum BlogType {
  TYPE1 = 'type1',
  TYPE2 = 'type2',
  TYPE3 = 'type3',
}

export interface IBlog extends IBase {
  id: string;
  title: string;
  slug: string;
  type: BlogType;
  source: string;
  views: number;
}
