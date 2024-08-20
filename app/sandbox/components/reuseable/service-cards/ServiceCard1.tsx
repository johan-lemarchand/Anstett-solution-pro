import NextLink from "../links/NextLink";

import IconProps from "app/sandbox/types/icon";
import { LinkType } from "app/sandbox/types/demo-1";

// ===============================================================
interface ServiceCard1Props {
  title: string;
  linkUrl: string;
  linkType: LinkType;
  description: string;
  cardClassName?: string;
  iconClassName?: string;
  Icon: (props: IconProps) => JSX.Element;
}
// ===============================================================

export default function ServiceCard1({
  title,
  Icon,
  linkUrl,
  linkType,
  description,
  cardClassName = "",
  iconClassName = ""
}: ServiceCard1Props) {
  return (
    <div className="col-md-6 col-xl-3">
      <div className={`card shadow-lg ${cardClassName}`}>
        <div className="card-body">
          <Icon className={iconClassName} />
          <h4>{title}</h4>
          <p className="mb-2">{description}</p>
          <NextLink title="En savoir plus" href={linkUrl} className={`plus sur link-${linkType}`} />
        </div>
      </div>
    </div>
  );
}
