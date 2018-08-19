"""Custom template tags for vinoteca. Named 'vinoteca' so that is easy to differentiate included
django template tags from vinoteca ones.

Loaded with:
    {% load vinoteca %} """
from django import template

import vinoteca.utils


REGISTER = template.Library()


@REGISTER.filter(name="inttodate")
def int_to_date(value):
    """Implement a Django template version of int_to_date to move display of data logic from views
    to templates."""
    return vinoteca.utils.int_to_date(value)


@REGISTER.filter(name="defndash", safe=True)
def def_ndash(value):
    """Equivalent of |default_if_none:&ndash;"""
    return value if value else "–"
