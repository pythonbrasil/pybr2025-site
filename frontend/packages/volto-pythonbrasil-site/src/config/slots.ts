import type { ConfigType } from '@plone/registry';
import FollowUs from '../components/Footer/slots/FollowUs';
import Colophon from '../components/Footer/slots/Colophon';
import Empty from '../components/Footer/slots/Empty';
import Links from '../components/Footer/slots/Links';
import MainFooter from '../components/Footer/slots/MainFooter';

export default function install(config: ConfigType) {
  config.registerSlotComponent({
    name: 'MainFooter',
    slot: 'footer',
    component: MainFooter,
  });

  config.registerSlotComponent({
    name: 'Links',
    slot: 'mainFooter',
    component: Links,
  });

  config.registerSlotComponent({
    name: 'FooterFollowUs',
    slot: 'mainFooter',
    component: FollowUs,
  });

  config.registerSlotComponent({
    name: 'PostFooterFollowUsLogoAndLinks',
    slot: 'postFooter',
    component: Empty,
  });

  config.registerSlotComponent({
    name: 'Colophon',
    slot: 'postFooter',
    component: Colophon,
  });

  return config;
}
