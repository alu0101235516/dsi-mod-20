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

  return db.collection<Article>('articles').findOne({
    barcode: 43092189540,
  });
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
