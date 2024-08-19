import { ServiceCard1 } from "app/sandbox/components/reuseable/service-cards";
// CUSTOM DATA
import { serviceListAgency } from "app/sandbox/data/service";

export default function ServicesAgency() {
  return (
    <div className="row gx-md-5 gy-5 mt-n19 mb-14 mb-md-17">
      {serviceListAgency.map(({ id, Icon, ...item }) => (
        <ServiceCard1 {...item} key={id} linkUrl="#" Icon={Icon} />
      ))}
    </div>
  );
}
