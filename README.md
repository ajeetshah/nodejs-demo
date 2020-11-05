# nodejs-chapter-1

- open source, cross browser, runtime environment
- executes javascript code on the server (outside of browser)
- build backend services i.e. APIs
- highly scalable, data intensive, and real time apps

- fewer lines, fewer files, fewer developers, more requests, faster response
- javascript everywhere
- clean, consistent, similar code on FE and BE
- latest ECMAScript standards
- many OS libraries
- asp.net, ruby

- browser (JS Engine + Objects + Browser code)
- nodejs (JS engine + Objects + C/C++ code)

- js is programming language
- nodejs is runtime
- express and nest, for example, are nodejs framework

- asynchronous / non blocking I/O
- synchronous / blocking I/O
- ideal for I/O intensive apps
- ideal for real time apps
- not for CPU intensive apps

- install nodejs
- print hello nodejs
- latest ECMAScript version

- window, document
- global, setTimeout, require
- module (private)
- module (public)
- module wrapper function

- built in modules
- http, fs, os, event, async, sync
- build a web server, routes

- event loop in javascript
- javascript : single threaded, non blocking, asynchronous, concurrent language
- javascript: call stack, event loop, callback queue, some other APIs and some other stuffs
- V8: call stack and heap
- V8: No (steTimeout, dom, xmlHTTPReques)
- browser: V8 (or other) + Web APIs (dom, ajax, setTimeout)
- nodejs: V8 + C/C++ APIs
- call stack: 1 thread = 1 call stack = 1 thing at a time

Agenda:

introduction
install nodejs
hello nodejs
node.js module system (commonJS module system) : module wrapper function
event loop
npm, yarn
creating a project
frameworks
