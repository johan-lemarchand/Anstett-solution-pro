import Code from 'app/sandbox/icons/solid-mono/Code';
import Team from 'app/sandbox/icons/solid-mono/Team';
import Bulb from 'app/sandbox/icons/solid-mono/Bulb';
import Lamp from 'app/sandbox/icons/solid-mono/Lamp';
import Puzzle from 'app/sandbox/icons/solid-mono/Puzzle';
import Devices from 'app/sandbox/icons/solid-mono/Devices';
import GlobeTwo from 'app/sandbox/icons/solid-mono/GlobeTwo';
import Headphone from 'app/sandbox/icons/solid-mono/Headphone';

const serviceList = [
  {
    id: 1,
    url: '#',
    Icon: GlobeTwo,
    title: 'Services de référencement',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`,
  },
  {
    id: 2,
    url: '#',
    Icon: Code,
    title: 'Web Design',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`,
  },
  {
    id: 3,
    url: '#',
    Icon: Team,
    title: 'Engagement sociétal',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`,
  },
  {
    id: 4,
    url: '#',
    Icon: Devices,
    title: "Développement d'applications",
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`,
  },
];

const abouts = [
  {
    id: 1,
    Icon: Lamp,
    title: 'Créativité',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.',
  },
  {
    id: 2,
    Icon: Bulb,
    title: 'Idées novatrices',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.',
  },
  {
    id: 3,
    Icon: Puzzle,
    title: 'Solutions rapides',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.',
  },
  {
    id: 4,
    Icon: Headphone,
    title: 'Assistance de premier ordre',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.',
  },
];

const testimonialList = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Analyste financier',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`,
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Spécialiste en marketing',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`,
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    designation: 'Spécialiste des ventes',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`,
  },
];

export default { serviceList, abouts, testimonialList };
