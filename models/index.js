const Sequelize = require('sequelize')


// Creating connection
const sequelize = new Sequelize('scorpdb', 'momoh', 'tylerjusfly', {
  host : 'localhost',
  dialect : 'mysql',
  logging : false,
  pool : {
    max: 5,
    min: 1,
    acquire: 5000,
    idle: 1000
  }
})

// Confirm connection
sequelize.authenticate()
.then(()=> {
  console.log("db connected successfully")
})
.catch((err)=> {
  console.log("An error occured while connecting db")
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize, Sequelize)
db.posts = require('./posts')(sequelize, Sequelize)
db.likes = require('./likes')(sequelize, Sequelize)
db.follows = require('./follow')(sequelize, Sequelize)

// One to many Relationships
db.users.hasMany(db.posts)
db.posts.belongsTo(db.users)

// creating Associations
db.users.belongsToMany(db.posts, {through : db.likes});
db.posts.belongsToMany(db.users, {through : db.likes});

db.users.belongsToMany(db.users, {as : 'children', foreignKey: 'followerId', through : db.follows});
db.users.belongsToMany(db.users, {as : 'parents', foreignKey: 'followingId', through : db.follows});



module.exports = db
