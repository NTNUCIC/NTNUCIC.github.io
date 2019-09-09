var ejs = require('ejs');
var fs = require('fs');

// Carousel
const photo = require('./assets/photo.json')

// const db = require('./test/event.json')
ejs.renderFile('./test.ejs', photo, null, (err, html) => {
	fs.writeFileSync('./test.html', html, 'utf-8');
});
