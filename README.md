jQuery Cross Domain Requests
============================

### Utility
This is a very useful tool that allows to get the HTML code of any web page.

--------------

### How to use it
Download the Javascript files from "js" folder, and import them into your HTML file.
For getting the HTML code of your web page, you will add this script into your HTML file:
```javascript
//<script>
  $.ajax({
    url: 'http://google.com', // Or your web page link
    type: 'GET',
    success: function(res) {
      var headline = res.responseText;
      htmlCodeTextArea.value = headline;
    }
  });
//</ script>
```
### How it works
In short, this script uses YQL, which allows us to make cross-domain GET requests!

### Screenshot
![Screenshot](http://i48.tinypic.com/3007hfn.png)
