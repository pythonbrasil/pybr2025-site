from plone import api


def sponsor_levels(context):
    items = []
    navroot = api.portal.get_navigation_root(context)
    brains = api.content.find(navroot, portal_type="SponsorsDB")
    if brains:
        sponsors_db = brains[0].getObject()
        brains = api.content.find(
            sponsors_db, portal_type="SponsorLevel", sort_on="getObjPositionInParent"
        )
        for brain in brains:
            level_id = brain.getId
            level_title = brain.Title
            level_url = brain.getURL()
            # HACK
            display_frontpage = level_id not in ("supporting", "oss")
            items.append((level_id, level_title, level_url, display_frontpage))
    return items
