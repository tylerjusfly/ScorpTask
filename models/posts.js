module.exports = (sequelize, dataTypes) => {
  const Post = sequelize.define("posts", {
    description : {
      type : dataTypes.STRING,
      allowNull : false
    },
    image : {
      type : dataTypes.STRING,
      allowNull :false 
    }
  },
  {
    createdAt : true,
    updatedAt : false
  })
  return Post
}