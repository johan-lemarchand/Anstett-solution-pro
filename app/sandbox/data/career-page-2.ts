import Alarm from '@sandbox/icons/solid-mono/Alarm';
import Share from '@sandbox/icons/solid-mono/Share';
import Target from '@sandbox/icons/solid-mono/Target';
import Wallet from '@sandbox/icons/solid-mono/Wallet';
import VideoCall from '@sandbox/icons/solid-mono/VideoCall';
import PartnerShip from '@sandbox/icons/solid-mono/PartnerShip';

const facilities = [
  {
    id: 1,
    Icon: Target,
    title: 'Avancement professionnel',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`,
  },
  {
    id: 2,
    Icon: VideoCall,
    title: "Travailler n'importe où",
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`,
  },
  {
    id: 3,
    Icon: Wallet,
    title: 'Salaire Attractif',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`,
  },
  {
    id: 4,
    Icon: Alarm,
    title: 'Horaires flexibles',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`,
  },
];

const services = [
  {
    id: 1,
    Icon: Share,
    title: 'Nos missions',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.',
  },
  {
    id: 2,
    Icon: PartnerShip,
    title: 'Nos valeurs',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.',
  },
];

const designJobList = [
  {
    id: 1,
    link: '#',
    avatar: 'GD',
    time: 'Temps plein',
    avatarColor: 'bg-red',
    location: 'San Francisco, US',
    title: 'Graphiste senior',
  },
  {
    id: 2,
    link: '#',
    avatar: 'UX',
    time: 'Remote',
    location: "N'importe où",
    title: 'Concepteur UI/UX',
    avatarColor: 'bg-green',
  },
  {
    id: 3,
    link: '#',
    avatar: 'AN',
    time: 'Temps plein',
    avatarColor: 'bg-yellow',
    location: 'Birmingham, UK',
    title: 'Artiste et animateur multimédia',
  },
];

const developmentJobList = [
  {
    id: 1,
    link: '#',
    avatar: 'FD',
    time: 'Temps partiel',
    location: 'Sydney, AU',
    avatarColor: 'bg-purple',
    title: 'Développeur front-end',
  },
  {
    id: 2,
    link: '#',
    avatar: 'MD',
    time: 'Temps plein',
    avatarColor: 'bg-orange',
    title: 'Développeur mobile',
    location: 'San Francisco, US',
  },
  {
    id: 3,
    link: '#',
    avatar: 'NT',
    time: 'Temps plein',
    avatarColor: 'bg-pink',
    title: '.Développeur.NET',
    location: 'Manchester, UK',
  },
];

const positionOptions = [
  { id: 0, title: 'Position', value: '' },
  { id: 1, title: 'Design', value: 'design' },
  { id: 2, title: 'Finance', value: 'finance' },
  { id: 3, title: 'Business', value: 'business' },
  { id: 4, title: 'Marketing', value: 'marketing' },
  { id: 5, title: 'Development', value: 'development' },
  { id: 6, title: 'Engineering', value: 'engineering' },
];

const typeOptions = [
  { id: 0, title: 'Type', value: '' },
  { id: 1, title: 'Full-time', value: 'full-time' },
  { id: 2, title: 'Part-time', value: 'part-time' },
  { id: 3, title: 'Remote', value: 'remote' },
];

const locationOptions = [
  { id: 0, title: 'Location', value: '' },
  { id: 1, title: 'Chicago, US', value: 'chicago' },
  { id: 2, title: 'Michigan, US', value: 'michigan' },
  { id: 3, title: 'New York, US', value: 'new-york' },
  { id: 4, title: 'Los Angles, US', value: 'los-angles' },
  { id: 5, title: 'Moscow, Russia', value: 'Moscow' },
  { id: 6, title: 'Sydney, Australia', value: 'sydney' },
  { id: 7, title: 'Birmingham, UK', value: 'birmingham' },
  { id: 8, title: 'Manchester, UK', value: 'manchester' },
  { id: 9, title: 'Beijing, China', value: 'beijing' },
];

export default {
  services,
  facilities,
  typeOptions,
  designJobList,
  positionOptions,
  locationOptions,
  developmentJobList,
};
