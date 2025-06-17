from pathlib import Path
from plone import api
from Products.GenericSetup.tool import SetupTool
from pythonbrasil.site import logger
from pythonbrasil.site.setuphandlers.initial import create_example_content


BASE_PATH = Path(__file__).parent


def remove_pasta_patrocinio(setup_tool: SetupTool):
    """Remove a pasta /patrocine."""
    logger.info("Removendo a pasta /patrocine")
    pasta = api.content.get(path="/patrocine")
    api.content.delete(pasta, check_linkintegrity=False)
    logger.info("Pasta /patrocine removida")


def remove_pasta_agenda(setup_tool: SetupTool):
    """Remove a pasta /agenda."""
    logger.info("Removendo a pasta /agenda")
    pasta = api.content.get(path="/agenda")
    api.content.delete(pasta, check_linkintegrity=False)
    logger.info("Pasta /agenda removida")


def configura_techevent(setup_tool: SetupTool):
    """Configura techevent."""
    create_example_content(setup_tool)
    logger.info("Atualizando o conteúdo do site")
