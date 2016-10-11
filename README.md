
# jquery-cross-domain-requests

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/jquery-cross-domain-requests.svg)](https://www.npmjs.com/package/jquery-cross-domain-requests) [![Downloads](https://img.shields.io/npm/dt/jquery-cross-domain-requests.svg)](https://www.npmjs.com/package/jquery-cross-domain-requests) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Make cross domain requests using jQuery and YQL.

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

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2012#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
