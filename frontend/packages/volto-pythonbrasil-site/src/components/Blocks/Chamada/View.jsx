import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import ChamadaView from './DefaultView';

const ChamadaBlockView = (props) => {
  const { data, isEditMode, className } = props;
  return (
    <ChamadaView data={data} isEditMode={isEditMode} className={className} />
  );
};

export default withBlockExtensions(ChamadaBlockView);
