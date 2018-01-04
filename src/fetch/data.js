// import { get } from './get.js';
// import { post } from './post.js';

// export function getData() {
//     console.log('GET方法');
//     var result = get('/webapp1.0/index.php/AirTicket/car/searchAirport?searchKey=纽约&src=91_h5');

//     result.then(res => {
//         return res.json()
//     }).then(json => {
//         console.log(json)
//     })
// };

// export function postData() {
//     // '/api/post' 提交数据
//     // var result = post('/api/post', {
//     //     a: 100,
//     //     b: 200
//     // })

//     // result.then(res => {
//     //     return res.json()
//     // }).then(json => {
//     //     console.log(json)
//     // })
//     console.log('POST方法');
// };


import 'whatwg-fetch'
import 'es6-promise'

export function getData() {
    fetch('/index.php/AirTicket/car/searchAirport?searchKey=纽约&src=91_h5')
    .then(res => {
        return res.json()
    }).then(data => {
        console.log('data >', data)
    }).catch(error => {
        console.log('error >', error)
    })
}

export function postData() {
    console.log('POST方法');
}