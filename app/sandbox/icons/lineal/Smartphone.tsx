import {IconProps} from '../../../types/icon';

const Smartphone = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 327.4 512"
      className={`svg-inject icon-svg ${className || 'icon-svg-md text-yellow me-5'}`}
    >
      <path
        className="lineal-fill"
        d="M313.7 72.3V47c0-18.4-14.9-33.2-33.2-33.2H47c-18.4 0-33.2 14.9-33.2 33.2v25.3h299.9zM13.8 398.4V465c0 18.4 14.9 33.2 33.2 33.2h233.4c18.4 0 33.2-14.9 33.2-33.2v-66.6H13.8z"
      />

      <path
        className="lineal-stroke"
        d="M280.4 0H47C21.1 0 0 21.1 0 47v418c0 25.9 21.1 47 47 47h233.4c25.9 0 47-21.1 47-47V352.3c0-7.6-6.2-13.8-13.8-13.7-7.6 0-13.7 6.2-13.7 13.7v32.3H27.5V86.1h272.4V256c0 7.6 6.1 13.8 13.7 13.8s13.8-6.1 13.8-13.7V47c0-25.9-21-47-47-47zm19.5 412.1V465c0 10.8-8.7 19.5-19.5 19.5H47c-10.8 0-19.5-8.7-19.5-19.5v-52.9h272.4zM27.5 58.6V47c0-10.8 8.7-19.5 19.5-19.5h233.4c10.8 0 19.5 8.7 19.5 19.5v11.6H27.5z"
      />

      <circle cx="163.7" cy="448.3" r="9.4" />

      <path
        className="lineal-stroke"
        d="M163.7 471.5c-12.8 0-23.2-10.4-23.2-23.2 0-12.8 10.4-23.2 23.2-23.2s23.2 10.4 23.2 23.2-10.4 23.2-23.2 23.2zm-25.4-248.1H69.5c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.8 6.2 13.8 13.8s-6.2 13.8-13.8 13.8h-55v32.1h55c7.6 0 13.8 6.2 13.8 13.8-.1 7.5-6.2 13.7-13.8 13.7z"
      />
      <path className="lineal-fill" d="M189.2 150H258v59.6h-68.8z" />

      <path
        className="lineal-stroke"
        d="M258 223.4h-68.8c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.6-6.1 13.8-13.7 13.8zm-55-27.5h41.3v-32.1h-41.4l.1 32.1z"
      />

      <path className="lineal-fill" d="M69.5 265.6h68.8v59.6H69.5z" />

      <path
        className="lineal-stroke"
        d="M138.3 339H69.5c-7.6 0-13.8-6.2-13.8-13.8v-59.7c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.7-6.1 13.9-13.7 13.9zm-55-27.5h41.2v-32.1H83.2l.1 32.1zM258 339h-68.8c-7.6 0-13.8-6.2-13.7-13.8 0-7.6 6.2-13.7 13.7-13.7h55v-32.1h-55c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.8 6.2 13.8 13.8v59.6c0 7.6-6.2 13.8-13.8 13.8z"
      />
    </svg>
  );
};

export default Smartphone;
