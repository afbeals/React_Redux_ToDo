var MySQL = require('./MySQL')

module.exports = function(app){
  app.get('/getAllUsers',function(req,res){
    console.log('aeae');
    MySQL.pool.getConnection(function(err,connection){
      if (err) {
        console.log({"code" : 100, "status" : "Error in connection database","err":err});
        return;
      }   

      console.log('connected as id ' + connection.threadId);
          
      connection.query("select * From city where Name = 'Kabul'",function(err,rows){
        connection.destroy(); 
        if(!err) {
           res.json(rows);

        }
               
      });

      connection.on('error', function(err) {      
        console.log({"code" : 100, "status" : "Error in connection database", "err":err});
        return;     
      });
    });
  })
}