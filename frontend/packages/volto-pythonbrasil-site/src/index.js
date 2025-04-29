import installBlocks from './config/blocks';
import installSettings from './config/settings';
import installSlots from './config/slots';

const applyConfig = (config) => {
  installBlocks(config);
  installSettings(config);
  installSlots(config);
  return config;
};

export default applyConfig;
