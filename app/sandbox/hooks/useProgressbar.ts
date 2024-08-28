"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Waypoint: any;
  }
}

export default function useProgressbar() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const initProgressBars = () => {
      require("../plugins/waypoints");
      const ProgressBar = require("../plugins/progressbar");

      const pline = document.querySelectorAll(".progressbar.line");
      const pcircle = document.querySelectorAll(".progressbar.semi-circle");

      const progressBarInstances: any[] = [];
      const waypoints: any[] = [];

      const initElement = (e: Element, isCircle: boolean) => {
        if (e.hasAttribute('data-initialized')) return;

        const options = {
          strokeWidth: 6,
          trailWidth: 6,
          duration: isCircle ? 2000 : 3000,
          easing: "easeInOut",
          text: {
            style: {
              color: "inherit",
              position: "absolute",
              right: isCircle ? "0" : "0",
              top: isCircle ? "0" : "-30px",
              padding: 0,
              margin: 0,
              transform: "none",
              fontWeight: "500"
            },
            autoStyleContainer: false
          },
          step: (state: any, bar: any) => {
            const value = Math.round(bar.value() * 100);
            bar.setText(isCircle ? value : value + "%");
          }
        };

        const progressBar = isCircle 
          ? new ProgressBar.SemiCircle(e, options)
          : new ProgressBar.Line(e, options);

        const value = Number(e.getAttribute("data-value")) / 100;
        const waypoint = new window.Waypoint({
          element: e,
          offset: "bottom-in-view",
          handler: () => progressBar.animate(value)
        });

        progressBarInstances.push(progressBar);
        waypoints.push(waypoint);
        e.setAttribute('data-initialized', 'true');
        if (isCircle) {
          const textElement = e.querySelector('.progressbar-text');
          if (textElement instanceof HTMLElement) {
            textElement.style.top = '0';
            textElement.style.transform = 'none';
          }
        }
      };

      pline.forEach(e => initElement(e, false));
      pcircle.forEach(e => initElement(e, true));
    };

    if (document.readyState === 'complete') {
      initProgressBars();
    } else {
      window.addEventListener('load', initProgressBars);
    }

    initialized.current = true;

    return () => {
      window.removeEventListener('load', initProgressBars);
    };
  }, []);

  return null;
}