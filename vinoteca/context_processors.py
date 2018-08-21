r"""Add additional data to the global context for Django templates."""
# pylint: disable=unused-argument
from vinoteca import __version__


def version_context(request):
    r"""Add vinoteca version to a request."""
    return {"version": __version__}
