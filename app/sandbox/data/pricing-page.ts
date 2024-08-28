const serviceList = [
  {
    id: 1,
    linkUrl: '#',
    title: 'Support 24/7',
    icon: 'uil-phone-volume',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 2,
    linkUrl: '#',
    title: 'Paiement sécurisé',
    icon: 'uil-shield-exclamation',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 4,
    linkUrl: '#',
    title: 'Étude de marché',
    icon: 'uil-chart-line',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  }
];

const accordionList = [
  [
    {
      no: 'One',
      expand: false,
      heading: 'Puis-je annuler mon abonnement?',
      body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
      no: 'Two',
      expand: false,
      heading: 'Quels modes de paiement acceptez-vous?',
      body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
      no: 'Three',
      expand: false,
      heading: 'Comment puis-je gérer mon compte?',
      body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
      no: 'Four',
      expand: false,
      heading: 'Mes informations de carte de crédit sont-elles protégées ?',
      body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    }
  ],
  [
    {
      no: 'Five',
      expand: false,
      heading: 'Comment puis-je obtenir mon reçu d’abonnement?',
      body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
      no: 'Six',
      expand: false,
      heading: 'Existe-t-il des remises',
      body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
      no: 'Seven',
      expand: false,
      heading: 'Proposez-vous un essai gratuit?',
      body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
      no: 'Eight',
      expand: false,
      heading: 'Comment puis-je réinitialiser mon mot de passe?',
      body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    }
  ]
];

const testimonialList = [
  {
    name: 'Coriss Ambady',
    image: '/img/avatars/te1.jpg',
    designation: 'Analyste financier',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.`
  },
  {
    name: 'Cory Zamora',
    image: '/img/avatars/te2.jpg',
    designation: 'Spécialiste en marketing',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.`
  },
  {
    name: 'Nikolas Brooten',
    image: '/img/avatars/te3.jpg',
    designation: 'Spécialiste des ventes',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.`
  },
  {
    name: 'Coriss Ambady',
    image: '/img/avatars/te4.jpg',
    designation: 'Analyste financier',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.`
  },
  {
    name: 'Jackie Sanders',
    image: '/img/avatars/te5.jpg',
    designation: 'Planificateur d\'Investissements',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.`
  },
  {
    name: 'Laura Widerski',
    image: '/img/avatars/te6.jpg',
    designation: 'Spécialiste des ventes',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.`
  }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { serviceList, accordionList, testimonialList };
