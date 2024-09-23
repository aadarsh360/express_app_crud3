const db = require('../config/db');

// CRUD opertions

// Read all data from table

exports.getAllUsers = (req, res)=>{
    const query = "Select * from user_table3";
    db.execute(query,(err, result)=>{
        if(err) return res.status(500).json({error:err});
        res.json(result);
    })
}

// Create new user in table
exports.createUser = (req, res)=>{
    const {name, mobile, email, age} = req.body;
    const checkMobileNumber = 'Select * from user_table3 where mobile=?';

    db.execute(checkMobileNumber, [mobile], (err, result)=>{

        if(err) return res.status(500).json({error:err});
        if(result.length > 0){
            return res.status(400).json({message:"mobile number is avialbe"});
        }

        const query = 'Insert into user_table3(name, mobile, email, age) values(?,?,?,?)';
        db.execute(query,[name, mobile, email, age], (err, result)=>{
            if(err) return res.status(500).json({error:err});
            res.json({message:"Create user successfully"});
        })
    })
};

// Update user in table

exports.updateUser = (req, res)=>{

    const {id, name, mobile, email, age} = req.body;
    const query = "Update user_table3 set name =?, mobile=?, email=?, age=? where id=?";
    db.execute(query, [name, mobile, email, age, id], (err, result)=>{
        if(err) return res.status(500).json({error:err});
        res.json({message:"Update user successfully"});
    });
};

exports.deleteUser = (req, res)=>{
    const {id} = req.body;
    const query = 'Delete from user_table3 where id=?';
    db.execute(query,[id], (err, result)=>{
        if(err) return res.status(500).json({error:err});
        res.json({message:"Delete user successfully"});
    })
}