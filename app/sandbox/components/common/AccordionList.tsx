import Accordion from "app/sandbox/components/reuseable/accordion";

// CUSTOM DATA
const accordions = [
  {
    no: "One",
    expand: true,
    heading: "Design professionnel",
    body: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
  },
  {
    no: "Two",
    expand: false,
    heading: "Un support de qualité",
    body: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
  },
  {
    no: "Three",
    expand: false,
    heading: "Composant de carrousel",
    body: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
  }
];

export default function AccordionList() {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
}
