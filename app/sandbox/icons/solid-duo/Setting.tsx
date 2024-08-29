import IconProps from '../../../types/icon';

const Setting = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 213.34"
      className={`svg-inject icon-svg solid-duo ${className || 'icon-svg-sm text-grape-fuchsia me-4'}`}
    >
      <path
        className="fill-secondary"
        d="M177.81 73.28c.11-1.28.21-2.56.21-4s-.12-2.67-.21-4l8.85-6.52a13.19 13.19 0 003.63-17.07l-7.89-13.98a12.76 12.76 0 00-16.64-5.44L156 26.86a51.33 51.33 0 00-6.08-3.63l-1.12-11.39A13 13 0 00135.89 0H120.1a13 13 0 00-12.92 11.84l-1.07 11.41a51.33 51.33 0 00-6.11 3.63l-9.81-4.59a12.86 12.86 0 00-16.64 5.44L65.7 41.81a13.12 13.12 0 003.63 17.07l8.85 6.51c-.12 1.28-.21 2.56-.21 4s.11 2.68.21 4l-8.85 6.51a13.12 13.12 0 00-3.62 17l7.89 14.08a12.84 12.84 0 0016.64 5.44l9.81-4.59a51.33 51.33 0 006.08 3.63l1.07 11.41a13 13 0 0012.91 11.84h15.79a13 13 0 0012.92-11.84l1.07-11.41a51.33 51.33 0 006.08-3.63l9.81 4.59a12.76 12.76 0 0016.64-5.44l7.88-14.08a13.12 13.12 0 00-3.63-17.07zm-23.14-3.94A26.67 26.67 0 11128 42.67a26.69 26.69 0 0126.67 26.67z"
      />
      <path
        className="fill-primary"
        d="M224 149.34H32a32 32 0 000 64h192a32 32 0 000-64zM42.67 192a10.67 10.67 0 1110.67-10.66A10.67 10.67 0 0142.67 192zM96 192a10.67 10.67 0 1110.67-10.66A10.67 10.67 0 0196 192zm64 0a10.67 10.67 0 1110.67-10.66A10.67 10.67 0 01160 192zm53.33 0A10.67 10.67 0 11224 181.34 10.67 10.67 0 01213.33 192z"
      />
    </svg>
  );
};

export default Setting;
