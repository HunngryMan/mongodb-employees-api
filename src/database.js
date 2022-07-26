const mongoose = require('mongoose')

mongoose
    .connect("mongodb://localhost/mean-employees", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log('DB is connected'))
    .catch((err) => console.log(err));

/*


mongoac.mongo.cosmos.azure.com

db.products.insert([
    {
        "name": "mouse",
        "description":"razer mouse",
        "tags":["computers","gaming"],
        "quantity":14,
        "created_at": new Date()
    },
    {
        "name": "monitor",
        "description":"lg monitor",
        "tags":["computers","gaming"],
        "quantity": 3,
        "created_at": new Date()
    }
])

*/