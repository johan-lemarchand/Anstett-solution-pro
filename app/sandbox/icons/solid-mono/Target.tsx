import {IconProps} from 'app/sandbox/types/icon';

const Target = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 256.1 256.01"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-inject icon-svg ${className || 'icon-svg-sm solid-mono text-primary me-4'}`}
    >
      <path
        className="fill-secondary"
        d="M178.66 79.37L166.93 91.1a76.68 76.68 0 014.91 11.52 85.77 85.77 0 0114.93-1.28h1.39a93.65 93.65 0 00-9.5-21.97zM0 128a96.1 96.1 0 00109.65 95 82.93 82.93 0 01-5.65-15.42 67 67 0 01-8 .43A80 80 0 0196 48a79 79 0 0137 9.17l11.73-11.73A94.73 94.73 0 0096 32a96.14 96.14 0 00-96 96z"
      />
      <path
        className="fill-secondary"
        d="M37.33 128A58.78 58.78 0 0096 186.68a47.26 47.26 0 005.44-.32A82.71 82.71 0 01103 170a37.32 37.32 0 01-7 .64 42.67 42.67 0 010-85.34 32.88 32.88 0 018 .84l12.91-12.91a57 57 0 00-20.91-4A58.81 58.81 0 0037.33 128z"
      />
      <path
        className="fill-secondary"
        d="M96 106.68A21.33 21.33 0 10117.33 128 21.39 21.39 0 0096 106.68zm0 26.66a5.33 5.33 0 115.33-5.33 5.28 5.28 0 01-5.33 5.33z"
      />
      <path
        className="fill-primary"
        d="M96.1 136a8 8 0 01-5.67-13.65L159.76 53a8 8 0 0111.31 11.31l-69.33 69.33A8 8 0 0196.1 136z"
      />
      <path
        className="fill-primary"
        d="M194.77 64H168.1a8 8 0 01-8-8V29.34a8.08 8.08 0 012.33-5.67l21.33-21.33A8 8 0 01197.42 8v18.68h18.68a8 8 0 015.66 13.66l-21.33 21.33a8 8 0 01-5.66 2.33zm-8 53.34a69.34 69.34 0 1069.33 69.34 69.4 69.4 0 00-69.33-69.34zm29.87 56.11L182 210.78a8 8 0 01-11.09.64l-18.67-16a8 8 0 1110.41-12.15l12.84 11 29.44-31.69a8 8 0 0111.74 10.88z"
      />
    </svg>
  );
};

export default Target;
