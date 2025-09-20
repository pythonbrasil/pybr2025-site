"""Init and utils."""

from zope.i18nmessageid import MessageFactory

import logging


__version__ = "20250920.1"

PACKAGE_NAME = "pythonbrasil.site"

_ = MessageFactory(PACKAGE_NAME)

logger = logging.getLogger(PACKAGE_NAME)


def run_patches():
    from pythonbrasil.site.patch import apply_patches

    apply_patches()


run_patches()
