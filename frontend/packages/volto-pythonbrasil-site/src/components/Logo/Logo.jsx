import { useIntl } from 'react-intl';
import messages from '@plonegovbr/volto-pythonbrasil-site/messages';
import Image from '@plone/volto/components/theme/Image/Image';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import LogoFullImage from './logo.svg';
import LogoDataImage from './logo-data.svg';

const LogoImg = ({ intl, logo }) => {
  return (
    <Image
      src={logo}
      height={'140px'}
      alt={intl.formatMessage(messages.site)}
      title={intl.formatMessage(messages.site)}
    />
  );
};

const Logo = ({ link, logoSize }) => {
  const intl = useIntl();
  const logo = logoSize === 'full' ? LogoFullImage : LogoDataImage;
  return link ? (
    <UniversalLink href={'/'} title={intl.formatMessage(messages.site)}>
      <LogoImg intl={intl} logo={logo} />
    </UniversalLink>
  ) : (
    <LogoImg intl={intl} logo={logo} />
  );
};

export default Logo;
