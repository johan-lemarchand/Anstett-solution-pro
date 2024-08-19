import Edit from 'app/sandbox/icons/solid-mono/Edit';
import Lamp from 'app/sandbox/icons/solid-mono/Lamp';
import Team from 'app/sandbox/icons/lineal/Team';
import Check from 'app/sandbox/icons/lineal/Check';
import Medal from 'app/sandbox/icons/lineal/Medal';
import Earth from 'app/sandbox/icons/lineal/Earth';
import Shield from 'app/sandbox/icons/lineal/Shield';
import Target from 'app/sandbox/icons/lineal/Target';
import Search from 'app/sandbox/icons/lineal/Search';
import ChatTwo from 'app/sandbox/icons/lineal/ChatTwo';
import Script from 'app/sandbox/icons/solid-duo/Script';
import Verify from 'app/sandbox/icons/solid-mono/Verify';
import Server from 'app/sandbox/icons/solid-duo/Server';
import Setting from 'app/sandbox/icons/solid-duo/Setting';
import TeamTwo from 'app/sandbox/icons/solid-mono/TeamTwo';
import ShopTwo from 'app/sandbox/icons/lineal/ShopTwo';
import Browser from 'app/sandbox/icons/lineal/Browser';
import Director from 'app/sandbox/icons/solid-duo/Director';
import Settings from 'app/sandbox/icons/lineal/Settings';
import Telephone from 'app/sandbox/icons/lineal/Telephone';
import SearchTwo from 'app/sandbox/icons/lineal/SearchTwo';
import Analytics from 'app/sandbox/icons/lineal/Analytics';
import Megaphone from 'app/sandbox/icons/lineal/Megaphone';
import ClockThree from 'app/sandbox/icons/lineal/ClockThree';
import DeliveryBox from 'app/sandbox/icons/solid-mono/DeliveryBox';
import CloudNetwork from 'app/sandbox/icons/solid-duo/CloudNetwork';
import SmartphoneTwo from 'app/sandbox/icons/lineal/SmartphoneTwo';
import SettingsThree from 'app/sandbox/icons/lineal/SettingsThree';
import CloudComputing from 'app/sandbox/icons/lineal/CloudComputing';
import { LinkType } from 'app/sandbox/types/demo-1';
import color from 'app/sandbox/utils/color';

// used in the services-1 block
export const serviceList1 = [
  {
    id: 1,
    link: '#',
    icon: Search,
    title: 'SEO Services',
    linkText: 'Learn More',
    linkType: LinkType.yellow,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 2,
    link: '#',
    icon: Browser,
    title: 'Web Design',
    linkText: 'Learn More',
    linkType: LinkType.red,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 3,
    link: '#',
    icon: ChatTwo,
    linkType: LinkType.green,
    title: 'Social Engagement',
    linkText: 'Learn More',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 4,
    link: '#',
    icon: Megaphone,
    linkType: LinkType.blue,
    title: 'Content Marketing',
    linkText: 'Learn More',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  }
];

// used in the services-3, services-8, services-13 block
export const serviceList2 = [
  {
    id: 1,
    linkUrl: '#',
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 2,
    linkUrl: '#',
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 3,
    linkUrl: '#',
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 4,
    linkUrl: '#',
    title: 'Market Research',
    icon: 'uil-chart-line',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  }
];

// used in the services-4 block
export const serviceList3 = [
  {
    id: 1,
    linkUrl: '#',
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 2,
    linkUrl: '#',
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 3,
    linkUrl: '#',
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 4,
    linkUrl: '#',
    title: 'Market Research',
    icon: 'uil-chart-line',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  }
];

// used in the services-5 block
export const serviceList4 = [
  {
    id: 1,
    Icon: Telephone,
    title: '24/7 Support',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: Shield,
    title: 'Secure Payments',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    Icon: CloudComputing,
    title: 'Daily Updates',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Analytics,
    title: 'Market Research',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: Settings,
    title: 'System Integration',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Earth,
    title: 'SEO Services',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

// used in the services-6 block
export const serviceList5 = [
  ['Aenean quam ornare curabitur blandit consectetur.', 'Nullam quis risus eget urna mollis ornare aenean leo.'],
  ['Etiam porta euismod malesuada mollis nisl ornare.', 'Vivamus sagittis lacus augue rutrum maecenas odio.']
];

// used in the services-7 block
export const serviceList6 = [
  {
    id: 1,
    Icon: Target,
    color: color.aqua,
    title: 'Fitness Goal',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: Medal,
    color: color.yellow,
    title: 'Activity Tracking',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    Icon: ClockThree,
    color: color.red,
    title: 'Sleep Analysis',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Check,
    color: color.pink,
    title: 'Workout Report',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: ShopTwo,
    color: color.green,
    title: 'Nutritional Analysis',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Team,
    color: color.purple,
    title: 'Activity Sharing',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

// used in the services-9 block
export const serviceList7 = [
  {
    id: 1,
    Icon: Telephone,
    color: color.yellow,
    title: '24/7 Support',
    cardColor: 'bg-pale-yellow',
    columnClass: 'col-md-5 offset-md-1 align-self-end',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.'
  },
  {
    id: 2,
    Icon: Shield,
    color: color.red,
    title: 'Secure Payments',
    cardColor: 'bg-pale-red',
    columnClass: 'col-md-6 align-self-end',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.'
  },
  {
    id: 3,
    color: color.leaf,
    Icon: CloudComputing,
    title: 'Daily Updates',
    cardColor: 'bg-pale-leaf',
    columnClass: 'col-md-5',
    description: 'Nulla vitae elit libero, a pharetra augue.'
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.primary,
    title: 'Market Research',
    cardColor: 'bg-pale-primary',
    columnClass: 'col-md-6 align-self-start',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.'
  }
];

// used in the services-18 block
export const serviceList8 = [
  {
    id: 1,
    Icon: Browser,
    title: 'Web Design',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 2,
    Icon: SmartphoneTwo,
    title: 'Mobile Design',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 3,
    Icon: SettingsThree,
    title: 'Development',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 4,
    title: 'SEO',
    Icon: SearchTwo,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  }
];

// used in the services-19 block
export const serviceList9 = [
  {
    id: 1,
    linkUrl: '#',
    color: color.purple,
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 2,
    linkUrl: '#',
    color: color.green,
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 3,
    linkUrl: '#',
    color: color.orange,
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  }
];

// used in the services-20 block
export const serviceList10 = [
  {
    id: 1,
    linkUrl: '#',
    Icon: Script,
    title: 'Software & Integration',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    linkUrl: '#',
    Icon: Verify,
    title: 'Network Security',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    linkUrl: '#',
    Icon: CloudNetwork,
    title: 'Cloud Services',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    linkUrl: '#',
    Icon: Director,
    title: 'Wireless Networking',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    linkUrl: '#',
    Icon: Setting,
    title: 'IT Solutions',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    linkUrl: '#',
    Icon: Server,
    title: 'Server Configuration',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

// used in the services-21 block
export const serviceList11 = [
  {
    id: 1,
    link: '#',
    Icon: Edit,
    title: 'Content Marketing',
    linkType: LinkType.fuchsia,
    iconClassName: 'icon-svg-sm solid-mono text-fuchsia mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 2,
    link: '#',
    Icon: TeamTwo,
    title: 'Social Engagement',
    linkType: LinkType.violet,
    iconClassName: 'icon-svg-sm solid-mono text-violet mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 3,
    link: '#',
    Icon: Lamp,
    linkType: LinkType.orange,
    title: 'Identity & Branding',
    iconClassName: 'icon-svg-sm solid-mono text-orange mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 4,
    link: '#',
    Icon: DeliveryBox,
    title: 'Product Design',
    linkType: LinkType.green,
    iconClassName: 'icon-svg-sm solid-mono text-green mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  }
];

// used in the services-24 block
export const serviceList12 = [
  {
    id: 1,
    title: 'Web Design',
    image: { '1x': '/img/illustrations/i24.png', '2x': '/img/illustrations/i24@2x.png 2x' },
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
    tellus.`
  },
  {
    id: 2,
    title: 'Graphic Design',
    image: { '1x': '/img/illustrations/i19.png', '2x': '/img/illustrations/i19@2x.png 2x' },
    description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.`
  },
  {
    id: 3,
    title: '3D Animation',
    image: { '1x': '/img/illustrations/i18.png', '2x': '/img/illustrations/i18@2x.png 2x' },
    description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
  }
];

// used in the services-25 block
export const serviceList13 = [
  {
    id: 1,
    linkUrl: '#',
    color: color.purple,
    title: 'Web Design',
    icon: 'uil-monitor',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.`
  },
  {
    id: 2,
    linkUrl: '#',
    color: color.green,
    title: 'Graphic Design',
    icon: 'uil-swatchbook',
    description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.`
  },
  {
    id: 3,
    linkUrl: '#',
    color: color.pink,
    title: '3D Animation',
    icon: 'uil-presentation-play',
    description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
  }
];

// used in the services-26 block
export const serviceList14 = [
  {
    id: 1,
    url: '#',
    title: 'Wedding',
    image: { '1x': '/img/photos/fs1.jpg', '2x': '/img/photos/fs1@2x.jpg 2x' }
  },
  {
    id: 2,
    url: '#',
    title: 'Couples',
    image: { '1x': '/img/photos/fs2.jpg', '2x': '/img/photos/fs2@2x.jpg 2x' }
  },
  {
    id: 3,
    url: '#',
    title: 'Engagement',
    image: { '1x': '/img/photos/fs3.jpg', '2x': '/img/photos/fs3@2x.jpg 2x' }
  }
];

export const serviceListAgency = [
  {
    id: 2,
    link: '#',
    Icon: TeamTwo,
    title: 'Notre engagement',
    linkType: LinkType.violet,
    iconClassName: 'icon-svg-sm solid-mono text-violet mb-3',
    description: `Notre offre est conçue pour être abordable tout en garantissant un bon retour sur investissement. Un site bien référencé permet d'attirer de nouveaux clients.`
  },
  {
    id: 1,
    link: '#',
    Icon: Edit,
    title: 'Notre offre',
    linkType: LinkType.fuchsia,
    iconClassName: 'icon-svg-sm solid-mono text-fuchsia mb-3',
    description: `Nous proposons un site vitrine optimisé pour le référencement, afin d'améliorer votre visibilité dans les résultats de recherche. Nous gérons l'aspect technique pour que vous puissiez vous concentrer sur votre activité principale.`
  },
  {
    id: 3,
    link: '#',
    Icon: Lamp,
    linkType: LinkType.orange,
    title: 'Votre présence en ligne, votre atout',
    iconClassName: 'icon-svg-sm solid-mono text-orange mb-3',
    description: `Actuellement, 80 % de vos concurrents sont facilement repérables sur Google, ce qui augmente fortement leur présence en ligne. Imaginez que vos prospects puissent vous découvrir aussi aisément. Cela pourrait non seulement élargir votre audience, mais aussi solidifier votre réputation professionnelle.`
  },
  {
    id: 4,
    link: '#',
    Icon: DeliveryBox,
    title: 'Votre produit sur-mesure',
    linkType: LinkType.green,
    iconClassName: 'icon-svg-sm solid-mono text-green mb-3',
    description: `Nous comprenons que chaque entreprise est unique, c'est pourquoi nous vous offrons une solution entièrement personnalisée. Nous adaptons notre approche à vos besoins spécifiques, pour créer un produit qui reflète parfaitement votre vision et répond aux attentes de votre marché cible. Avec notre expertise, vous bénéficiez d'un service sur-mesure qui met en valeur votre singularité tout en maximisant votre impact.`
  }
];

