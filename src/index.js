const path = require('path');
const express = require('express');

const methodOverride = require('method-override');
const cors = require('cors');

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const port = 3000;

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(cors());

app.use(methodOverride('_method'));

// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
