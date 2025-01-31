import React from 'react';
import { Button, Container, ArrowrightIcon } from '@plone/components';
import { UniversalLink } from '@plone/volto/components';
import { isInternalURL } from '@plone/volto/helpers';
import { MaybeWrap } from '@plone/volto/components';
import PropTypes from 'prop-types';

const GridCTAView = (props) => {
  const { className, data, isEditMode } = props;
  const { title, head_title, description, label, href } = data;
  const url = href?.[0]?.['@id'] ? href[0]['@id'] : href;
  return (
    <Container className={`block gridCTA ${className}`}>
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

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
GridCTAView.propTypes = {
  title: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
GridCTAView.defaultProps = {};

export default GridCTAView;
