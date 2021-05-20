import {MongoClient} from 'mongodb';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'articles-app';

interface Article {
    desc: string,
    nStock: number,
    pvp: number,
    oStock: boolean,
    barcode: number
}

MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);

  return db.collection<Article>('articles').insertOne({
    desc: 'New Article',
    nStock: 10,
    pvp: 2.66,
    oStock: true,
    barcode: 43092189540,
  });
}).then((result) => {
  console.log(result.ops);
}).catch((error) => {
  console.log(error);
});
