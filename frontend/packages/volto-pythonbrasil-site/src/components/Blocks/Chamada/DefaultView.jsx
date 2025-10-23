import React from 'react';
import { Button, Container } from '@plone/components';
import { ArrowrightIcon } from '@plone/components/Icons';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';
import MaybeWrap from '@plone/volto/components/manage/MaybeWrap/MaybeWrap';
import config from '@plone/volto/registry';

const ChamadaView = (props) => {
  const Image = config.getComponent('Image').component;
  const { className, data, isEditMode, style } = props;
  const { title, head_title, description, preview_image, label, href } = data;
  const url = href?.[0]?.['@id'] ? href[0]['@id'] : href;
  const image = preview_image?.[0];
  return (
    <Container className={`block chamada ${className}`} style={style}>
      <Container className={'wrapper'}>
        <Container className={'picture'}>
          <Image
            item={image}
            imageField={image.image_field}
            alt=""
            loading="lazy"
            responsive={true}
          />
        </Container>
        <Container className={'content'}>
          <div className={'head_title'}>{head_title}</div>
          <div className={'title'}>{title}</div>
          <div className={'description'}>{description}</div>
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
    </Container>
  );
};

export default ChamadaView;
