// backbone-mongodb 0.1.0
//
// (c) 2013 Vadim Mirgorod
// Licensed under the MIT license.

(function(e){var t={parse:function(e,t){return _.isObject(e._id)&&(e[this.idAttribute]=e._id.$oid,delete e._id),e},toExtendedJSON:function(){var e=this.attributes,e=_.omit(e,this.idAttribute);return _.isUndefined(this[this.idAttribute])||(e._id={$oid:this[this.idAttribute]}),e},sync:function(){var t=this.toJSON;this.toJSON=this.toExtendedJSON;var n=e.sync.apply(this,arguments);return this.toJSON=t,n}};e.MongoModel=e.Model.extend(t),e.MongoModel.mixin=t}).call(this,Backbone);