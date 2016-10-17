first-server
============

### Run index.js test

node src/index.js

Open another console, then

mocha test/index-test.js
mocha test/adder-test.js

### Run index-square.js test

node src/index-square.js

Open another console, then

mocha test/index-square-test.js

### Asynchronous Test

https://github.com/javascript-me/first-server/blob/master/test/indexTest.js

### To DO

When the service is not up, there is an error when running test like this: 
```
Error: connect ECONNREFUSED 127.0.0.1:3333
    at Object.exports._errnoException (util.js:907:11)
    at exports._exceptionWithHostPort (util.js:930:20)
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1077:14)
```