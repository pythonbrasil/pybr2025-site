import { composeSchema } from '@plone/volto/helpers';
import { defaultStylingSchema } from '@kitconcept/volto-light-theme/components/Blocks/schema';

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
  };

  config.blocks.blocksConfig.image.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  config.blocks.blocksConfig.follow_us.schemaEnhancer =
    composeSchema(defaultStylingSchema);
  return config;
};

export default applyConfig;
