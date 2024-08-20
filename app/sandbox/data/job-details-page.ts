const jobMeta = [
  { id: 1, icon: 'uil-clock', title: 'Temps plein' },
  { id: 2, icon: 'uil-location-arrow', title: 'Manchester, UK' },
  { id: 3, icon: 'uil-building', title: 'Service de conception' }
];

const responsiblities = [
  ['Aenean eu leo quam ornare curabitur blandit tempus.', 'Nullam quis risus eget urna mollis ornare donec elit.'],
  ['Etiam porta sem malesuada magna mollis euismod.', 'Fermentum massa vivamus faucibus amet euismod.']
];

const requirements = [
  ['Aenean eu leo quam ornare curabitur blandit tempus.', 'Nullam quis risus eget urna mollis ornare donec elit.'],
  ['Etiam porta sem malesuada magna mollis euismod.', 'Fermentum massa vivamus faucibus amet euismod.']
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
    time: 'À distance',
    location: 'n\'importe où',
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
    title: 'Artiste et animateur multimédia'
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

// eslint-disable-next-line import/no-anonymous-default-export
export default { jobList, jobMeta, requirements, responsiblities };
