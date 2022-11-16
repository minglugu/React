// Google img
// all img or data are downloaded from server to your local computer

// through protocols: such as https
// https is a protocols for fetching resources such as html doc/img...
// reference url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

// how/> API --> application program interface
// 1. XMLHttp Request API(core of AJAX: Asynchronous JavaScript and XML)
// 2. Fetch API (ES2015): return a promise (response to a request)
// 3. Axios (plug-in) based on http client which uses XMLHttpRequest internally

// Fetch can't be used in node.js
// node.js download node-fetch package
// fetch first parameter: url link for fetching and returning some data
// can omit window
// response 是形参 => response.json() 把形参处理后，以json的格式返回
// json() method of the response takes a response stream and reads it to completion
// it returns a promise which resolves with the result of parsing the body text as JSON
// use promise method and it is asynchronized, so 'hello, world!' will print it out first.
// line 22-25 是固定写法
window.fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        .finally(()=>window.alert('finished'))

console.log('hello, world!')

//sync and async 

// A promise has the following status:
// 1. pending: initial status, neither fulfilled nor rejected
// 2. fulfilled: the operation is completed successfully
// 3. rejected: operation failed
// 4. settled 