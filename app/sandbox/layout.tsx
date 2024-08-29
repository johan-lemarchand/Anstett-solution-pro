import type { Metadata } from 'next';
import ScrollCue from '@sandbox/scroll-cue';
import ThemeProvider from '@sandbox/theme/ThemeProvider';
import PageProgress from '@sandbox/components/common/PageProgress';

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
import 'app/sandbox/plugins/scrollcue/scrollCue.css';
// Bootstrap and custom scss
import 'app/sandbox/assets/scss/style.scss';
import React from 'react';

export const metadata: Metadata = {
  title: 'Anstett Solution Pro',
  description: 'Anstett Solution Pro',
};

export default function SandboxLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="sandbox-layout">
      <ScrollCue>
        <ThemeProvider>{children}</ThemeProvider>
      </ScrollCue>
      <PageProgress />
    </div>
  );
}
