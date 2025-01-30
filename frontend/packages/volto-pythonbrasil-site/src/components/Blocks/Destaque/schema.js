import { defineMessages } from 'react-intl';
import { addStyling } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';

const messages = defineMessages({
  blockTitle: {
    id: 'Destaque Principal',
    defaultMessage: 'Destaque Principal',
  },
  head_title: {
    id: 'Chapéu',
    defaultMessage: 'Chapéu',
  },
  image: {
    id: 'Imagem',
    defaultMessage: 'Imagem',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  title: {
    id: 'Chamada',
    defaultMessage: 'Chamada',
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

export const destaqueSchema = (props) => {
  const { intl } = props;
  const schema = {
    title: props.intl.formatMessage(messages.blockTitle),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['head_title', 'title', 'description', 'preview_image'],
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
      preview_image: {
        title: props.intl.formatMessage(messages.image),
        widget: 'object_browser',
        mode: 'image',
        allowExternals: true,
        selectedItemAttrs: ['image_field', 'image_scales'],
      },
      label: {
        title: props.intl.formatMessage(messages.ctaLabel),
      },
      href: {
        title: props.intl.formatMessage(messages.ctaHref),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: [
          'Title',
          'head_title',
          'Description',
          'hasPreviewImage',
          'image_field',
          'image_scales',
          '@type',
        ],
        allowExternals: true,
      },
    },
    required: ['head_title', 'title', 'description', 'image', 'label', 'href'],
  };
  addStyling({ schema, intl });

  schema.properties.styles.schema.properties.align = {
    widget: 'align',
    title: intl.formatMessage(messages.align),
    actions: ['left', 'right', 'center'],
    default: 'left',
  };

  schema.properties.styles.schema.fieldsets[0].fields = ['align'];
  return schema;
};
