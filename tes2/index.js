const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
	const users = [
		{ id: 1, name: 'User 1' },
		{ id: 2, name: 'User 2' },
		{ id: 3, name: 'User 3' },
		{ id: 4, name: 'User 4' },
	];
	res.json(users);
	// const contacts = [{ id: 1, name: 'Contact 1' }, { id: 2, name: 'Contact 2' }];
	// res.json(contacts);
});

app.listen(port, () => {
	console.log(`App 2 is running on port ${port}`);
});

