import { useIntl } from 'react-intl';
import messages from '@plonegovbr/volto-pythonbrasil-site/messages';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import LogoFullImage from './logo.svg';
import LogoSlimImage from './logo-slim.svg';

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
