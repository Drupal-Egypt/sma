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
    def _import(item,  post = Post()):
        post.title = item ['title']
        post.body = item ['body']
        return post
        
    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def GET(self,  _id =  None):
        if _id:
            return self._export(Post.getObjects().findById(_id))
        else:
            return [[self._export(post)] for post in Post.getObjects()]

        
    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def POST(self):
        item = cherrypy.request.json
        post = self._import(item)
        post.save()
        return self._export(post)
        
    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def PUT(self,  _id):
        item = cherrypy.request.json
        post = Post.getObjects().findById(_id)
        post = self._import(item,  post)
        post.save()
        return self._export(post)

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def DELETE(self,  _id):
        post = Post.getObjects().findById(_id)
        post.save()
        post.delete()
        return [{'_id': _id}]
