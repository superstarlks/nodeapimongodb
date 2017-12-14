/* eslint-disable no-console */
import mongoose from 'mongoose';
import constants from './constants';

//remove the warning with promise
mongoose.Promise = global.Promise;

//connect the db with the url provide
try {
  mongoose.connect(constants.MONGO_URL, { useMongoClient: true });
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL, { useMongoClient: true });
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e;
  });
