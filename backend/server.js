const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express()
app.use(cors())
app.use(express.json());

// const appmajor = express()
// app.use(cors())
// app.use(express.json());

const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

app.get('/',(req,res)=>{
    const sql = "SELECT * FROM `user`";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/faculty',(req,res)=>{
    const sql = "SELECT * FROM `faculty`";
    // const id = req.params.id;
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/create',(req,res)=>{
    const sql = "INSERT INTO user (`id`,`IDFAC`,`major`,`name`,`year`) VALUES(?)";
    const values = [
        req.body.id,
        req.body.IDFAC1,
        req.body.major,
        req.body.name,
        req.body.year,
    ]
    db.query(sql, [values],(err, data)=>{
        if(err) return res.json(err);
        return res.json("created");
    })
})

app.put('/update/:id',(req,res)=>{
    const sql = "UPDATE user set `IDFAC` = ?,`major` = ?,`name` = ?,`year` =? WHERE id = ?";
    const id = req.params.id;
    const values = [
        req.body.IDFAC,
        req.body.major,
        req.body.name,
        req.body.year,
    ]
    db.query(sql, [...values, id],(err, data)=>{
        if(err) return res.json(err);
        return res.json("updated");
    })
})


app.delete('/delete/:id',(req,res)=>{
    const sql = "DELETE FROM user WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id],(err, data)=>{
        if(err) return res.json(err);
        return res.json("deleted");
    })
    
})

app.listen(5619,()=>{
    console.log('Listening 5619 .....')
})