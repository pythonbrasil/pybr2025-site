from copy import deepcopy
from datetime import timedelta
from dateutil.parser import parse
from pythonbrasil.site import logger


def patch_process_trainings():
    from collective.techevent.services.schedule import get

    def process_trainings(slots: list[dict]) -> list[dict]:
        """Break whole day training sessions as 2 slots."""
        slot_limit = 14400  # 4 hours
        lunch_break = 60 * 60 * 1  # 1 hour lunch break
        response = []
        for slot in slots:
            raw_start = slot["start"]
            raw_end = slot["end"]
            if slot.get("@type") != "Training" or not (raw_start and raw_end):
                response.append(slot)
                continue
            start = parse(raw_start)
            end = parse(raw_end)
            if (total_duration := (end - start).seconds) > slot_limit:
                # change the first slot end
                slot_end = start + timedelta(seconds=slot_limit)
                slot["end"] = slot_end.isoformat()
                response.append(slot)
                slot = deepcopy(slot)
                # change the second slot start
                new_start = slot_end + timedelta(seconds=lunch_break)
                slot["start"] = new_start.isoformat()
                slot_end = new_start + timedelta(seconds=(total_duration - slot_limit))
                slot["end"] = slot_end.isoformat()
                response.append(slot)
            else:
                response.append(slot)
        return response

    # Make a reference the original function
    get._original_process_trainings = get.process_trainings
    # Replace the original function with the patched one
    get.process_trainings = process_trainings
    logger.info("Patched collective.techevent.services.schedule.get.process_trainings")


def apply_patches():
    patch_process_trainings()
    logger.info("All patches applied.")
