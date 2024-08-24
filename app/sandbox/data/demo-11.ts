const list = [
  ['Aenean quam ornare. Curabitur blandit.', 'Nullam quis risus eget urna mollis ornare.'],
  ['Etiam porta euismod malesuada mollis.', 'Vivamus sagittis lacus vel augue rutrum.']
];

const facts = [
  { id: 1, amount: 7518, title: 'Projets achevés' },
  { id: 2, amount: 3472, title: 'Clients satisfaits' },
  { id: 3, amount: 2184, title: 'Collaborateurs experts' },
  { id: 4, amount: 4523, title: 'Prix décernés' }
];

const blogList = [
  {
    id: 1,
    category: 'Programmation',
    date: '14 avril 2022',
    image: '/img/photos/b4.jpg',
    title: 'Ligula tristique quis risus',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 2,
    category: 'Espace de travail',
    date: '29 mars 2022',
    image: '/img/photos/b5.jpg',
    title: 'ullam id dolor elit id nibh',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 3,
    category: 'Meeting',
    date: '26 février 2022',
    image: '/img/photos/b6.jpg',
    title: 'Ultricies fusce porta elit',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 4,
    category: 'Conseils professionnels',
    date: '7 janvier 2022',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  }
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
    designation: 'Spécialiste en Marketing',
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

const testimonialList = [
  {
    id: 1,
    name: 'Coriss Ambady',
    image: '/img/avatars/te7.jpg',
    designation: 'Analyste financier',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
  },
  {
    id: 2,
    name: 'Cory Zamora',
    image: '/img/avatars/te8.jpg',
    designation: 'Spécialiste en Marketing',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
  },
  {
    id: 3,
    name: 'Barclay Widerski',
    image: '/img/avatars/te9.jpg',
    designation: 'Spécialiste des ventes',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
  }
];

const faq = [
  {
    id: 1,
    title: 'Puis-je annuler mon abonnement?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  },
  {
    id: 2,
    title: 'Quels modes de paiement acceptez-vous?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  },
  {
    id: 3,
    title: 'Comment puis-je gérer mon compte?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  },
  {
    id: 4,
    title: 'Les renseignements relatifs à ma carte de crédit sont-ils sécurisés?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  }
];

export { list, facts, blogList, teams, testimonialList, faq };
