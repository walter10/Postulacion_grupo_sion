const controller ={};

controller.list = (req, res)=> {
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer',(err, customer)=>{
            if(err){
                res.json(err);
            }            
            res.render('customers.ejs',{
                data: customer
            });

        });

    });

};

controller.save = (req,res) => {
    console.log(req.body);
    res.send('works');
    
};


module.exports = controller;

