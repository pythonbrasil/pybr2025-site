import { composeSchema } from '@plone/volto/helpers';
import { defaultStylingSchema } from '@kitconcept/volto-light-theme/components/Blocks/schema';

// Blocks
/// Teaser
import TeaserDefaultTemplate from '@plone/volto/components/manage/Blocks/Teaser/DefaultBody';

/// GridCTA
import GridCTAEdit from 'volto-pythonbrasil-site/components/Blocks/GridCTA/Edit';
import GridCTAView from 'volto-pythonbrasil-site/components/Blocks/GridCTA/View';
import gridCTASVG from '@plone/volto/icons/trophy.svg';

/// Chamada
import ChamadaEdit from 'volto-pythonbrasil-site/components/Blocks/Chamada/Edit';
import ChamadaView from 'volto-pythonbrasil-site/components/Blocks/Chamada/View';
import chamadaSVG from '@plone/volto/icons/asterisk.svg';

const BG_COLORS = [
  { name: 'transparent', label: 'Transparent' },
  { name: 'grey', label: 'Cinza Escuro' },
  { name: 'mainColor', label: 'Vermelho' },
];

export default function install(config) {
  config.blocks.blocksConfig.gridCTA = {
    id: 'gridCTA',
    title: 'Call to Action',
    group: 'common',
    icon: gridCTASVG,
    view: GridCTAView,
    edit: GridCTAEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.chamadaBlock = {
    id: 'chamadaBlock',
    title: 'Chamada',
    group: 'common',
    icon: chamadaSVG,
    view: ChamadaView,
    edit: ChamadaEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  const teaserVariations = [
    {
      id: 'default',
      isDefault: true,
      title: 'Default',
      template: TeaserDefaultTemplate,
    },
  ];
  config.blocks.blocksConfig.teaser = {
    ...config.blocks.blocksConfig.teaser,
    variations: teaserVariations,
  };
  config.blocks.blocksConfig.gridBlock.blocksConfig.teaser = {
    ...config.blocks.blocksConfig.gridBlock.blocksConfig.teaser,
    variations: teaserVariations,
  };

  config.blocks.blocksConfig.gridCTA.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.chamadaBlock.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.image.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.follow_us.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.quote.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.testimonials.schemaEnhancer =
    composeSchema(defaultStylingSchema);

  Object.keys(config.blocks.blocksConfig).forEach((blockId) => {
    config.blocks.blocksConfig[blockId].colors = BG_COLORS;
  });

  config.blocks.blocksConfig.gridBlock = {
    ...config.blocks.blocksConfig.gridBlock,
    blocksConfig: {
      ...config.blocks.blocksConfig,
    },
    allowedBlocks: [
      ...config.blocks.blocksConfig.gridBlock.allowedBlocks,
      'quote',
      'testimonials',
      '__button',
      'gridCTA',
    ],
  };
  return config;
}
