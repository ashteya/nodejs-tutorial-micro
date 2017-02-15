const request = require('request');  
const url = require('url');

module.exports = function (req, res) {

    const accessToken = '<your access token>';
    const query = `?access_token=${accessToken}&date_format=U&fields=posts{from,created_time,message,attachments}`;

    const pageName = url.parse(req.url).pathname.substring(1);

    request(`https://graph.facebook.com/${pageName}${query}`).pipe(res);
}