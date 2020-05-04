from wagtail_personalisation.adapters import get_segment_adapter
from django.utils.deprecation import MiddlewareMixin
from consoler import console  # NOQA


class YourDataMiddleware(MiddlewareMixin):

    """Adds segmentation data to the context.
    """

    def process_template_response(self, request, response):
        try:
            adapter = get_segment_adapter(request)
            user_segments = adapter.get_segments()

            if user_segments:
                page = response.context_data['page']
                metadata = page.personalisation_metadata
                metadata = metadata.metadata_for_segments(user_segments)
                if metadata:
                    chosen_segment = metadata.first().segment
                    response.context_data.update({'chosen_segment': chosen_segment})
        except Exception as e:
            pass

        return response
