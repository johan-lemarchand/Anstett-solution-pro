import { ReactElement } from 'react';
// GLOBAL CUSTOM COMPONENTS
import NextLink from '@sandbox/components/reuseable/links/NextLink';
import SocialLinks from '@sandbox/components/reuseable/SocialLinks';

// ========================================================
type InfoProps = {
  title?: string;
  phone?: string;
  description?: string;
  address?: string | ReactElement;
};
// ========================================================

export default function Info({
  address,
  title = 'Anstett Solutions Pro',
  phone = '06 42 18 55 95',
  description = `Anstett Solutions Pro est un modèle HTML5 polyvalent avec différentes mises en page qui sera une excellente solution pour votre entreprise.`,
}: InfoProps) {
  const otherPages = [
    { title: 'Our Story', url: '#' },
    { title: 'Terms of Use', url: '#' },
    { title: 'Privacy Policy', url: '#' },
    { title: 'Contactez-nous', url: '#' },
  ];

  return (
    <div
      className="offcanvas offcanvas-end text-inverse"
      id="offcanvas-info"
      data-bs-scroll="true"
    >
      <div className="offcanvas-header">
        <h3 className="text-white fs-30 mb-0">{title}</h3>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>

      <div className="offcanvas-body pb-6">
        <div className="widget mb-8">
          <p>{description}</p>
        </div>

        <div className="widget mb-8">
          <h4 className="widget-title text-white mb-3">
            Information de contact
          </h4>
          {address ? (
            <address>{address}</address>
          ) : (
            <address>
              26E rue de Kaltenhouse <br /> 67240 Oberhoffen-Sur-Moder
            </address>
          )}
          <NextLink
            title="anstett.solutions.pro@gmail.com"
            className="link-inverse"
            href="mailto:anstett.solutions.pro@gmail.com"
          />
          <br />
          <NextLink href="tel:0123456789" title={phone!} />
        </div>

        <div className="widget mb-8">
          <h4 className="widget-title text-white mb-3">En savoir plus</h4>
          <ul className="list-unstyled">
            {otherPages.map(item => (
              <li key={item.title}>
                <NextLink href="#" title={item.title} />
              </li>
            ))}
          </ul>
        </div>

        <div className="widget">
          <h4 className="widget-title text-white mb-3">Suivez-nous</h4>
          <SocialLinks className="nav social social-white" />
        </div>
      </div>
    </div>
  );
}
