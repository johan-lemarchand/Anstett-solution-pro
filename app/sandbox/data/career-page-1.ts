import Alarm from 'app/sandbox/icons/solid-mono/Alarm';
import Wallet from 'app/sandbox/icons/solid-mono/Wallet';
import Target from 'app/sandbox/icons/solid-mono/Target';
import Building from 'app/sandbox/icons/solid-mono/Building';
import Employees from 'app/sandbox/icons/solid-mono/Employees';
import VideoChat from 'app/sandbox/icons/solid-mono/VideoChat';

const facilities = [
  {
    id: 1,
    Icon: Target,
    title: 'Évolution de carrière',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: VideoChat,
    title: 'Travailler n\'importe où',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    Icon: Wallet,
    title: 'Salaire Attractif',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Building,
    title: 'Assurance médicale',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: Alarm,
    title: 'Horaires flexibles',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Employees,
    title: 'Culture de travail extraordinaire',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

const testimonialList = [
  {
    id: 1,
    name: 'Coriss Ambady',
    image: '/img/avatars/te1.jpg',
    designation: 'Analyste financier',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis.`
  },
  {
    id: 2,
    name: 'Cory Zamora',
    image: '/img/avatars/te2.jpg',
    designation: 'Spécialiste en marketing',
    review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia.`
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    image: '/img/avatars/te3.jpg',
    designation: 'Directeur des ventes',
    review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui.`
  },
  {
    id: 4,
    name: 'Coriss Ambady',
    image: '/img/avatars/te4.jpg',
    designation: 'Analyste financier',
    review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor`
  },
  {
    id: 5,
    name: 'Laura Widerski',
    image: '/img/avatars/te5.jpg',
    designation: 'Spécialiste des ventes',
    review: `Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient.`
  },
  {
    id: 6,
    name: 'Jackie Sanders',
    image: '/img/avatars/te6.jpg',
    designation: 'Jackie Sanders',
    review: `Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio.`
  }
];

const jobList = [
  {
    id: 1,
    company: 'SD',
    time: 'Temps plein',
    avatarColor: 'bg-red',
    location: 'San Francisco, US',
    title: 'Graphiste senior',
    badgeColor: 'bg-pale-blue text-blue'
  },
  {
    id: 2,
    company: 'UX',
    time: 'Remote',
    location: 'N\'importe où',
    title: 'Designer UI/UX',
    avatarColor: 'bg-green',
    badgeColor: 'bg-pale-aqua text-aqua'
  },
  {
    id: 3,
    company: 'AN',
    time: 'Temps plein',
    avatarColor: 'bg-yellow',
    location: 'Birmingham, UK',
    badgeColor: 'bg-pale-blue text-blue',
    title: 'Multimedia Artist & Animator'
  },
  {
    id: 4,
    company: 'FD',
    time: 'Temps partiel',
    location: 'Sydney, AU',
    avatarColor: 'bg-purple',
    title: 'Développeur front-end',
    badgeColor: 'bg-pale-violet text-violet'
  },
  {
    id: 5,
    company: 'MD',
    time: 'Temps plein',
    avatarColor: 'bg-orange',
    title: 'Développeur mobile',
    location: 'San Francisco, US',
    badgeColor: 'bg-pale-blue text-blue'
  },
  {
    id: 6,
    company: 'MD',
    time: 'Temps plein',
    avatarColor: 'bg-pink',
    title: 'Développeur.NET',
    location: 'Manchester, UK',
    badgeColor: 'bg-pale-blue text-blue'
  }
];

const accordionList = [
  {
    no: 'One',
    expand: false,
    heading: 'Comment puis-je obtenir mon reçu d’abonnement?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Existe-t-il des rabais pour les personnes dans le besoin?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Proposez-vous un essai gratuit ?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  },
  {
    no: 'Four',
    expand: false,
    heading: 'Comment puis-je réinitialiser mon mot de passe?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  }
];

export default { facilities, testimonialList, jobList, accordionList };
