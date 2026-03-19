'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-91VLVSYN6R', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}