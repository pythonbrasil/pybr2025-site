import React from 'react';
import { Button, Container, ArrowrightIcon } from '@plone/components';
import { UniversalLink } from '@plone/volto/components';
import { isInternalURL } from '@plone/volto/helpers';
import { MaybeWrap } from '@plone/volto/components';
import config from '@plone/volto/registry';
import PropTypes from 'prop-types';

const DestaqueView = (props) => {
  const Image = config.getComponent('Image').component;
  const { className, data, isEditMode } = props;
  const { title, head_title, description, preview_image, label, href } = data;
  const url = href?.[0]?.['@id'] ? href[0]['@id'] : href;
  const image = preview_image?.[0];
  return (
    <Container className={`block destaque ${className}`}>
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

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
DestaqueView.propTypes = {
  title: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
DestaqueView.defaultProps = {
  title: 'Hello World!',
};

export default DestaqueView;
