const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "capstone"
});

app.post('/Register', (req, res) => {
    console.log('Received data:', req.body);
    const sql = "INSERT INTO user (`name`,`email`,`password`,`is_login`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        'isNotLogin'
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Error in registration:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log("Registration successful:", data);
        return res.json(data);
    });
    
});

app.post('/Login', (req, res) => {
    console.log('Received data:', req.body);
    const sqlSelect = "SELECT * FROM user WHERE `email` = ? AND `password` = ?";
    db.query(sqlSelect, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error("Error in Login:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length > 0) {
            const userId = data[0].id;
            const sqlUpdate = "UPDATE user SET is_login = 'isLogin' WHERE id = ?";
            
            db.query(sqlUpdate, [userId], (updateErr, updateData) => {
                if (updateErr) {
                    console.error("Error updating is_login:", updateErr);
                    return res.status(500).json({ error: "Internal Server Error" });
                }

                console.log("Login successful. Updated is_login:", updateData);
                return res.json("Success");
            });
        } else {
            return res.json("Fail");
        }
    });
});





app.post('/check-login', (req, res) => {
    const userEmail = req.body.email; 
    const sql = "SELECT * FROM user WHERE `email` = ? AND `is_login` = ?";
    
    db.query(sql, [userEmail, 'isLogin'], (err, data) => {
        if (err) {
            console.error("Error in check-login:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
});





app.post('/logout', (req, res) => {
    const userEmail = req.body.email;
    const sqlUpdate = "UPDATE user SET is_login = 'isNotLogin' WHERE email = ?";
    
    db.query(sqlUpdate, [userEmail], (updateErr, updateData) => {
        if (updateErr) {
            console.error("Error updating is_login during logout:", updateErr);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("Logout successful. Updated is_login:", updateData);
        return res.json("Success");
    });
});





db.connect((err) => {
    if (err) {
       console.error('Error connecting to database:', err);
    } else {
       console.log('Connected to database');
    }
 });
 


app.listen(8002, () =>{
    console.log("listening")
});