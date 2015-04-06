# afjlambert

http://afjlambert.github.io/


## Install

    npm install -g grunt-cli bower
    git clone https://github.com/afjlambert/afjlambert.github.io.git afjlambert
    cd afjlambert
    npm install
    bower install


## Build & development

Run `grunt` for building and `grunt serve` for preview.


## Deploy

    grunt build
    git add ... commit etc.
    git subtree push --prefix dist origin master


## Testing

Running `grunt test` will run the unit tests with karma.
