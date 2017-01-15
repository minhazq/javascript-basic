module.exports = (function(){

        var instance;

        function init(){

          // All my private method
          var number = Math.random();

          return{
            //All my public method

            getHashCode: function(){
              return number+5;
            }

          };
      };

      return{

        getInstance: function(){
          if(!instance){
            instance = new init();
          }
          return instance;
        }

      };
})();

//Call the following code from a different file
//var person = require('./cal');

//var p1 = person.getInstance();
//var p2 = person.getInstance();

//console.log(p1.getHashCode());
//console.log(p2.getHashCode());
