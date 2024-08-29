import { IconProps } from '../../../types/icon';

const SeoTwo = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={`svg-inject icon-svg ${className || 'solid-duo text-grape-fuchsia'}`}
    >
      <path
        className="fill-primary"
        d="M194.67 48h-5.33a2.68 2.68 0 00-2.67 2.67v26.67a2.68 2.68 0 002.67 2.66h5.33a2.68 2.68 0 002.67-2.68V50.67a2.69 2.69 0 00-2.67-2.67z"
      />

      <path
        className="fill-primary"
        d="M226.67 0H29.33A29.32 29.32 0 000 29.33v69.33a29.28 29.28 0 0017.6 26.88 41.68 41.68 0 0125.07-8.21A42.44 42.44 0 0170.83 128H82a53 53 0 0192 0h11.2a42.49 42.49 0 0128.16-10.67 41.81 41.81 0 0125.07 8.21A29.28 29.28 0 00256 98.66V29.33A29.32 29.32 0 00226.67 0zM61.76 56h4.48c10.56 0 19.09 9 19.09 20S76.8 96 66.24 96H50.67a8 8 0 010-16h15.57c1.71 0 3.09-1.81 3.09-4s-1.39-4-3.09-4h-4.48c-10.56 0-19.09-9-19.09-20s8.53-20 19.09-20h15.57a8 8 0 010 16H61.76c-1.71 0-3.09 1.81-3.09 4s1.38 4 3.09 4zm79.57 0a8 8 0 010 16h-18.67v5.33a2.64 2.64 0 002.67 2.67h16a8 8 0 010 16h-16a18.76 18.76 0 01-18.67-18.67V50.66A18.77 18.77 0 01125.33 32h16a8 8 0 110 16h-16a2.65 2.65 0 00-2.67 2.68V56zm72 21.33A18.76 18.76 0 01194.66 96h-5.33a18.76 18.76 0 01-18.67-18.67V50.66A18.77 18.77 0 01189.33 32h5.33a18.77 18.77 0 0118.67 18.68z"
      />

      <circle className="fill-secondary" cx="42.67" cy="160" r="21.33" />

      <path
        className="fill-secondary"
        d="M71.15 196.27A44.71 44.71 0 0053.34 232v2.67H8a8.06 8.06 0 01-8-8v-5.33A29.32 29.32 0 0129.33 192H56a29.13 29.13 0 0115.15 4.27z"
      />

      <circle className="fill-secondary" cx="213.33" cy="160" r="21.33" />

      <path
        className="fill-secondary"
        d="M256 221.33v5.33a8.07 8.07 0 01-8 8h-45.33V232a44.69 44.69 0 00-17.81-35.73A29.07 29.07 0 01200 192h26.67A29.32 29.32 0 01256 221.33z"
      />

      <circle className="fill-secondary" cx="128" cy="154.67" r="32" />

      <path
        className="fill-secondary"
        d="M157.33 202.67H98.66A29.35 29.35 0 0069.33 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16a29.35 29.35 0 00-29.33-29.33z"
      />
    </svg>
  );
};

export default SeoTwo;
