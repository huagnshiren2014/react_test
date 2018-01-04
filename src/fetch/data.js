import md5 from 'js-md5';
import { get } from './get.js';
import { post } from './post.js';

export function getData() {
    console.log('GET方法');
    var result = get('/index.php/AirTicket/car/searchAirport?searchKey=纽约&src=91_h5');

    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
};

export function postData() {
    console.log('POST方法');
    var result = post('/index.php/buser/user/login', {
        countryCode: '+86',
        password: md5('d12345'),
        username: '18911281024',
        src: '91_h5'
    })

    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
    
};