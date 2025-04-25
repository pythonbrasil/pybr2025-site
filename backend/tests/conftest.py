from pytest_plone import fixtures_factory
from pythonbrasil.site.testing import ACCEPTANCE_TESTING
from pythonbrasil.site.testing import FUNCTIONAL_TESTING
from pythonbrasil.site.testing import INTEGRATION_TESTING


pytest_plugins = ["pytest_plone"]


globals().update(
    fixtures_factory((
        (ACCEPTANCE_TESTING, "acceptance"),
        (FUNCTIONAL_TESTING, "functional"),
        (INTEGRATION_TESTING, "integration"),
    ))
)
