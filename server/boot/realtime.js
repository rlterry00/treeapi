var es = require('event-stream');
module.exports = function(app) {
  var MyModel = app.models.branches;
  MyModel.createChangeStream(function(err, changes) {
    changes.pipe(es.stringify()).pipe(process.stdout);
  });
  
}