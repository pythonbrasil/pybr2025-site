import TeaserDefaultTemplate from '@plone/volto/components/manage/Blocks/Teaser/DefaultBody';

const SimpleBodyTemplate = (props) => {
  let { className } = props;
  className = `${className} simpleTemplate`;
  return <TeaserDefaultTemplate {...props} className={className} />;
};

export default SimpleBodyTemplate;
