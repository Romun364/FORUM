const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

let users = {
    'janek': { username: 'janek', email: 'janek@example.com', bio: 'Pasjonat programowania.' }
};

app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('Użytkownik nie znaleziony');
    }
});

app.post('/user/:username', (req, res) => {
    const username = req.params.username;
    const { email, bio } = req.body;

    if (users[username]) {
        users[username].email = email;
        users[username].bio = bio;
        res.send('Dane użytkownika zaktualizowane.');
    } else {
        res.status(404).send('Użytkownik nie znaleziony');
    }
});

app.listen(PORT, () => {
    console.log(Serwer działa na porcie ${PORT});
});