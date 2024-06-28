'use client';

import { Main } from '@app/home/sections';
import { HomePageClientProps } from '@app/type';
import Header from '@lib/components/header';
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
      <Header />
      <Main />
    </>
  );
}
