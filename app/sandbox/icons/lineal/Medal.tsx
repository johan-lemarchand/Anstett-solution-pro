import IconProps from 'app/sandbox/types/icon';

const Medal = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 316.5 409.6"
      className={`svg-inject icon-svg ${className || 'icon-svg-sm text-yellow me-4'}`}
    >
      <path
        className="lineal-stroke"
        d="M158.2 409.6c-59.4 0-107.5-48.2-107.5-107.5S99 194.6 158.3 194.6s107.5 48.2 107.5 107.5c0 20-5.6 39.6-16.1 56.6-3.4 5.5-10.6 7.1-16 3.7s-7.1-10.6-3.7-16c24.4-39.5 12.2-91.3-27.3-115.8S111.3 218.5 86.8 258s-12.2 91.3 27.3 115.8c22.5 13.9 50.2 16.4 74.8 6.8 6-2.3 12.7.6 15.1 6.6 2.3 6-.6 12.7-6.6 15.1-12.5 4.8-25.8 7.3-39.2 7.3z"
      />
      <path
        className="lineal-fill"
        d="M158.2 206.2c19.9 0 39.4 6.2 55.6 17.8l88.1-152.5c4.6-8 3.7-18-2.2-25l-23-27.1c-4.1-4.9-10.2-7.7-16.6-7.7H56.4c-6.4 0-12.5 2.8-16.6 7.7l-23 27.2c-6 7-6.9 17-2.2 25l88 152.4c16.2-11.6 35.7-17.8 55.6-17.8zm73.4-134l-73.3 127-73.4-127h146.7z"
      />
      <path
        className="lineal-stroke"
        d="M213.8 235.6c-2.4 0-4.8-.8-6.8-2.2-29.2-20.8-68.5-20.8-97.7 0-5.2 3.7-12.5 2.5-16.2-2.7l-.6-.9-88-152.5c-7-12.2-5.7-27.5 3.4-38.3l23-27.2C37.2 4.3 46.6 0 56.4 0h203.7c9.8 0 19.2 4.3 25.5 11.8l23 27.1c9.1 10.8 10.5 26.1 3.4 38.3l-88.1 152.5c-1.6 2.8-4.4 4.9-7.6 5.6-.8.2-1.6.3-2.5.3zM56.4 23.3c-3 0-5.8 1.3-7.8 3.6L25.7 54c-2.8 3.3-3.2 7.9-1 11.7l82.1 142c11.2-6.1 23.4-10.2 36-12.1L74.8 78c-3.2-5.6-1.3-12.7 4.3-15.9 1.8-1 3.8-1.6 5.8-1.6h146.7c6.4 0 11.6 5.2 11.6 11.7 0 2-.5 4-1.6 5.8l-67.9 117.7c12.6 1.8 24.8 5.9 36 12.1l82-142c2.1-3.7 1.7-8.4-1-11.6l-23-27.2c-1.9-2.3-4.8-3.6-7.7-3.6l-203.6-.1zm48.7 60.5l53.2 92.1 53.2-92.1H105.1zm45.1 192.9l-4.4 2.7c-1.1.8-2.4 1.2-3.8 1.2-4.4 0-7.4-4.7-7.4-9.4-.1-3.3 1.6-6.3 4.4-8l20-12.1c1.3-.8 2.9-1.1 4.4-1.1 4.8 0 10.4 2.9 10.4 7.4v96.2c0 4.9-5.9 7.3-11.8 7.3s-11.8-2.4-11.8-7.3v-76.9z"
      />
    </svg>
  );
};

export default Medal;
