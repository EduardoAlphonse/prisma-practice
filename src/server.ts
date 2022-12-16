import express from 'express';

import { userController } from './controllers/userController';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hello World!');
})

app.post('/user', async (req, res) => {
    const { name, email } = req.body;

    const createdUser = await userController.createUser({
        name,
        email,
    })

    return res.json(createdUser);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port} 💻...`);
});
