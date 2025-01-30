import { composeSchema } from '@plone/volto/helpers';
import { defaultStylingSchema } from '@kitconcept/volto-light-theme/components/Blocks/schema';

// Blocks
/// Teaser
import TeaserDefaultTemplate from '@plone/volto/components/manage/Blocks/Teaser/DefaultBody';

/// Destaque
import DestaqueEdit from 'volto-pythonbrasil-site/components/Blocks/Destaque/Edit';
import DestaqueView from 'volto-pythonbrasil-site/components/Blocks/Destaque/View';
import destaqueSVG from '@plone/volto/icons/camera.svg';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    siteLabel: 'PythonBrasil 2025',
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
    navDepth: 3,
    image_crop_aspect_ratios: [
      {
        label: '16:9',
        ratio: 16 / 9,
      },
      {
        label: '4:3',
        ratio: 4 / 3,
      },
      {
        label: '1:1',
        ratio: 1,
      },
    ],
    pictureOptions: {
      grid: [
        { media: '(min-width: 768px)', image: 'teaser' },
        { media: '(max-width: 767px)', image: 'large' },
      ],
      mainimage: [
        { media: '(min-width: 768px)', image: 'huge' },
        { media: '(max-width: 767px)', image: 'large' },
      ],
      teaser2columns: [
        { media: '(min-width: 768px)', image: 'larger' },
        { media: '(max-width: 767px)', image: 'large' },
      ],
      newsitem: [
        { media: '(min-width: 1200px)', image: 'larger' },
        { media: '(min-width: 992px) and (max-width: 1199px)', image: 'large' },
        { media: '(max-width: 991px)', image: 'teaser' },
      ],
    },
  };

  config.blocks.blocksConfig.destaqueBlock = {
    id: 'destaqueBlock',
    title: 'Destaque',
    group: 'common',
    icon: destaqueSVG,
    view: DestaqueView,
    edit: DestaqueEdit,
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

  config.blocks.blocksConfig.destaqueBlock.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.image.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.follow_us.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.quote.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.testimonials.schemaEnhancer =
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
    ],
  };

  return config;
};

export default applyConfig;
