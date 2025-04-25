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
