var ejs = require('ejs');
var fs = require('fs');

const db = require('./assets/db.json')

ejs.renderFile('./index.ejs', db, null, (err, html) => {
	fs.writeFileSync('./index.html', html, 'utf-8');
});
