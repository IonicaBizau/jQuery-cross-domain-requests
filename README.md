jQuery Cross Domain Requests
============================
### Utility
This is a very useful tool that allows to get the HTML code of any web page.


### Live preview
Before start to use it, maybe you want see it working. If you want this, choose one of the following suggestions:

 * <a target="_blank" href="http://htmlpreview.github.com/?https://raw.github.com/IonicaBizau/jQuery-cross-domain-requests/master/index1.html">Index1.html</a> Only the basic part. It gets the Google.com HTML code.  <b>It's reccomended to start here your tour.<b>
 * <a target="_blank" href="http://htmlpreview.github.com/?https://raw.github.com/IonicaBizau/jQuery-cross-domain-requests/master/index2.html">Index2.html</a> The basic part, but you can input an URL where you want to make the request.
 * <a target="_blank" href="http://htmlpreview.github.com/?https://raw.github.com/IonicaBizau/jQuery-cross-domain-requests/master/index3.html">Index3.html</a> This contains nice CSS styles: border, shadow, and more.


### How to use it
Download the Javascript files from `js` folder, and import them into your HTML file.

For getting the HTML code of your web page, you will just call:
```js
  $.ajax({
    url: 'http://google.com', // Or your web page link
    type: 'GET',
    success: function(res) {
      var headline = res.responseText;
      htmlCodeTextArea.value = headline;
    }
  });
```


### How it works
This application uses YQL, which allows us to make cross-domain GET requests!

------
### Screenshoot
<a href="http://htmlpreview.github.com/?https://raw.github.com/IonicaBizau/jQuery-cross-domain-requests/master/index3.html"><img src="http://i48.tinypic.com/3007hfn.png"></a>
