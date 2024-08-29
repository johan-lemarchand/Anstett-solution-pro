import User from 'app/sandbox/icons/lineal/User';
import Gift from 'app/sandbox/icons/lineal/Gift';
import Check from 'app/sandbox/icons/lineal/Check';
import IdCard from 'app/sandbox/icons/lineal/IdCard';
import ChatTwo from 'app/sandbox/icons/lineal/ChatTwo';
import Browser from 'app/sandbox/icons/lineal/Browser';
import { LinkType } from '../../types/demo-1';
import BriefcaseTwo from 'app/sandbox/icons/lineal/BriefcaseTwo';

const services = [
  {
    id: 1,
    link: '#',
    Icon: Browser,
    title: 'Contenu marketing',
    linkType: LinkType.yellow,
    iconClassName: 'icon-svg-md text-yellow mb-3',
    cardClassName: 'card-border-bottom border-soft-yellow',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 2,
    link: '#',
    Icon: ChatTwo,
    title: 'Engagement social',
    linkType: LinkType.green,
    iconClassName: 'icon-svg-md text-green mb-3',
    cardClassName: 'card-border-bottom border-soft-green',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 3,
    link: '#',
    Icon: IdCard,
    linkType: LinkType.orange,
    title: 'Identité et image de marque',
    iconClassName: 'icon-svg-md text-orange mb-3',
    cardClassName: 'card-border-bottom border-soft-orange',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 4,
    link: '#',
    Icon: Gift,
    linkType: LinkType.blue,
    title: 'Design produit',
    iconClassName: 'icon-svg-md text-blue mb-3',
    cardClassName: 'card-border-bottom border-soft-blue',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  }
];

const processList = [
  {
    no: '1',
    className: 'me-lg-6',
    title: 'Collecte  d\'idées',
    subtitle: 'Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.'
  },
  {
    no: '2',
    title: 'Analyse des données',
    className: 'ms-lg-13 mt-6',
    subtitle: 'Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.'
  },
  {
    no: '3',
    title: 'Finalisation du produit',
    className: 'mx-lg-6 mt-6',
    subtitle: 'Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.'
  }
];

const factList = [
  { id: 1, number: 7518, title: 'Projets achevés', Icon: Check },
  { id: 2, number: 3472, title: 'Clients satisfaits', Icon: User },
  { id: 3, number: 2184, title: 'Collaborateurs experts', Icon: BriefcaseTwo }
];

const reviews = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Analyste financier',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.`
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Spécialiste en marketing',
    review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus sit amet fermentum.`
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    designation: 'Directeur des ventes',
    review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae libero.`
  },
  {
    id: 4,
    name: 'Coriss Ambady',
    designation: 'Analyste financier',
    review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum, pharetra augue.`
  }
];

export { services, processList, factList, reviews };
