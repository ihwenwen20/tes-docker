const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
	const users = [
		{ id: 1, name: 'User 1' },
		{ id: 2, name: 'User 2' },
		{ id: 3, name: 'User 3' },
		{ id: 4, name: 'User 4' },
	];
	res.json(users);
});

app.listen(port, () => {
	console.log(`App 1 is running on port ${port}`);
});

