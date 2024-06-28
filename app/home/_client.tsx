'use client';

import { AddOrder, Banner, ProjectDetail, ViewOrder } from '@app/home/sections';
import { HomePageClientProps } from '@app/type';
import { demoStatesSelector, setDemoFunc } from '@lib/services/demo';
import { useAppDispatch, useAppSelector } from '@lib/store';

export default function HomePageClient({}: HomePageClientProps) {
  const dispatch = useAppDispatch();
  const demo = useAppSelector(demoStatesSelector);

  const handleClick = () => {
    dispatch(setDemoFunc('Hello world!'));
  };
  return (
    <>
      {/* <Banner />
      <ProjectDetail />
      <AddOrder /> */}
      <ViewOrder />
    </>
  );
}
