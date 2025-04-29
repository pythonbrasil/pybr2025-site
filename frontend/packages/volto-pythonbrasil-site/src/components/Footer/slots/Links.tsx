import React from 'react';
import isEmpty from 'lodash/isEmpty';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { useLiveData } from '@kitconcept/volto-light-theme/helpers/useLiveData';
import type { SiteFooterSettings } from '@kitconcept/volto-light-theme/types';
import { Container } from '@plone/components';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import type { Content } from '@plone/types';

const Links = ({ content }: { content: Content }) => {
  const links = useLiveData<SiteFooterSettings['footer_links']>(
    content,
    'pythonbrasil.footer',
    'footer_links',
  );
  return (
    <Container className={'links'}>
      <ul>
        {links && Array.isArray(links)
          ? links.map((link) => {
              if (isEmpty(link) || !link.href) return null;

              const title = link.title || link.href[0]['title'];
              const href = flattenToAppURL(link.href[0]?.['@id']);

              if (!href) return null;

              return (
                <li className="item" key={href}>
                  <UniversalLink
                    href={href}
                    openLinkInNewTab={link.openInNewTab}
                  >
                    {title}
                  </UniversalLink>
                </li>
              );
            })
          : null}
      </ul>
    </Container>
  );
};

export default Links;
