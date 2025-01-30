import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import DestaqueView from './DefaultView';

const DestaqueBlockView = (props) => {
  const { data, isEditMode, className } = props;
  return (
    <DestaqueView data={data} isEditMode={isEditMode} className={className} />
  );
};

export default withBlockExtensions(DestaqueBlockView);
