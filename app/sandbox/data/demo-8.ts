import Target from 'app/sandbox/icons/lineal/Target';
import AwardTwo from 'app/sandbox/icons/lineal/AwardTwo';
import BarChart from 'app/sandbox/icons/lineal/BarChart';
import Megaphone from 'app/sandbox/icons/lineal/Megaphone';
import SettingsThree from 'app/sandbox/icons/lineal/SettingsThree';

const clients = [
  { id: 1, image: '/img/brands/c1.png' },
  { id: 2, image: '/img/brands/c2.png' },
  { id: 3, image: '/img/brands/c3.png' },
  { id: 4, image: '/img/brands/c4.png' },
  { id: 5, image: '/img/brands/c5.png' },
  { id: 6, image: '/img/brands/c6.png' },
  { id: 7, image: '/img/brands/c7.png' },
  { id: 8, image: '/img/brands/c8.png' }
];

const whatWeAre = [
  { id: 1, Icon: Target, title: 'Notre mission', description: 'Dapibus eu leo quam ornare curabitur blandit tempus.' },
  { id: 2, Icon: AwardTwo, title: 'Nos valeurs', description: 'Aenean lacinia bibendum nulla sed consectetur.' }
];

const services = [
  { id: 1, Icon: Megaphone, title: 'Marketing', description: 'Nulla vitae elit libero pharetra augue dapibus.' },
  { id: 2, Icon: Target, title: 'Stratégie', description: 'Vivamus sagittis lacus augue laoreet vel.' },
  { id: 3, Icon: SettingsThree, title: 'Développement', description: 'Cras mattis consectetur purus sit amet.' },
  { id: 4, Icon: BarChart, title: 'Analyse de données', description: 'Aenean lacinia bibendum nulla sed consectetur.' }
];

const teams = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Analyste financier',
    image: { '1x': '/img/avatars/t1.jpg', '2x': '/img/avatars/t1@2x.jpg 2x' }
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Spécialiste en marketing',
    image: { '1x': '/img/avatars/t2.jpg', '2x': '/img/avatars/t2@2x.jpg 2x' }
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    designation: 'Directeur des ventes',
    image: { '1x': '/img/avatars/t3.jpg', '2x': '/img/avatars/t3@2x.jpg 2x' }
  },
  {
    id: 4,
    name: 'Jackie Sanders',
    designation: 'Planificateur d\'Investissements',
    image: { '1x': '/img/avatars/t4.jpg', '2x': '/img/avatars/t4@2x.jpg 2x' }
  }
];

const progressList = [
  { id: 1, percent: 100, title: 'Marketing' },
  { id: 2, percent: 80, title: 'Stratégie' },
  { id: 3, percent: 85, title: 'Développement' }
];

const pricingList = [
  {
    monthlyPrice: 19,
    yearlyPrice: 199,
    planName: 'Premium',
    features: ['5 Projets', '100K API Access', '200MB Stockage', 'Rapports hebdomadaires', 'Support 24/7']
  },
  {
    monthlyPrice: 49,
    yearlyPrice: 499,
    planName: 'Entreprises',
    features: ['20 Projets', '300K API Access', '500MB Stockage', 'Rapports hebdomadaires', 'Support 24/7']
  }
];

const accordions = [
  {
    no: 'One',
    expand: false,
    heading: 'Comment puis-je obtenir mon reçu d’abonnement?',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Existe-t-il des rabais ?',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Proposez-vous un essai gratuit ?',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  },
  {
    no: 'Four',
    expand: false,
    heading: 'Comment puis-je réinitialiser mon mot de passe ?',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  }
];

export { clients, whatWeAre, services, teams, progressList, pricingList, accordions };
