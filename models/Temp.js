

Exported Pipeline
import { MongoClient } from 'mongodb';
import {
  ObjectId
} from 'mongodb';
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */
const agg = [
  {
    '$match': {
      'product': new ObjectId('662a7b6cf217463799beb9d7')
    }
  }, {
    '$group': {
      '_id': null, 
      'averageRating': {
        '$avg': '$rating'
      }, 
      'numOfRevies': {
        '$sum': 1
      }
    }
  }
];
const client = await MongoClient.connect(
  ''
);
const coll = client.db('10-e-commerce').collection('reviews');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();