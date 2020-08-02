var applyForm = {

    form: function(req, res) {
        // res.send('apply form');
        res.render('user/applyForm', { 
            data : 'testData list ejs'
        
        });
    }

};

module.exports = applyForm;