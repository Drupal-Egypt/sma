from mompy import mompy as mompyorm

class DBObject(mompyorm.DBObject):
    def getId(self):
        return str(self["_id"])

class Post(DBObject):
    title = mompyorm.StringField(max_length=120, required=True)
    body = mompyorm.StringField()
