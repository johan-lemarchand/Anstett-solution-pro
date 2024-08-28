import {IconProps} from 'app/sandbox/types/icon';

const Like = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256.02 256"
      className={`svg-inject icon-svg ${className || 'solid text-primary'}`}
    >
      <g data-name="Layer 2">
        <path
          className="fill-primary"
          d="M226.67 21.33a8 8 0 018 8v144a8 8 0 01-8 8H107.31a21.3 21.3 0 00-15.09 6.25L64 215.81v-13.14a21.34 21.34 0 00-21.33-21.33H29.33a8 8 0 01-8-8v-144a8 8 0 018-8h197.34zm0-21.33H29.33A29.35 29.35 0 000 29.33v144a29.36 29.36 0 0029.33 29.33h13.33V248a8 8 0 004.94 7.39 7.82 7.82 0 003.07.61 8.09 8.09 0 005.67-2.34l51-51h119.35A29.36 29.36 0 00256 173.34v-144A29.39 29.39 0 00226.67 0z"
        ></path>
        <path
          className="fill-secondary"
          d="M96 146.67a10.67 10.67 0 01-10.67 10.67H74.66A10.68 10.68 0 0164 146.67v-64A10.67 10.67 0 0174.66 72h10.67A10.67 10.67 0 0196 82.67zm89.92-10.88C184 148.06 172.8 157.34 160 157.34h-8.11c-21.33 0-36.16-4-45.44-7.79a25.36 25.36 0 00.21-2.88v-64A21.24 21.24 0 00104 72.32c5.65-4.48 12.69-11.73 12.69-19.84 0-6.61 0-20.27 12.8-20.27 8.53 0 17.81 7.89 17.81 25.17A48.86 48.86 0 01145 72h21.23A25.76 25.76 0 01192 97.71c0 .32-1.28 27.09-6.51 38z"
        ></path>
      </g>
    </svg>
  );
};

export default Like;
