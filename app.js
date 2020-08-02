var express = require('express'); 
var http = require('http');
var app = express(); 

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', 3000);

var userRouter = require('./routes/user/apply');
app.use('/user', userRouter);

// var path = require('path');
app.use(express.static('public'));

http.createServer(app).listen(process.env.PORT || 5000, function() {

    console.log('Server listen on port ' + 3000); 

});

//라우팅 모듈 선언
var indexRouter = require('./routes/index');

//request 요청 URL과 처리 로직을 선언한 라우팅 모듈 매핑
app.use('/', indexRouter);



// app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/public'));


// app.get('/user/apply', function(req, res) {

//     res.render('/user/apply');

// });

// // app.get('/hello', function(req,res){ // 2
// //     res.render('hello', {name:req.query.nameQuery});
// //   });
  
// //   app.get('/hello/:nameParam', function(req,res){ // 3
// //     res.render('hello', {name:req.params.nameParam});
// //   });

// app.listen(3000, '127.0.0.1', function() { 
    

    
// });
