from mompy.mompy import *

class BaseObject(DBObject):
    def __init__(self, *args,**kw):
        if args:
            args[0].update(dict(list(self._default().items()) + list(args[0].items())))
        else:
            if kw:
                kw = dict(list(self._default().items()) + list(kw.items()))
            else:
                kw = self._default()
        DBObject.__init__(self,*args,**kw)

    def getId(self):
        return str(self["_id"])

    @staticmethod
    def _default():
        return {}

class Post(BaseObject):
    title = StringField(max_length=120, required=True)
    body = StringField()
    created = DatetimeField()

    @staticmethod
    def _default():
        return {
                'title': '', 
                'body': '', 
                'created':  datetime.datetime.now(), 
                }
