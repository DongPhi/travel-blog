var path = require('path')

var express = require('express')


var app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.get('/post', function(req, res) {
    res.render('pages/post');
});


//
//
// app.use(require('express-edge'));
//
// app.set('views', '${__dirname}/views')
//
// app.get('/', (req, res)=>{
//
//   res.render('index')
//
// })
//
// app.get('/about', (req, res)=>{
//
//   res.sendFile(path.resolve(__dirname, 'pages/about.html'))
//
// })
//
// app.get('/contact', (req, res)=>{
//
//   res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
//
// })
//
// app.get('/post', (req, res)=>{
//
//   res.sendFile(path.resolve(__dirname, 'pages/post.html'))
//
// })

app.listen(4000, () => {

  console.log('App listening on port 4000')

})
