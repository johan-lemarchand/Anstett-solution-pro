import Shield from '@sandbox/icons/lineal/Shield';
import Design from '@sandbox/icons/lineal/Design';
import Target from '@sandbox/icons/lineal/Target';
import Wallet from '@sandbox/icons/lineal/Wallet';
import ChatTwo from '@sandbox/icons/lineal/ChatTwo';
import Loyalty from '@sandbox/icons/lineal/Loyalty';
import Padlock from '@sandbox/icons/lineal/Padlock';
import AwardTwo from '@sandbox/icons/lineal/AwardTwo';
import CheckList from '@sandbox/icons/lineal/CheckList';
import Insurance from '@sandbox/icons/lineal/Insurance';
import Telephone from '@sandbox/icons/lineal/Telephone';
import Analytics from '@sandbox/icons/lineal/Analytics';
import Megaphone from '@sandbox/icons/lineal/Megaphone';
import LightBulb from '@sandbox/icons/lineal/LightBulb';
import PieChartTwo from '@sandbox/icons/lineal/PieChartTwo';
import CloudComputingTwo from '@sandbox/icons/lineal/CloudComputingTwo';
import color from '@sandbox/utils/color';

const serviceList = [
  {
    id: 1,
    Icon: Telephone,
    color: color.blue,
    title: 'Support 24/7',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`,
  },
  {
    id: 2,
    Icon: Shield,
    color: color.yellow,
    title: 'Paiements sécurisés',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`,
  },
  {
    id: 3,
    color: color.orange,
    Icon: CloudComputingTwo,
    title: 'Mises à jour quotidiennes',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`,
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.pink,
    title: 'Étude de marché',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`,
  },
  {
    id: 5,
    Icon: ChatTwo,
    color: color.green,
    title: 'Engagement sociétal',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`,
  },
  {
    id: 6,
    Icon: Megaphone,
    color: color.purple,
    title: 'Marketing de contenu',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`,
  },
];

const processList = [
  {
    id: 1,
    Icon: LightBulb,
    title: "Collecte  d'idées",
    description:
      'Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.',
  },
  {
    id: 2,
    Icon: PieChartTwo,
    title: 'Analyse de données',
    description:
      'Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.',
  },
  {
    id: 3,
    Icon: Design,
    title: 'Touche de magie',
    description:
      'Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.',
  },
];

const abouts = [
  {
    id: 1,
    Icon: Target,
    color: color.blue,
    title: 'Notre vision',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
        tellus.`,
  },
  {
    id: 2,
    Icon: AwardTwo,
    color: color.green,
    title: 'Notre mission',
    description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere  consectetur.`,
  },
  {
    id: 3,
    Icon: Loyalty,
    color: color.yellow,
    title: 'Nos valeurs',
    description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`,
  },
];

const pricingList = [
  {
    price: 9,
    plan: 'Basic',
    features: [
      '2 Projets',
      '100K Accès API ',
      '100MB Stockage',
      'Rapports hebdomadaires',
      'Support 24/7',
    ],
  },
  {
    price: 19,
    plan: 'Premium',
    features: [
      '5 Projets',
      '200K Accès API',
      '300MB Stockage',
      'Rapports hebdomadaires',
      'Support 24/7',
    ],
  },
  {
    price: 29,
    plan: 'Entreprises',
    features: [
      '20 Projets',
      '300K Accès API',
      '500MB Stockage',
      'Rapports hebdomadaires',
      'Support 24/7',
    ],
  },
  {
    price: 49,
    plan: 'Collectif',
    features: [
      '90 Projets',
      '900K Accès API',
      '900MB Stockage',
      'Rapports hebdomadaires',
      'Support 24/7',
    ],
  },
];

const faqList = [
  {
    id: 1,
    Icon: CheckList,
    title: 'Puis-je annuler mon abonnement?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`,
  },
  {
    id: 2,
    Icon: Wallet,
    title: 'Quels modes de paiement acceptez-vous?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`,
  },
  {
    id: 3,
    Icon: Insurance,
    title: 'Comment puis-je gérer mon compte?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`,
  },
  {
    id: 4,
    Icon: Padlock,
    title:
      'Les renseignements relatifs à ma carte de crédit sont-ils sécurisés?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`,
  },
];

export default { serviceList, processList, abouts, pricingList, faqList };
