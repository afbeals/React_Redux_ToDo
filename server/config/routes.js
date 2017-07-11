var MySQL = require('./MySQL')

module.exports = function(app){
  app.get('/getAllUsers',function(req,res){
    console.log('aeae');
    MySQL.pool.getConnection(function(err,connection){
      if (err) {
        console.log({"code" : 100, "status" : "Error in connection database"});
        return;
      }   

      console.log('connected as id ' + connection.threadId);
          
      connection.query("select * from users",function(err,rows){
        connection.release();
        if(!err) {
            console.log(rows);
        }           
      });

      connection.on('error', function(err) {      
        console.log({"code" : 100, "status" : "Error in connection database"});
        return;     
      });
    });
  })
}