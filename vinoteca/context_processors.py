from vinoteca import __version__


def version_context(request):
    """Add vinoteca version to a request."""
    return {"version": __version__}
