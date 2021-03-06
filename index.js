var fs = require('fs');
var system = require('system')
var page = require('webpage').create();
var count = 0;
var url = system.args[1]
page.open(url, function (status) {
  var submitForm = page.evaluate(function () {
    return document.getElementById('addItemToCart');
  });
  submitForm.submit();
  window.setTimeout(function() {
    var options = page.evaluate(function() {
      return document.getElementsByClassName("unit-quantity-form")[0].getElementsByTagName("option");
    });
    count = options.length;
    page.evaluate(function(count) {
      document.getElementsByName("quantity")[0].value = count;
      document.getElementsByClassName("unit-quantity-form")[0].submit();
    }, count);
    window.setTimeout(function() {
      count = page.evaluate(function() {
        return document.getElementsByClassName("unit-quantity-input")[0].value;
      });
      if (!fs.exists('count.txt')) {
        fs.touch('count.txt');
      }
      fs.write('count.txt', count, 'w');
      phantom.exit()
    }, 5000);
  }, 5000);
});
