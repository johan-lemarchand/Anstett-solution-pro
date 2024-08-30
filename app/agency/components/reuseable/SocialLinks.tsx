import color from '@sandbox/utils/color';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  {
    id: 1,
    icon: 'uil uil-linkedin',
    url: 'https://www.linkedin.com/in/victor-anstett/',
  },
  {
    id: 2,
    icon: 'uil uil-linkedin green',
    url: 'https://www.linkedin.com/in/johan-lemarchand/',
  },
];

export default function SocialLinks({
  className = 'nav social social-white mt-4',
}: SocialLinksProps) {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
}
