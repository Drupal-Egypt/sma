import cherrypy
from orm import *
from rest import *

connect('sma_db')

class Root(object):
    pass

root = Root()
root.post = PostResource()

conf = {
    'global': {
        'server.socket_host': '127.0.0.1',
        'server.socket_port': 9091,
    },
    '/': {
        'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
    }
}

cherrypy.quickstart(root, '/', conf)
