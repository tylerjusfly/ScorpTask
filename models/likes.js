module.exports = (sequelize, dataTypes) => {
  const likeModels = sequelize.define('likes', {
    
    
  },
  {timestamps : false}
  )
  return likeModels
}