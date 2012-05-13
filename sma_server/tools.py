import cherrypy

def CORS(): 
  cherrypy.response.headers["Access-Control-Allow-Origin"] = "*"
  cherrypy.response.headers['Access-Control-Allow-Methods'] = "GET,PUT,POST,DELETE"
  cherrypy.response.headers['Access-Control-Allow-Headers'] = "Content-Type"
  #cherrypy.response.headers['Content-Type'] = "application/json; charset=utf-8"
  cherrypy.response.headers['Allow'] = "GET,PUT,POST,DELETE"

cherrypy.tools.CORS = cherrypy.Tool('before_handler', CORS) 
