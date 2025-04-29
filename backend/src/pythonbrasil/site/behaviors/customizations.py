from plone.autoform import directives
from plone.autoform.interfaces import IFormFieldProvider
from plone.schema import JSONField
from plone.supermodel import model
from pythonbrasil.site import _
from zope.interface import provider

import json


OBJECT_LIST_DEFAULT_VALUE = []

OBJECT_LIST = json.dumps({
    "type": "array",
    "items": {
        "type": "object",
    },
})


@provider(IFormFieldProvider)
class ISiteFooterCustomizationSettings(model.Schema):
    """Site/Subsite footer properties behavior."""

    model.fieldset(
        "footer",
        label=_("Rodapé"),
        fields=[
            "footer_links",
        ],
    )

    directives.widget(
        "footer_links",
        frontendOptions={
            "widget": "object_list",
            "widgetProps": {"schemaName": "footerLinks"},
        },
    )
    footer_links = JSONField(
        title=_("Links"),
        schema=OBJECT_LIST,
        default=OBJECT_LIST_DEFAULT_VALUE,
        required=False,
        widget="",
    )
