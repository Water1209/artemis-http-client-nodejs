# artemis-http-client
open8200 Artemis Http Client Nodejs SDK

[视频能力开放平台](https://open8200.hikvision.com/artemis/portal/index)

## Installation

```bash
$ npm install artemis-http-client
```

## Usage

Example:

```js
const co = require('co');
const {Client}  = require('artemis-http-client');

//new Client(appKey, appSecret)
const client = new Client('23967750', 'BZcz3VlqL1DVhWeF1boE');

//GET
co(function* () {
  var url = 'https://open8200.hikvision.com/artemis/api/artemis/v1/minus';

  var result = yield client.get(url, {
    query: {
      'a': 1,
      'b': 1
    },
    headers: {
      accept: 'application/json',
      'content-type':'text/plain;charset=UTF-8'
    }
  });

  console.log(JSON.stringify(result));

}).catch((error)=>{

  //请求错误信息
  console.log(JSON.stringify(error.message));

});

//POST
co(function* () {
  var url = 'https://open8200.hikvision.com/artemis/api/artemis/v1/plus';

  var result = yield client.post(url, {
    headers: {
      'content-type': "application/x-www-form-urlencoded;charset=UTF-8"
    },
    data: {
      'a': 1,
      'b': 1
    }
  });

  console.log(JSON.stringify(result));

}).catch((error)=>{

  //请求错误信息
  console.log(JSON.stringify(error.message));

});
```

## License

(The MIT License)