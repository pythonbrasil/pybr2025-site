import messages from '@plonegovbr/volto-pythonbrasil-site/messages';

export const gridCTASchema = (props) => {
  const schema = {
    title: props.intl.formatMessage(messages.blockGridCTA),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['head_title', 'title', 'description'],
      },
      {
        id: 'cta',
        title: 'Ação',
        fields: ['label', 'href'],
      },
    ],
    properties: {
      title: {
        title: props.intl.formatMessage(messages.title),
      },
      head_title: {
        title: props.intl.formatMessage(messages.head_title),
      },
      description: {
        title: props.intl.formatMessage(messages.description),
        widget: 'textarea',
      },
      label: {
        title: props.intl.formatMessage(messages.ctaLabel),
      },
      href: {
        title: props.intl.formatMessage(messages.ctaHref),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: ['Title', 'head_title', 'Description', '@type'],
        allowExternals: true,
      },
    },
    required: ['head_title', 'title', 'description', 'image', 'label', 'href'],
  };

  return schema;
};
