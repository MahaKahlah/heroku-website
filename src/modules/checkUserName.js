const mongodb = require('mongodb').MongoClient;
const dbUrl = 'mongodb+srv://maha:24111998@cluster0-2gatq.mongodb.net/test?retryWrites=true';
const dbName = 'registerDB';


function checkUserName(username , done) {
(async function mongo() {
      let client;
      try {
            client = await mongodb.connect(dbUrl, { useNewUrlParser: true });
            const db = client.db(dbName);
            const col = await db.collection('users');
            const user = await col.findOne({ userName : username});
            client.close();
            if (user) {
                 done(false);
            } else {
                  done(true);
            }
      } catch (error) {
            client.close();
            done (false);
      }
   
}());
}
module.exports = checkUserName;