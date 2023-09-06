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
    const data = req.body;
    req.getConnection((err,conn) => {
        conn.query("INSERT INTO customer set ?",[data], (err, customer)=>{            
            res.redirect('/');   
        });
    })
    
};

controller.edit = (req,res) => {
    const {id} = req.params;
    req.getConnection((err,conn)=> {
        conn.query('SELECT * FROM customer WHERE id = ?',[id],(err,customer) => {
            res.render("customers_edit", { customer: result[0] });

        });
    })


}


controller.delete =(req, res) => {
    const {id} = req.params;
    console.log('click edith');
    res('work')
}


module.exports = controller;

