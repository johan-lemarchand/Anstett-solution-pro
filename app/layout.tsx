import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import ScrollCue from './sandbox/scroll-cue';
import ThemeProvider from './sandbox/theme/ThemeProvider';
import PageProgress from './sandbox/components/common/PageProgress';
import { Toaster } from '@/components/ui/toaster';
// animate css
import 'animate.css';
// import swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
// video player css
import 'plyr-react/plyr.css';
// glightbox css
import 'glightbox/dist/css/glightbox.css';
// custom scrollcue css
import './sandbox/plugins/scrollcue/scrollCue.css';
// Bootstrap and custom scss
import './sandbox/assets/scss/style.scss';
import '../app/globals.css';
import React from 'react';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anstett Solution Pro',
  description: 'Anstett Solution Pro',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={manrope.className}>
        <ScrollCue>
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster />
        </ScrollCue>

        <PageProgress />
      </body>
    </html>
  );
}
