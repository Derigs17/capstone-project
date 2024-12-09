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


app.post('/updateUserProfile/:email', (req, res) => {
    const userEmail = req.params.email;
    const { name, email, password } = req.body;

    const sqlUpdate = "UPDATE user SET name=?, email=?, password=? WHERE email=?";
    
    db.query(sqlUpdate, [name, email, password, userEmail], (updateErr, updateData) => {
        if (updateErr) {
            console.error("Error updating user profile:", updateErr);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("User profile updated successfully");
        return res.json({ message: "User profile updated successfully" });
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

app.get('/getUserData', (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error getting user data:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
});

app.get('/getUserProfile/:email', (req, res) => {
    const userEmail = req.params.email;
    const sql = "SELECT * FROM user WHERE email = ?";
    
    db.query(sql, [userEmail], (err, data) => {
        if (err) {
            console.error("Error fetching user profile:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (data.length > 0) {
            return res.json(data[0]);
        } else {
            return res.status(404).json({ message: "User profile not found" });
        }
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


// untuk menyimpa file
const multer = require("multer");
const path = require("path");

// Konfigurasi penyimpanan
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'JudulSkripsi'); // Folder tempat file disimpan
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Menyimpan dengan timestamp agar nama unik
    }
});

// Middleware upload
const upload = multer({ storage: storage });


// ajukan judul
app.post('/submitProposal', upload.single('buktikrs'), (req, res) => {
    const {
        email,
        fullname,
        number,
        judulproposal,
        alasanproposal,
        usulandospem,
        estimasi
    } = req.body;

    const buktikrs = req.file ? req.file.filename : null; // Mendapatkan nama file yang disimpan

    const sql = `
        INSERT INTO proposals (email, fullname, number, judulproposal, alasanproposal, usulandospem, buktikrs, estimasi)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        email,
        fullname,
        number,
        judulproposal,
        alasanproposal,
        usulandospem,
        buktikrs,
        estimasi
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error submitting proposal:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log("Proposal submitted successfully:", data);
        return res.json({ message: "Proposal submitted successfully" });
    });
});

// permohonan magang
app.post('/submitMagang', (req, res) => {
    const sql = "INSERT INTO magang (`fullname`, `contact`, `number`, `ttl`, `alamat`, `instansi`, `penerimasurat`, `alamatperusahaan`, `deskripsiperusahaan`, `jenisperusahaan`, `tanggaldiisi`) VALUES (?)";
    const values = [
        req.body.fullname,
        req.body.contact,
        req.body.number,
        req.body.ttl,
        req.body.alamat,
        req.body.instansi,
        req.body.penerimasurat,
        req.body.alamatperusahaan,
        req.body.deskripsiperusahaan,
        req.body.jenisperusahaan,
        req.body.tanggaldiisi
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log("Data inserted successfully:", data);
        return res.json(data);
    });
});
