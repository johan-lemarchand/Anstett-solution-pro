import IconProps from '../../../types/icon';

const ShoppingBasket = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 412.9"
      className={`svg-inject icon-svg ${className || 'icon-svg-md text-primary mb-3'}`}
    >
      <path
        className="lineal-fill"
        d="M453.8 238.1l-9.6 76.3H67.8l-9.6-76.3z"
      />
      <circle className="lineal-fill" cx="178.1" cy="149.9" r="35.1" />
      <circle className="lineal-fill" cx="333.9" cy="149.9" r="35.1" />
      <path
        className="lineal-stroke"
        d="M498.6 136.5h-60.2c-7.4-.2-13.6 5.7-13.8 13.1-.2 7.4 5.7 13.6 13.1 13.8h11.8l-7.5 61.3H70.1l-7.5-61.3h68.9c7.4 25.7 34.3 40.6 60 33.1 16-4.6 28.5-17.1 33.1-33.1h62.6c7.4 25.7 34.3 40.6 60 33.2 25.7-7.4 40.6-34.3 33.2-60-4.9-17.1-18.9-30.1-36.3-33.9l-39-94.2c-2.8-6.9-10.7-10.1-17.6-7.3s-10.1 10.7-7.3 17.6l35.7 86.2c-14 5.5-24.6 17.2-28.8 31.6h-62.6c-4.2-14.4-14.8-26.1-28.8-31.7l35.7-86.2c2.8-6.9-.4-14.7-7.3-17.6s-14.7.4-17.6 7.3l-39.1 94.2c-17.4 3.8-31.3 16.9-36.2 33.9H13.4C6 136.7.1 142.9.3 150.3c.2 7.1 5.9 12.9 13.1 13.1h22.1l29.8 237.8c.9 6.7 6.6 11.8 13.3 11.8h354.8c6.8 0 12.5-5 13.3-11.8l29.8-237.8h22c7.4-.2 13.3-6.4 13.1-13.8-.2-7.2-5.9-12.9-13-13.1zm-165-8.2c.4 0 .9.1 1.3.1h.7c11.9.9 20.8 11.3 19.9 23.2-.9 11.9-11.3 20.8-23.2 19.9-11.9-.9-20.8-11.3-19.9-23.2.8-11.1 10-19.7 21.2-20zm-157.1.1h.7c.4 0 .9-.1 1.3-.1 11.9.2 21.4 10 21.3 22-.2 11.9-10 21.4-22 21.3-11.9-.2-21.4-10-21.3-22 .2-11.2 8.9-20.4 20-21.2zm-103 123.1h365.1l-6.3 49.5H79.7l-6.2-49.5zM90.4 386L83 327.9h345.9l-7.4 58.1H90.4z"
      />
    </svg>
  );
};

export default ShoppingBasket;
