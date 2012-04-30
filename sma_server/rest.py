import cherrypy
import json
from orm import *

class PostResource(object):
    exposed = True
    
    @staticmethod
    def export(post):
        return {
                     '_id': post.getId(), 
                     'title': post.title, 
                     'body': post.body
                     }

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def GET(self):
        ret = []
        for post in Post.getObjects():
            ret += [self.export(post)]
        return ret

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def PUT(self):
        content = cherrypy.request.json
        post = Post(title=content ['title'])
        post.body = content ['body']
        post.save()
        return [self.export(post)]
