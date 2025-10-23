import React from 'react';
import { Button, Container } from '@plone/components';
import { ArrowrightIcon } from '@plone/components/Icons';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';
import MaybeWrap from '@plone/volto/components/manage/MaybeWrap/MaybeWrap';

const GridCTAView = (props) => {
  const { className, data, isEditMode, style } = props;
  const { title, head_title, description, label, href } = data;
  const url = href?.[0]?.['@id'] ? href[0]['@id'] : href;
  return (
    <Container className={`block gridCTA ${className}`} style={style}>
      <Container className={'content'}>
        <div className={'head_title'}>{head_title}</div>
        <div className={'title'}>{title}</div>
        <p className={'description'}>{description}</p>
        <Container className={'cta'}>
          <MaybeWrap
            condition={!isEditMode}
            as={UniversalLink}
            href={url}
            target={
              data.openLinkInNewTab || !isInternalURL(url) ? '_blank' : null
            }
          >
            <Button className={'ctaButton'}>
              {label}
              <ArrowrightIcon size={'XL'} />
            </Button>
          </MaybeWrap>
        </Container>
      </Container>
    </Container>
  );
};

export default GridCTAView;
