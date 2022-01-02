const db = require('../models/index')

let list_of_posts = [ 
  [
    {
      id	:1,
      description	:"By default, Sequelize will add the attributes createdAt and updatedAt to your model so you will be able to know when the database entry went into the db and when it was updated last.\r\nNote that if you are using Sequelize migrations you will need to add th",
      image	:"fggggggggereesdyuj",
      createdAt	:"2021-12-29T12:57:37.000Z",
      user :	2
    },
    {
      id :	2,
      description: "We are going to be sharing a longer and more comprehensive case study as a part of our application process. If you are interested in solving the case study, you can find the link down below ",
      image	:"scorpLogo",
      createdAt	: "2021-12-29T20:49:52.000Z",
      userId :	1
    },
    {
      id :	3,
      description: "We are going to be sharing a longer and more comprehensive case study as a part of our application process. If you are interested in solving the case study, you can find the link down below ",
      image	:"scorpLogo",
      createdAt	: "2021-12-29T20:49:52.000Z",
      userId :	1
    }
  ],
  [
    {
      id : 4,
      description	:"HTTP is stateless: there is no link between two requests being successively carried out on the same connection. This immediately has the prospect of being problematic",
      image	: "a stateless image",
      createdAt	:"2021-12-29T20:51:13.000Z",
      userId	: 2
    },
    {
      id : 5,
      description	: "Improve your skills with this challenge recommended for you:\r\nLet's Echo\r\nLinux Shell | 251,448 submissions\r\nLet's get started with the simplest Bash command: echo. ",
      image	: "hackerrank logo",
      createdAt	:"2021-12-31T05:46:03.000Z",
      userId	: 3
    },
    {
      id : 6,
      description	: "Improve your skills with this challenge recommended for you:\r\nLet's Echo\r\nLinux Shell | 251,448 submissions\r\nLet's get started with the simplest Bash command: echo. ",
      image	: "hackerrank logo",
      createdAt	:"2021-12-31T07:46:03.000Z",
      userId	: 3
    }
  ]
]


async function merge_posts(list_of_posts){
  list_of_posts = list_of_posts.flat()
  let newListOfPosts = list_of_posts.map(post => {
    return {
      id : post.id,
      desc : post.description,
      image : post.image,
      createdAt : post.createdAt
    }

  })

  newListOfPosts.sort((a, b) => {
    if(Date.parse(b.createdAt) === Date.parse(a.createdAt) ){
      return b.id - a.id
    }
    return Date.parse(b.createdAt) - Date.parse(a.createdAt)
  })
  return newListOfPosts

}

class MergeController  {

  mergePost (req, res) {

    let result = merge_posts(list_of_posts)
    .then(data => {

      res.send(data)
    })
    
  }
 
  }

module.exports  = new MergeController()