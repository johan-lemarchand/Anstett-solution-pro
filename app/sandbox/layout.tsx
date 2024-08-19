import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import ScrollCue from "../sandbox/scroll-cue";
import ThemeProvider from "app/sandbox/theme/ThemeProvider";

import PageProgress from "app/sandbox/components/common/PageProgress";

// animate css
import "animate.css";
// import swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// video player css
import "plyr-react/plyr.css";
// glightbox css
import "glightbox/dist/css/glightbox.css";
// custom scrollcue css
import "./sandbox/plugins/scrollcue/scrollCue.css";
// Bootstrap and custom scss
import "./sandbox/assets/scss/style.scss";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anstett Agency",
  description: "Anstett Agency"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={manrope.className}>
        <ScrollCue>
          <ThemeProvider>{children}</ThemeProvider>
        </ScrollCue>

        <PageProgress />
      </body>
    </html>
  );
}
