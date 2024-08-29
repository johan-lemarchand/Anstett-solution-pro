import { IconProps } from '../../../../types/iconProps';
import LinkType from '../../../../types/demo-1';

// ===============================================================
interface ServiceCard1AgencyProps {
  title: string;
  linkUrl: string;
  linkType: LinkType;
  description: string;
  cardClassName?: string;
  iconClassName?: string;
  Icon: (props: IconProps) => JSX.Element;
}
// ===============================================================

export default function ServiceCard1Agency({
  title,
  Icon,
  linkUrl,
  linkType,
  description,
  cardClassName = '',
  iconClassName = '',
}: ServiceCard1AgencyProps) {
  return (
    <div className="col-md-6 col-xl-3">
      <div className={`card shadow-lg ${cardClassName}`}>
        <div className="card-body">
          <Icon className={iconClassName} />
          <h4>{title}</h4>
          <p className="mb-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
