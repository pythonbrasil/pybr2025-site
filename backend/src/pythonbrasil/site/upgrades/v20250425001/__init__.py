from plone import api
from Products.GenericSetup.tool import SetupTool
from pythonbrasil.site import logger
from uuid import uuid4


REDES = [
    {
        "@id": f"{uuid4()}",
        "id": "mastodon",
        "title": "Mastodon",
        "href": [{"@id": "https://pynews.com.br/@pythonbrasil", "title": "Mastodon"}],
    },
    {
        "@id": f"{uuid4()}",
        "id": "x",
        "title": "X",
        "href": [{"@id": "https://x.com/pythonbrasil/", "title": "X"}],
    },
    {
        "@id": f"{uuid4()}",
        "id": "instagram",
        "title": "Instagram",
        "href": [{"@id": "https://instagram.com/pythonbrasil/", "title": "Instagram"}],
    },
    {
        "@id": f"{uuid4()}",
        "id": "bluesky",
        "title": "BlueSky",
        "href": [
            {
                "@id": "https://bsky.app/profile/pythonbrasil.bsky.social",
                "title": "BlueSky",
            }
        ],
    },
    {
        "@id": f"{uuid4()}",
        "id": "linkedin",
        "title": "LinkedIn APyB",
        "href": [
            {"@id": "https://www.linkedin.com/company/apyb/", "title": "LinkedIn APyB"}
        ],
    },
    {
        "@id": f"{uuid4()}",
        "id": "youtube",
        "title": "YouTube",
        "href": [
            {"@id": "https://www.youtube.com/c/pythonbrasiloficial", "title": "YouTube"}
        ],
    },
]

LINKS = [
    {
        "@id": "60e04d84-fc3c-4dee-b548-73099515a1af",
        "href": [
            {
                "@id": "resolveuid/f17ec2cb79cf4a75896ce3a6b5bc8f54",
                "@type": "Document",
                "Title": "Fale Conosco",
                "title": "Fale Conosco",
            }
        ],
        "title": "Fale Conosco",
    },
    {
        "@id": "bb7628e1-dba5-44e2-aef0-c7f4dbf7804b",
        "href": [
            {
                "@id": "resolveuid/24689ede20f346c09ce7d50b68ff893b",
                "@type": "Document",
                "Title": "Perguntas Frequentes",
                "title": "Perguntas Frequentes",
            }
        ],
        "title": "Perguntas Frequentes",
    },
    {
        "@id": "72160063-6d39-42a0-a03c-0dc0621d5bf7",
        "href": [
            {
                "@id": "resolveuid/52e0e3e2d1564eca97eb22eae2fbebbf",
                "@type": "Document",
                "Title": "Código de Conduta",
                "title": "Código de Conduta",
            }
        ],
        "title": "Código de Conduta",
    },
]


def instala_dependencias(setup_tool: SetupTool):
    """Instala plonegovbr.socialmedia."""
    profile = "default"
    for package in ("plonegovbr.socialmedia", "collective.volto.formsupport"):
        profile_id = f"profile-{package}:{profile}"
        setup_tool.runAllImportStepsFromProfile(profile_id)
        logger.info(f"Instalado complemento {package}")


def configura_redes_sociais(setup_tool: SetupTool):
    """Configura as redes sociais que usaremos."""
    portal = api.portal.get()
    portal.social_links = REDES
    logger.info("Adicionadas as redes sociais")


def configura_links(setup_tool: SetupTool):
    """Configura links de rodapé."""
    portal = api.portal.get()
    portal.footer_links = LINKS
    logger.info("Adicionados os links de rodapé")
