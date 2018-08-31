var fs = require('fs');
var system = require('system')
var page = require('webpage').create();
var count = 0;
page.onConsoleMessage = function (msg) {
  console.log(msg);
};
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
    console.log(page.title);
    console.log("options" + options.length);
    count = options.length;
    if (!fs.exists('count.txt')) {
      fs.touch('count.txt');
    }
    fs.write('count.txt', count, 'w');
    phantom.exit()
  }, 5000);
});
