import { Container } from '@plone/components';
import MobileNavigation from '@kitconcept/volto-light-theme/components/MobileNavigation/MobileNavigation';
import cx from 'classnames';

import { Logo, Navigation } from '@plone/volto/components';

const Header = (props) => {
  const { pathname } = props;
  return (
    <header className={cx('header-wrapper')}>
      <Container layout className="header">
        <div className="logo-nav-wrapper">
          <div className="logo">
            <Logo link={true} />
          </div>
          <Navigation pathname={pathname} />
          <MobileNavigation pathname={pathname} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
