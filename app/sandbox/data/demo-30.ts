import SeoTwo from 'app/sandbox/icons/solid/SeoTwo';
import Server from 'app/sandbox/icons/solid/Server';
import PenTool from 'app/sandbox/icons/solid-duo/PenTool';
import ShoppingBusket from 'app/sandbox/icons/solid/ShoppingBusket';
import color from 'app/sandbox/utils/color';

export const services = [
  { id: 1, Icon: PenTool, title: 'Web Design' },
  { id: 2, Icon: SeoTwo, title: 'Services SEO' },
  { id: 3, Icon: ShoppingBusket, title: 'E-commerce' },
  { id: 4, Icon: Server, title: 'Hébergement web' }
];

export const processList = [
  {
    id: '01',
    color: color.grape,
    title: 'Recueillir des idées',
    description: 'Nulla vitae elit libero pharetra augue dapibus.',
    className: 'card rounded-xl me-lg-6 bg-pale-grape'
  },
  {
    id: '02',
    color: color.fuchsia,
    title: 'Analyser des données',
    description: 'Cras mattis consectetur purus sit amet.',
    className: 'card rounded-xl ms-lg-13 mt-6 bg-pale-fuchsia'
  },
  {
    id: '03',
    color: color.fuchsia,
    title: 'Finaliser le produit',
    description: 'Cras mattis consectetur purus sit amet.',
    className: 'card rounded-xl mx-lg-6 mt-6 bg-pale-green'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Analyste financier',
    review: `Cum sociis natoque penatibus et magnis dis parturient montes.`,
    className: 'col-md-6 col-xl-5 align-self-end'
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Spécialiste en marketing',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta
    felis euismod.`,
    className: 'col-md-6 align-self-end'
  },
  {
    id: 3,
    name: 'Barclay Widerski',
    designation: 'Spécialiste des ventes',
    review: `Donec id elit non porta gravida at eget metus. Duis mollis est luctus commodo nisi erat.`,
    className: 'col-md-6 col-xl-5 offset-xl-1'
  },
  {
    id: 4,
    name: 'Jackie Sanders',
    designation: 'Planificateur d\'Investissements',
    review: `Nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo pellentesque.`,
    className: 'col-md-6 align-self-start'
  }
];
