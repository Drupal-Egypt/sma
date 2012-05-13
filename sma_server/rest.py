import cherrypy,  json
from tools import *
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
    def _import(item,  post = None):
        if not post:
            post = Post()
        post.title = item ['title']
        post.body = item ['body']
        return post
        
    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    @cherrypy.tools.CORS()
    def GET(self,  *path, **params):
        if path:
            return self._export(Post.getObjects().findById(path[0]))
        else:
            if not 'view' in params or ('view' in params and params['view'] == 'all'):
                return [self._export(post) for post in Post.getObjects()]
            if 'view' in params  and params['view'] == 'recent':
                dt = datetime.datetime.strptime(params['datetime'],  '%Y-%m-%dT%H:%M:%S')
                return [self._export(post) for post in Post.getObjects().find(created ={"$gte": dt})]

        
    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    @cherrypy.tools.CORS()
    def POST(self):
        item = cherrypy.request.json
        post = self._import(item)
        post.save()
        return self._export(post)
        
    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    @cherrypy.tools.CORS()
    def PUT(self,  _id):
        item = cherrypy.request.json
        post = Post.getObjects().findById(_id)
        post = self._import(item,  post)
        post.save()
        return self._export(post)

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    @cherrypy.tools.CORS()
    def DELETE(self,  _id):
        post = Post.getObjects().findById(_id)
        post.save()
        post.delete()
        return [{'_id': _id}]

    @cherrypy.expose
    @cherrypy.tools.CORS()
    def OPTIONS(self):
        pass
        
