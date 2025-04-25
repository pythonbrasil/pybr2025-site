import type { ConfigType } from '@plone/registry';
import type { StyleDefinition } from '@plone/types';
import { composeSchema } from '@plone/volto/helpers/Extensions';
import { defaultStylingSchema } from '@kitconcept/volto-light-theme/components/Blocks/schema';

// Blocks
/// Teaser
import TeaserDefaultTemplate from '@plone/volto/components/manage/Blocks/Teaser/DefaultBody';

/// GridCTA
import GridCTAEdit from '@plonegovbr/volto-pythonbrasil-site/components/Blocks/GridCTA/Edit';
import GridCTAView from '@plonegovbr/volto-pythonbrasil-site/components/Blocks/GridCTA/View';
import { gridCTASchema } from '@plonegovbr/volto-pythonbrasil-site/components/Blocks/GridCTA/schema';
import gridCTASVG from '@plone/volto/icons/trophy.svg';

/// Chamada
import ChamadaEdit from '@plonegovbr/volto-pythonbrasil-site/components/Blocks/Chamada/Edit';
import ChamadaView from '@plonegovbr/volto-pythonbrasil-site/components/Blocks/Chamada/View';
import { chamadaSchema } from '@plonegovbr/volto-pythonbrasil-site/components/Blocks/Chamada/schema';
import chamadaSVG from '@plone/volto/icons/asterisk.svg';

declare module '@plone/types' {
  export interface BlocksConfigData {
    gridCTA: BlockConfigBase;
    chamadaBlock: BlockConfigBase;
  }
  export interface BlockConfigBase {
    themes?: StyleDefinition[];
    allowedBlocks?: string[];
    allowed_headline_tags?: string[][];
    dataAdapter?: any;
    unwantedButtons?: string[];
    imageScale?: string;
    allowed_headings?: string[][];
  }
}

function installBlocks(config: ConfigType) {
  config.blocks.blocksConfig.gridCTA = {
    id: 'gridCTA',
    title: 'Call to Action',
    group: 'common',
    category: 'chamada',
    blockSchema: gridCTASchema,
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
    category: 'chamada',
    blockSchema: chamadaSchema,
    icon: chamadaSVG,
    view: ChamadaView,
    edit: ChamadaEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  return config;
}

function installTeaserVariations(config: ConfigType) {
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
  return config;
}

function installBlockTheme(config: ConfigType) {
  // Palettes
  config.blocks.themes = [
    {
      style: {
        '--theme-color': 'transparent',
        '--theme-high-contrast-color': 'transparent',
        '--theme-foreground-color': '#000',
        '--theme-low-contrast-foreground-color': '#555555',
      },
      name: 'default',
      label: 'Default',
    },
    {
      style: {
        '--theme-color': '#3E3841',
        '--theme-high-contrast-color': '#3E3841',
        '--theme-foreground-color': '#F0F0F7',
        '--theme-low-contrast-foreground-color': '#F0F0F7',
      },
      name: 'grey',
      label: 'Cinza Escuro',
    },
    {
      style: {
        '--theme-color': '#E2001A',
        '--theme-high-contrast-color': '#E2001A',
        '--theme-foreground-color': '#fff',
        '--theme-low-contrast-foreground-color': '#fff',
      },
      name: 'red',
      label: 'Vermelho',
    },
  ];

  // Default block widths
  config.blocks.widths = [
    {
      style: {
        '--block-width': 'var(--narrow-container-width)',
      },
      name: 'narrow',
      label: 'Narrow',
    },
    {
      style: {
        '--block-width': 'var(--default-container-width)',
      },
      name: 'default',
      label: 'Default',
    },
    {
      style: {
        '--block-width': 'var(--layout-container-width)',
      },
      name: 'layout',
      label: 'Layout',
    },
    {
      style: {
        '--block-width': '100%',
      },
      name: 'full',
      label: 'Full Width',
    },
  ];
  config.blocks.blocksConfig.gridBlock.themes = config.blocks.themes;
  return config;
}

export default function install(config: ConfigType) {
  installBlocks(config);
  installBlockTheme(config);
  installTeaserVariations(config);
  config.blocks.blocksConfig.gridCTA.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.chamadaBlock.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.image.schemaEnhancer =
    composeSchema(defaultStylingSchema);

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
