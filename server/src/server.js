// import dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const schema = require('./graphql/schema');

// define the Express app
const app = express();

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// Load Config
const config = require('./configs/db.config.json');

// Set up mongoose connection

const mongoDB = process.env.MONGODB_URI || config.db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/graphql', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
});

// This route will be used as an endpoint to interact with Graphql,
app.use(
  '/graphql',
  graphqlHTTP(() => ({
    schema,
    graphiql: true,
  })),
);

// process.env.port is Heroku's port if we choose to deploy the app there
const port = process.env.PORT || 1234;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up and running on port number ${port}`);
});
