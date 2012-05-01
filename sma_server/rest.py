import cherrypy,  json
from orm import *

class PostResource(object):
    exposed = True
    
    @staticmethod
    def _export(post):
        return {
                     '_id': post.getId(), 
                     'title': post.title, 
                     'body': post.body, 
                     'created': post.created.strftime('%Y-%m-%dT%H:%M:%S'), 
                     }

    @staticmethod
    def _import(item):
        return Post(title=item ['title'],  body=item ['body'])

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def GET(self):
        return [[self._export(post)] for post in Post.getObjects()]
        
    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def PUT(self):
        posts = list(map(self._import,  cherrypy.request.json))
        for post in posts:
            post.save() 
        return [[self._export(post)] for post in posts]
