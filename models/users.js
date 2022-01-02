module.exports = (sequelize, dataTypes) => {
  const usersModel = sequelize.define("users", {
    username : {
      type : dataTypes.STRING,
      allowNull : false
    },
    email : {
      type : dataTypes.STRING,
      allowNull : false
    },
    full_name : {
      type : dataTypes.STRING,
      allowNull : false
    },
    profilepic : {
      type : dataTypes.STRING,
      allowNull : false
    },
    bio : {
      type : dataTypes.STRING,
      allowNull : false
    }
  },
  {
    createdAt : true,
    updatedAt : false
  })

  return usersModel
}