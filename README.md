# jquery-cross-domain-requests [![Support this project][donate-now]][paypal-donations]

Make cross domain requests using jQuery and YQL.

## Live preview

Before start to use it, maybe you want see it working. If you want this, choose one of the following suggestions:

 - [Index1.html](http://htmlpreview.github.com/?https://raw.github.com/IonicaBizau/jQuery-cross-domain-requests/master/index1.html): Only the basic part. It gets the Google.com HTML code.
 - [Index2.html](http://htmlpreview.github.com/?https://raw.github.com/IonicaBizau/jQuery-cross-domain-requests/master/index2.html): The basic part, but you can input an URL where you want to make the request.
 - [Index3.html](http://htmlpreview.github.com/?https://raw.github.com/IonicaBizau/jQuery-cross-domain-requests/master/index3.html): This contains nice CSS styles: border, shadow, and more.

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

[![jquery-cross-domain-requests](http://i48.tinypic.com/3007hfn.png)](http://htmlpreview.github.com/?https://raw.github.com/IonicaBizau/jQuery-cross-domain-requests/master/index3.html)

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2012#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md