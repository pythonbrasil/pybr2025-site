import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import LogoFullImage from './logo.svg';
import LogoSlimImage from './logo-slim.svg';

const messages = defineMessages({
  site: {
    id: 'PythonBrasil 2025',
    defaultMessage: 'PythonBrasil 2025',
  },
  homepage: {
    id: 'Voltar para a capa',
    defaultMessage: 'Voltar para a capa',
  },
});

const LogoImg = ({ intl, logo }) => {
  return (
    <img
      src={logo}
      alt={intl.formatMessage(messages.site)}
      title={intl.formatMessage(messages.site)}
    />
  );
};

const Logo = ({ link, logoSize }) => {
  const intl = useIntl();
  const logo = logoSize === 'full' ? LogoFullImage : LogoSlimImage;
  return link ? (
    <UniversalLink href={'/'} title={intl.formatMessage(messages.site)}>
      <LogoImg intl={intl} logo={logo} />
    </UniversalLink>
  ) : (
    <LogoImg intl={intl} logo={logo} />
  );
};

export default Logo;
