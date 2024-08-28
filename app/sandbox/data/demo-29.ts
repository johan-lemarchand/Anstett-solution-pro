import BarChart from 'app/sandbox/icons/solid/BarChart';
import CloudNetwork2 from 'app/sandbox/icons/solid/CloudNetwork2';
import Controls from 'app/sandbox/icons/solid/Controls';
import Lock from 'app/sandbox/icons/solid/Lock';
import Rocket from 'app/sandbox/icons/solid/Rocket';
import Safe from 'app/sandbox/icons/solid/Safe';
import TouchScreen from 'app/sandbox/icons/solid/TouchScreen';
import Checked from 'app/sandbox/icons/solid/Checked';
import Calendar from 'app/sandbox/icons/solid/Calendar';
import Compare from 'app/sandbox/icons/solid/Compare';
import Currency from 'app/sandbox/icons/solid/Currency';
import Devices from 'app/sandbox/icons/solid/Devices';
import Search from 'app/sandbox/icons/solid/Search';
import Server from 'app/sandbox/icons/solid/Server';

import color from 'app/sandbox/utils/color';

export const features = [
  { id: 1, color: color.yellow, Icon: CloudNetwork2, title: 'Toujours à jour' },
  { id: 2, color: color.green, Icon: TouchScreen, title: 'Utilisation facile' },
  { id: 3, color: color.purple, Icon: Lock, title: 'Paiements sécurisés' },
  { id: 4, color: color.pink, Icon: Rocket, title: 'Transactions rapides' },
  { id: 5, color: color.violet, Icon: BarChart, title: 'Rapports et prévisions' },
  { id: 6, color: color.orange, Icon: Safe, title: 'Banque en ligne' },
  { id: 7, color: color.blue, Icon: Controls, title: 'Champs configurables' },
  { id: 8, color: color.leaf, Icon: Checked, title: 'Liste de transactions' }
];

export const abouts = [
  {
    id: 1,
    Icon: Calendar,
    color: color.grape,
    title: 'Transactions planifiées',
    description: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna.`
  },
  {
    id: 2,
    Icon: Currency,
    color: color.green,
    title: 'Multiples devises',
    description: `Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.`
  },
  {
    id: 3,
    Icon: Server,
    color: color.pink,
    title: 'Gestion de données',
    description: `Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes.`
  },
  {
    id: 4,
    Icon: Devices,
    color: color.yellow,
    title: 'Synchronisation entre appareils',
    description: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna.`
  },
  {
    id: 5,
    Icon: Search,
    color: color.blue,
    title: 'Recherche intelligente',
    description: `Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.`
  },
  {
    id: 6,
    Icon: Compare,
    color: color.leaf,
    title: 'Rapports détaillés',
    description: `Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes.`
  }
];

export const testimonials = [
  {
    id: 1,
    color: color.grape,
    name: 'Coriss Ambady',
    designation: 'Analyste financier',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.`
  },
  {
    id: 2,
    color: color.green,
    name: 'Cory Zamora',
    designation: 'Spécialiste en marketing',
    review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.`
  },
  {
    id: 3,
    color: color.orange,
    name: 'Nikolas Brooten',
    designation: 'Directeur commercial',
    review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui consectetur adipiscing elit.`
  },
  {
    id: 4,
    color: color.pink,
    name: 'Coriss Ambady',
    designation: 'Analyste financier',
    review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum ac laoreet vitae.`
  },
  {
    id: 5,
    color: color.yellow,
    name: 'Laura Widerski',
    designation: 'Spécialiste des ventes',
    review: `Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
  },
  {
    id: 6,
    color: color.blue,
    name: 'Jackie Sanders',
    designation: 'Planificateur d\'Investissements',
    review: `Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero a pharetra.`
  }
];
