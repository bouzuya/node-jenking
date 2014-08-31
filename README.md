# jenking

Alive monitoring for Jenkins.

## Usage

    $ # clone repos
    $ git clone git://github.com/bouzuya/node-jenking.git jenking

    $ # change working directory
    $ cd jenking

    $ # create heroku app ( please install **heroku toolbelt**)
    $ heroku create

    $ # deploy heroku app
    $ git push heroku master

    $ heroku config:set JENKING_CALLBACK_URL='http://example.com/' # callback
    $ heroku config:set JENKING_TIMEOUT='60000' # timeout (ms)

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Dependencies status][david-dm-badge]][david-dm]

[david-dm]: https://david-dm.org/bouzuya/node-jenking
[david-dm-badge]: https://david-dm.org/bouzuya/node-jenking.png
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
