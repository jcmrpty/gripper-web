'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from './lib/gtag';

export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  return null;
}