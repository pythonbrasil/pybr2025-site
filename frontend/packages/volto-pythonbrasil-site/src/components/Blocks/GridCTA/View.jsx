import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';
import GridCTAView from './DefaultView';

const GridCTABlockView = (props) => {
  const { data, isEditMode, className, style } = props;
  return (
    <GridCTAView
      data={data}
      isEditMode={isEditMode}
      className={className}
      style={style}
    />
  );
};

export default withBlockExtensions(GridCTABlockView);
