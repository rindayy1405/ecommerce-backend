const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => res.send('Chao tu Backend!'));

app.listen(PORT, () => console.log(`Server dang chay tai http://localhost:${PORT}`));
