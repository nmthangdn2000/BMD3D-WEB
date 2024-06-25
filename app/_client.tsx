'use client';

import { HomePageClientProps } from '@app/type';
import { demoStatesSelector, setDemoFunc } from '@lib/services/demo';
import { useAppDispatch, useAppSelector } from '@lib/store';
import { Button } from '@nextui-org/react';

export default function HomePageClient({}: HomePageClientProps) {
  const dispatch = useAppDispatch();
  const demo = useAppSelector(demoStatesSelector);

  const handleClick = () => {
    dispatch(setDemoFunc('Hello world!'));
  };
  return (
    <div>
      <h1>{demo}</h1>

      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}
