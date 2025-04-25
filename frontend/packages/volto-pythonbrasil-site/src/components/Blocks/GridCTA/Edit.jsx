import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';

import GridCTABlockData from './Data';
import GridCTABlockView from './View';

const GridCTABlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const backgroundColor = data.styles?.backgroundColor;
  const className = backgroundColor
    ? `has--backgroundColor--${backgroundColor}`
    : '';
  return (
    <>
      <GridCTABlockView {...props} className={className} isEditMode />
      <SidebarPortal selected={selected}>
        <GridCTABlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(GridCTABlockEdit);
