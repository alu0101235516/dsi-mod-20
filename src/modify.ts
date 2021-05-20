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

  return db.collection<Article>('articles').updateMany({
    barcode: 43092189540,
  }, {
    $set: {
      desc: 'Modified article',
      nStock: 15,
      pvp: 300.50,
      oStock: true,
      barcode: 32906592031,
    },
  });
}).then((result) => {
  console.log("\nAn item has been modified!\n");
}).catch((error) => {
  console.log(error);
});
