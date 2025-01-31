import { defineMessages } from 'react-intl';

const messages = defineMessages({
  blockTitle: {
    id: 'Call to Action',
    defaultMessage: 'Call to Action',
  },
  head_title: {
    id: 'Chapéu',
    defaultMessage: 'Chapéu',
  },
  title: {
    id: 'Título',
    defaultMessage: 'Título',
  },
  description: {
    id: 'Sumário',
    defaultMessage: 'Sumário',
  },
  ctaLabel: {
    id: 'Texto CTA',
    defaultMessage: 'Texto CTA',
  },
  ctaHref: {
    id: 'URL',
    defaultMessage: 'URL',
  },
});

export const gridCTASchema = (props) => {
  const schema = {
    title: props.intl.formatMessage(messages.blockTitle),
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
