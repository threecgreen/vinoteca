from django.shortcuts import render
import vinoteca


# Create your views here.
def graph(request):
    context = {
        "page_name": "Wine Graph",
        "version": vinoteca.VERSION
    }
    return render(request, "graph.html", context)
