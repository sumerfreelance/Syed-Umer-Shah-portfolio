const express = require("express");
const cors = require("cors");
const getConnection = require("./db");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/contact", async (req, res) => {

    const { name, email, subject, message } = req.body;

    let connection;

    try {

        connection = await getConnection();

        await connection.execute(
            `INSERT INTO contact_messages
            (name,email,subject,message)
            VALUES (:1,:2,:3,:4)`,
            [name, email, subject, message],
            { autoCommit: true }
        );

        res.send("Message Sent Successfully");

    } catch (err) {

        console.error(err);
        res.status(500).send(err.message);

    } finally {

        if (connection)
            await connection.close();

    }

});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});