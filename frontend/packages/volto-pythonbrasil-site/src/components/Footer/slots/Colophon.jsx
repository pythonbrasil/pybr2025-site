import React from 'react';
import { Container } from '@plone/components';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

const Colophon = () => {
  return (
    <Container className="branding">
      Site feito com{' '}
      <span role="img" aria-label="love" style={{ color: 'red' }}>
        ❤️
      </span>{' '}
      pela comunidade{' '}
      <UniversalLink
        className="plonegovbr"
        href={'https://plone.org.br/gov'}
        title={'Site da PloneGov-BR'}
      >
        PloneGov-BR
      </UniversalLink>
    </Container>
  );
};

export default Colophon;
