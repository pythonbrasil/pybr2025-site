import React from 'react';
import { Container } from '@plone/components';
import FooterLinks from '@plonegovbr/volto-network-block/components/FooterLinks/FooterLinks';

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
        <br />
        <div className="footer-branding">
          Site feito com{' '}
          <span role="img" aria-label="love" style={{ color: 'red' }}>
            ❤️
          </span>{' '}
          pela comunidade PloneGov-BR
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
