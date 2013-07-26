var Assertions = require('unit-test').Assertions;

module.exports = {
   'setUp':    function() { /* do something */ },
   'tearDown': function() { /* do something */ },

   'testCheck whether something is false': function() {
      Assertions.assertEquals(!1, false);
   },
   'testCheck whether something is false with a name': function() {
      Assertions.assertEquals("Checking something is false", !1, false);
   }
};