# tcx-js
Javascript Library for [TCX Authentication Module](https://github.com/verzth/tcx), it use in client side to help make auth simpler.

### Dependencies
- [crypto-js](https://www.npmjs.com/package/crypto-js)
- [jquery](https://jquery.com/)
- [moment](http://momentjs.com)

### Installation
NPM
```
npm i @verzth/tcx-js
```
or
```
npm i --save @verzth/tcx-js
```

### How to Use:
1. Add script in your html, use tcx.min.js for minified version, or you can use tcx.bundle.js for minified version
   which was included cryptojs and moment, all our bundle (By verzth) doesn't include jquery, so you need to add your own script
   (Because jquery frequently used by developers).
   ```
   <script src="{file_path}/tcx.js"></script>
   ```

2. Initialize tcx object with params, it will use default value if you don't provide params.
   ```
   var tcx = new TCX({
    url : '',
    app_id : '',
    secret_key : '',
    public_key : '',
    auth : 'param', // available param, time and none.
    master_key : ''
   });
   ```
3. Available function:

   - getAppID() : string
   - getAppPass(object: Object) : string
   - getToken(callback)
   - getRefreshToken(callback)
   - clearToken()
   - getMasterToken() : string
   - getTime() : string // return tcx_datetime value, but you need to assign it to your parameter (assign it before call getAppPass!).
   - appendTime(object: Object) : object // return your parameter with tcx_datetime injected (assign it before call getAppPass!).

Note: This module not handle your http request, it just help you create the credentials.

TCX JS also provide service for Angular 7, available in this repository [@Angular TCX JS](https://github.com/verzth/tcx-js-angular)
