import React from 'react';
import { Container } from '@plone/components';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { flattenToAppURL } from '@plone/volto/helpers';
import FooterLinks from '@plonegovbr/volto-social-media/components/FooterLinks/FooterLinks';

const siteActions = [
  { id: 'contact', title: 'Fale Conosco', url: '/evento/contato' },
  {
    id: 'faq',
    title: 'Perguntas Frequentes',
    url: '/evento/perguntas-frequentes',
  },
  {
    id: 'code-of-conduct',
    title: 'Código de Conduta',
    url: '/evento/codigo-de-conduta',
  },
];

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
  return (
    <footer id="footer">
      <Container layout className="footer">
        <FooterLinks />
        <ul>
          {siteActions?.length
            ? siteActions.map((item) => {
                return (
                  <li className="item" key={item.id}>
                    <UniversalLink
                      className="item"
                      href={flattenToAppURL(item.url)}
                    >
                      {item?.title}
                    </UniversalLink>
                  </li>
                );
              })
            : null}
        </ul>
      </Container>
      <Container className="footer-branding">
        Site feito com{' '}
        <span role="img" aria-label="love" style={{ color: 'red' }}>
          ❤️
        </span>{' '}
        pela comunidade{' '}
        <UniversalLink className="plonegovbr" href={'https://plone.org.br/gov'}>
          PloneGov-BR
        </UniversalLink>
      </Container>
    </footer>
  );
};

export default Footer;
