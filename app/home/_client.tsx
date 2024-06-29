'use client';

import { Main } from '@app/home/sections';
import { HomePageClientProps } from '@app/type';
import Header from '@lib/components/header';
import { useAuthentication } from '@lib/hooks/use-authentication';

export default function HomePageClient({}: HomePageClientProps) {
  const user = useAuthentication();

  return (
    user && (
      <>
        <Header />
        <Main />
      </>
    )
  );
}
