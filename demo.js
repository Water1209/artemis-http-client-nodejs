'use strict';

const co = require('co');

const {
  Client
} = require('./');

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
    // signHeaders: {
    //   'header1': 'header1Value',
    //   'header2': 'header2Value'
    // }
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
    },
    // signHeaders: {
    //   'header1': 'header1Value',
    //   'header2': 'header2Value'
    // },
    // query: {
    //   'query1': 'query1Value',
    //   'query2': 'query2Value'
    // }
  });

  console.log(JSON.stringify(result));
}).catch((error)=>{
  //请求错误信息
  console.log(JSON.stringify(error.message));
});

//delete
// co(function* () {
//   var url = 'https://open8200.hikvision.com/delete';

//   var result = yield client.delete(url, {
//     headers: {
//       accept: 'application/json'
//     },
//     signHeaders: {
//       'header1': 'header1Value',
//       'header2': 'header2Value'
//     },
//     query: {
//       'query1': 'query1Value',
//       'query2': 'query2Value'
//     }
//   });

//   console.log(JSON.stringify(result));
// });

//PUT
// co(function* () {
//   var url = 'https://open8200.hikvision.com/update';

//   var result = yield client.put(url, {
//     headers: {
//       accept: 'application/json',
//       'content-type': 'application/x-www-form-urlencoded'
//     },
//     data: {
//       pid: ''
//     }
//   });

//   console.log(JSON.stringify(result));
// });
