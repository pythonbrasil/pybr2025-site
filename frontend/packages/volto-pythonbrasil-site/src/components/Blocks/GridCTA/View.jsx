import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import GridCTAView from './DefaultView';

const GridCTABlockView = (props) => {
  const { data, isEditMode, className } = props;
  return (
    <GridCTAView data={data} isEditMode={isEditMode} className={className} />
  );
};

export default withBlockExtensions(GridCTABlockView);
