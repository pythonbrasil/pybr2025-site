import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import DestaqueBlockData from './Data';
import DestaqueBlockView from './View';

const DestaqueBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <DestaqueBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <DestaqueBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(DestaqueBlockEdit);
