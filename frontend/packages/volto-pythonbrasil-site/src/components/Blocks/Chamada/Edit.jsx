import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';

import ChamadaBlockData from './Data';
import ChamadaBlockView from './View';

const ChamadaBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <ChamadaBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <ChamadaBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(ChamadaBlockEdit);
