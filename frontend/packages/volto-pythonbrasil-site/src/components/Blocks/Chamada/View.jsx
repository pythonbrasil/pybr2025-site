import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';
import ChamadaView from './DefaultView';

const ChamadaBlockView = (props) => {
  const { data, isEditMode, className, style } = props;
  return (
    <ChamadaView
      data={data}
      isEditMode={isEditMode}
      className={className}
      style={style}
    />
  );
};

export default withBlockExtensions(ChamadaBlockView);
