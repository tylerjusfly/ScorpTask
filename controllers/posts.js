const e = require('express')
const db = require('../models/index')


let posts_id = [1 , 5, 3, 7 ]

async function get_post(user_id, posts_id){
  let posts = await db.posts.findAll({
    where : {
      id : posts_id
    }
  })
    // Search for available posts
  let foundPosts = posts.map(post => {
    return post.id
  })
 
  let users = await db.users.findAll({
    where : {
      id : user_id
    }
  })

  //  checking user_id passed from the function and getting its data from the likes table
  let userLikes = await db.likes.findAll({
    where : {
      userId : user_id
    }
  })

  // fetching all user likes
  let allUserLikes = userLikes.map(userLike => {
    return {
      postId : userLike.dataValues.postId,
      userId : userLike.dataValues.userId
    }
  })

  let followers = await db.follows.findAll()

  let newPosts = []
  // Checking if foundposts exists in posts_id
  posts_id.forEach(postId => {
    if (foundPosts.includes(postId)){
      let post = posts.filter(post => post.dataValues.id === postId)[0].dataValues

      post.liked = false
      if(allUserLikes.filter(like => like.postId === postId).length > 0){
        post.liked = true 
      }
      
      newPosts.push(post)
    }
    else newPosts.push(null) 

  })


    users.forEach((user, i) => {
      user.dataValues.followed = false
      followers.map(follower => {
        if(follower.dataValues.followerId === user_id && follower.dataValues.followingId === posts[i].dataValues.userId){
          user.dataValues.followed = true

        }
      })
    })



  return [newPosts, users]
 
}


class PostController  {

  getPost (req, res) {

    let result = get_post(3, posts_id)
    .then(data => {
      
      res.send(data)
    })
    
  }
 
  }

module.exports  = new PostController()



  