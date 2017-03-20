
# jquery-cross-domain-requests

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/jquery-cross-domain-requests.svg)](https://www.npmjs.com/package/jquery-cross-domain-requests) [![Downloads](https://img.shields.io/npm/dt/jquery-cross-domain-requests.svg)](https://www.npmjs.com/package/jquery-cross-domain-requests)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2012#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
