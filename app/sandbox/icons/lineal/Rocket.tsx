import { IconProps } from '../../../types/icon';

const Rocket = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 294.2 409.6"
      className={`svg-inject icon-svg ${className || 'icon-svg-sm text-aqua mb-3'}`}
    >
      <path
        className="lineal-stroke"
        d="M31.2 342.9c-2.4 1.7-5.8 1.1-7.5-1.3-.6-.9-1-2-1-3.1v-77.1l68.9-77.2V150L5 247.1c-3.2 3.6-5 8.2-5 13v78.4c0 15.5 12.6 28.1 28.1 28.1 5.8 0 11.5-1.8 16.2-5.1l9.6-6.8-13.1-18.6-9.6 6.8zm258.1-95.8L200.7 148v34.2l70.8 79.3v77.1c0 3-2.4 5.4-5.4 5.4-1.1 0-2.2-.3-3.1-1l-9.6-6.7-13.1 18.6 9.6 6.7c12.7 8.9 30.3 5.9 39.2-6.9 3.3-4.7 5.1-10.4 5.1-16.1v-78.4c0-4.8-1.8-9.5-4.9-13.1zM147.1 409.6l-6.1-3.9c-2-1.3-49.3-32-49.3-72.5 0-40 23.3-72.6 53.1-74.2.8 0 1.6-.1 2.3-.1 4.1 0 8.1.6 12.1 1.7 9.1 2.7 17.6 8.4 24.6 16.6 11.9 14 18.7 34.4 18.7 55.9 0 40.5-47.2 71.2-49.3 72.5l-6.1 4zm0-127.9h-1c-17.5.9-31.7 24-31.7 51.5 0 19.6 19.9 39.1 32.6 48.9 12.7-9.8 32.6-29.3 32.6-48.9 0-16.2-4.9-31.2-13.3-41.1-4.1-4.8-8.8-8.1-13.6-9.5-1.8-.6-3.7-.9-5.6-.9z"
      />
      <path
        className="lineal-fill"
        d="M147.1 11.4c-13.1 0-96.4 71.4-96.4 143.4 0 24.5 29.3 178.4 29.3 178.4h134.1s29.3-153.9 29.3-178.4c.1-72.4-83.9-143.4-96.3-143.4zm49.8 159.2c-1 4.9-2.7 9.6-5.1 14-.8 1.4-1.6 2.8-2.5 4.2-3.7 5.4-8.3 10.1-13.7 13.7-1.3.9-2.7 1.8-4.2 2.5-24.7 13.4-55.6 4.2-68.9-20.5s-4.2-55.6 20.5-68.9c7.4-4 15.8-6.2 24.3-6.1 3.4 0 6.9.3 10.2 1 4.9 1 9.6 2.7 14 5.1 7.2 3.9 13.4 9.5 17.9 16.3 5.7 8.4 8.7 18.3 8.7 28.4-.1 3.5-.4 6.9-1.2 10.3z"
      />
      <path
        className="lineal-stroke"
        d="M147.1 222.6c-34.4 0-62.2-28-62.2-62.3 0-34.4 28-62.2 62.3-62.2 10.3 0 20.4 2.6 29.5 7.5 2.6 1.4 5.2 3.1 7.6 4.9 24.8 18.5 32.2 52.4 17.5 79.6-1 1.8-2 3.5-3.1 5.1-4.5 6.6-10.2 12.3-16.8 16.8-1.6 1.1-3.4 2.2-5.1 3.1-9.1 4.9-19.3 7.5-29.7 7.5zm0-101.7c-21.8-.3-39.7 17-40.1 38.8s17 39.7 38.8 40.1h1.3c2.7 0 5.4-.3 8-.8 3.8-.8 7.4-2.1 10.8-4 1.1-.6 2.2-1.3 3.2-2 4.2-2.8 7.8-6.5 10.7-10.7.7-1.1 1.4-2.1 2-3.3 1.9-3.4 3.2-7 4-10.8.5-2.6.8-5.3.8-8 0-12.5-5.9-24.2-15.9-31.6-1.5-1.1-3.1-2.2-4.8-3.1-3.4-1.9-7-3.2-10.8-4-2.6-.5-5.3-.8-8-.8v.2z"
      />
      <path
        className="lineal-stroke"
        d="M89.5 321.8h115.2c9-47.9 27.4-149.1 27.4-167 0-63-69.5-123.9-85-131.5-6.7 3.3-26.8 18.4-46.8 43.2-24.6 30.4-38.2 61.8-38.2 88.4 0 17.9 18.4 119.1 27.4 166.9zm134.1 22.8H70.7l-1.8-9.3c-3-15.9-29.5-155.7-29.5-180.6 0-42.2 25-80.9 45.9-106C101.1 29.9 131.8 0 147.1 0c15 0 45.7 29.8 61.5 48.6 21.1 25.1 46.2 63.8 46.2 106.2 0 24.9-26.5 164.7-29.5 180.6l-1.7 9.2z"
      />
    </svg>
  );
};

export default Rocket;
