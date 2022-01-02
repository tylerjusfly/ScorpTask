module.exports = (sequelize, dataTypes) => {
  const followModels = sequelize.define('follows', {
    
  },
  {
    createdAt : true,
    updatedAt : false
  }
  )
  return followModels
}