module.exports = function(app) {
  var express = require('express');
  var searchRouter = express.Router();
  //[{"id":592917929659793400,"user_image":"http://pbs.twimg.com/profile_images/578391802111139840/YhoPELoD_normal.jpeg","network":"twitter","video":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>","image":"","created_at":"Tue Apr 28 05:07:04 +0000 2015","from":"Ana Carolina Pereira","from_id":"17451208","message":"@OliverHorschel @ThreeDRobot @Robotpencil I'm loving the teeth!!","shares_count":"","user_shares":false,"likes_count":"","user_likes":false}]
  searchRouter.get('/', function(req, res) {
    res.send({
  "search":{
    "id":1,
    "user_twitter":[

    ],
    "post_twitter":[
      "602527965625262080",
      "602522818866208769",
      "602521585426243584",
      "602518723585531904",
      "602517625063759872",
      "602517343378485248",
      "602516045148991488",
      "602513726290300928",
      "602510622354341888",
      "602509959583137792",
      "602508890018820096",
      "602508620819922946",
      "602498426140405761",
      "602497627343597568",
      "602494052727066624"
    ]
  },

  "user_twitter":[
    {
      "id":"2704581690",
      "name":"Javascript Digest",
      "screenname":"javascriptd",
      "image":"http://pbs.twimg.com/profile_images/544034757730779136/-jOL7GnN_normal.jpeg",
      "bio":"Javascript Digest brought to you by http://t.co/rHlyfe7p7r",
      "link":"https://twitter.com/javascriptd"
    },
    {
      "id":"48808887",
      "name":"Marcel Mengerink",
      "screenname":"macmengerink",
      "image":"http://pbs.twimg.com/profile_images/378800000365195148/39df7b339acd3bc6a4618c80ed7336c6_normal.jpeg",
      "bio":"Professional Webdeveloper.\n\nIk maak websites voor Smartphones, Tablets en Desktop computers.",
      "link":"https://twitter.com/macmengerink"
    },
    {
      "id":"539221178",
      "name":"Davy Dovanton",
      "screenname":"anton_davydov",
      "image":"http://pbs.twimg.com/profile_images/378800000115927884/a6ff97a3c19dbc70dd66dc7534e4c1bd_normal.jpeg",
      "bio":"Rubyist. Space-Rocket ship builder. @sidekiq contributor.",
      "link":"https://twitter.com/anton_davydov"
    },
    {
      "id":"20548652",
      "name":"AlessandroMagnaterra",
      "screenname":"AlexMagna",
      "image":"http://pbs.twimg.com/profile_images/458852274781966336/SgxF3m04_normal.jpeg",
      "bio":"Js lover!",
      "link":"https://twitter.com/AlexMagna"
    },
    {
      "id":"2885239762",
      "name":"React Chicago",
      "screenname":"ReactJSChicago",
      "image":"http://pbs.twimg.com/profile_images/547042798705192960/8iozVXup_normal.png",
      "bio":"Official account for the ReactJS Chicago meetup.",
      "link":"https://twitter.com/ReactJSChicago"
    },
    {
      "id":"56382250",
      "name":"JulienH",
      "screenname":"Julien_He",
      "image":"http://pbs.twimg.com/profile_images/519484380733906944/bh3iqvIM_normal.jpeg",
      "bio":"Lead pixel maker @sagacify, co-founder @Aroe_be. #scss lover",
      "link":"https://twitter.com/Julien_He"
    },
    {
      "id":"578669923",
      "name":"Mike K",
      "screenname":"mikemsrk",
      "image":"http://pbs.twimg.com/profile_images/434365605467000832/Z3Eztdu6_normal.jpeg",
      "bio":"",
      "link":"https://twitter.com/mikemsrk"
    },
    {
      "id":"2426422297",
      "name":"ReactJS News",
      "screenname":"ReactJSNews",
      "image":"http://pbs.twimg.com/profile_images/451924608388591616/CWE80cBY_normal.png",
      "bio":"The latest React news and articles. Everyone is welcome to contribute! \nCurated by @zachcodes and @JedWatson",
      "link":"https://twitter.com/ReactJSNews"
    },
    {
      "id":"1441051304",
      "name":"Thang Pham",
      "screenname":"thangphamquang",
      "image":"http://pbs.twimg.com/profile_images/602509413530804224/8k9qIdhf_normal.jpg",
      "bio":"Hanoian live in Saigon",
      "link":"https://twitter.com/thangphamquang"
    },
    {
      "id":"1379119477",
      "name":"Emmanuel Gautier",
      "screenname":"gautier_manu",
      "image":"http://pbs.twimg.com/profile_images/519213236688678912/gT-rLvnS_normal.png",
      "bio":"Freelance web developer. Tech enthusiast. #nginx #angularjs #nodejs #php #laravel",
      "link":"https://twitter.com/gautier_manu"
    },
    {
      "id":"424882243",
      "name":"Mateusz Zatorski",
      "screenname":"matzatorski",
      "image":"http://pbs.twimg.com/profile_images/594911932102082560/p16iA5_b_normal.jpg",
      "bio":"Hacker, software engineer. Addicted to coke, volleyball and programming. Currently hacking @TwizooLondon",
      "link":"https://twitter.com/matzatorski"
    },
    {
      "id":"1566463268",
      "name":"React",
      "screenname":"reactjs",
      "image":"http://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_normal.png",
      "bio":"A JavaScript Library for Building User Interfaces",
      "link":"https://twitter.com/reactjs"
    },
    {
      "id":"96111570",
      "name":"Pomax",
      "screenname":"TheRealPomax",
      "image":"http://pbs.twimg.com/profile_images/571354605770903552/Tqp-UpZ5_normal.jpeg",
      "bio":"I run http://t.co/lfKieHtW and work for Mozilla. I also work on Processing.js and other open source projects. Apparently I like math? This bio is too short!",
      "link":"https://twitter.com/TheRealPomax"
    },
    {
      "id":"1441051304",
      "name":"Thang Pham",
      "screenname":"thangphamquang",
      "image":"http://pbs.twimg.com/profile_images/602509413530804224/8k9qIdhf_normal.jpg",
      "bio":"Hanoian live in Saigon",
      "link":"https://twitter.com/thangphamquang"
    },
    {
      "id":"106086334",
      "name":"Vjeux",
      "screenname":"Vjeux",
      "image":"http://pbs.twimg.com/profile_images/639314683/vjeux-twitter_normal.PNG",
      "bio":"Frenchy Front-end Engineer at Facebook. Working on React and React Native",
      "link":"https://twitter.com/Vjeux"
    },
    {
      "id":"48808887",
      "name":"Marcel Mengerink",
      "screenname":"macmengerink",
      "image":"http://pbs.twimg.com/profile_images/378800000365195148/39df7b339acd3bc6a4618c80ed7336c6_normal.jpeg",
      "bio":"Professional Webdeveloper.\n\nIk maak websites voor Smartphones, Tablets en Desktop computers.",
      "link":"https://twitter.com/macmengerink"
    },
    {
      "id":"3206528621",
      "name":"Use React Native",
      "screenname":"UseReactNative",
      "image":"http://pbs.twimg.com/profile_images/591987974709125120/EdsOK63F_normal.png",
      "bio":"Learn the new way of building native iOS and Android apps.",
      "link":"https://twitter.com/UseReactNative"
    },
    {
      "id":"1441051304",
      "name":"Thang Pham",
      "screenname":"thangphamquang",
      "image":"http://pbs.twimg.com/profile_images/602509413530804224/8k9qIdhf_normal.jpg",
      "bio":"Hanoian live in Saigon",
      "link":"https://twitter.com/thangphamquang"
    },
    {
      "id":"3206528621",
      "name":"Use React Native",
      "screenname":"UseReactNative",
      "image":"http://pbs.twimg.com/profile_images/591987974709125120/EdsOK63F_normal.png",
      "bio":"Learn the new way of building native iOS and Android apps.",
      "link":"https://twitter.com/UseReactNative"
    },
    {
      "id":"3206528621",
      "name":"Use React Native",
      "screenname":"UseReactNative",
      "image":"http://pbs.twimg.com/profile_images/591987974709125120/EdsOK63F_normal.png",
      "bio":"Learn the new way of building native iOS and Android apps.",
      "link":"https://twitter.com/UseReactNative"
    },
    {
      "id":"1441051304",
      "name":"Thang Pham",
      "screenname":"thangphamquang",
      "image":"http://pbs.twimg.com/profile_images/602509413530804224/8k9qIdhf_normal.jpg",
      "bio":"Hanoian live in Saigon",
      "link":"https://twitter.com/thangphamquang"
    },
    {
      "id":"3206528621",
      "name":"Use React Native",
      "screenname":"UseReactNative",
      "image":"http://pbs.twimg.com/profile_images/591987974709125120/EdsOK63F_normal.png",
      "bio":"Learn the new way of building native iOS and Android apps.",
      "link":"https://twitter.com/UseReactNative"
    },
    {
      "id":"3206528621",
      "name":"Use React Native",
      "screenname":"UseReactNative",
      "image":"http://pbs.twimg.com/profile_images/591987974709125120/EdsOK63F_normal.png",
      "bio":"Learn the new way of building native iOS and Android apps.",
      "link":"https://twitter.com/UseReactNative"
    },
    {
      "id":"3206528621",
      "name":"Use React Native",
      "screenname":"UseReactNative",
      "image":"http://pbs.twimg.com/profile_images/591987974709125120/EdsOK63F_normal.png",
      "bio":"Learn the new way of building native iOS and Android apps.",
      "link":"https://twitter.com/UseReactNative"
    },
    {
      "id":"1441051304",
      "name":"Thang Pham",
      "screenname":"thangphamquang",
      "image":"http://pbs.twimg.com/profile_images/602509413530804224/8k9qIdhf_normal.jpg",
      "bio":"Hanoian live in Saigon",
      "link":"https://twitter.com/thangphamquang"
    },
    {
      "id":"1441051304",
      "name":"Thang Pham",
      "screenname":"thangphamquang",
      "image":"http://pbs.twimg.com/profile_images/602509413530804224/8k9qIdhf_normal.jpg",
      "bio":"Hanoian live in Saigon",
      "link":"https://twitter.com/thangphamquang"
    }
  ],
  "post_twitter":[
    {
      "id":"602527965625262080",
      "user":"2704581690",
      "message":"RT @macmengerink: Develop and test iOS apps without the need for Xcode or even a Mac!\n\nhttp://t.co/VgyOTjfr9K\n\n#reactjs \n#webdevelopment",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":1,
      "created_at":"Sun May 24 17:33:56 +0000 2015",
      "link":"https://twitter.com/javascriptd/status/602527965625262080",
      "retweet":"602522818866208769"
    },
    {
      "id":"602522818866208769",
      "user":"48808887",
      "message":"Develop and test iOS apps without the need for Xcode or even a Mac!\n\nhttp://t.co/VgyOTjfr9K\n\n#reactjs \n#webdevelopment",
      "favorited":false,
      "retweeted":false,
      "favorite_count":2,
      "retweet_count":1,
      "created_at":"Sun May 24 17:13:29 +0000 2015",
      "link":"https://twitter.com/macmengerink/status/602522818866208769"
    },
    {
      "id":"602521585426243584",
      "user":"539221178",
      "message":"created simple react native app, looks nice @reactnative",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":0,
      "created_at":"Sun May 24 17:08:34 +0000 2015",
      "link":"https://twitter.com/anton_davydov/status/602521585426243584"
    },
    {
      "id":"602518723585531904",
      "user":"20548652",
      "message":"RT @UseReactNative: Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":7,
      "created_at":"Sun May 24 16:57:12 +0000 2015",
      "link":"https://twitter.com/AlexMagna/status/602518723585531904",
      "retweet":"602110504891473920"
    },
    {
      "id":"602517625063759872",
      "user":"2885239762",
      "message":"RT @thangphamquang: I keep all example related to #ReactNative here http://t.co/pJcl7SXrk0. Hope it can help other people too.",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":4,
      "created_at":"Sun May 24 16:52:50 +0000 2015",
      "link":"https://twitter.com/ReactJSChicago/status/602517625063759872",
      "retweet":"602487114589016065"
    },
    {
      "id":"602517343378485248",
      "user":"56382250",
      "message":"RT @UseReactNative: Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":7,
      "created_at":"Sun May 24 16:51:43 +0000 2015",
      "link":"https://twitter.com/Julien_He/status/602517343378485248",
      "retweet":"602110504891473920"
    },
    {
      "id":"602516045148991488",
      "user":"578669923",
      "message":"RT @UseReactNative: Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":7,
      "created_at":"Sun May 24 16:46:34 +0000 2015",
      "link":"https://twitter.com/mikemsrk/status/602516045148991488",
      "retweet":"602110504891473920"
    },
    {
      "id":"602513726290300928",
      "user":"2426422297",
      "message":"RT @thangphamquang: I keep all example related to #ReactNative here http://t.co/pJcl7SXrk0. Hope it can help other people too.",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":4,
      "created_at":"Sun May 24 16:37:21 +0000 2015",
      "link":"https://twitter.com/ReactJSNews/status/602513726290300928",
      "retweet":"602487114589016065"
    },
    {
      "id":"602510622354341888",
      "user":"1441051304",
      "message":"Currently I'm learning #ReactNative and #iOS programming, if you have any interesting sample or tutorial, please tweet me.",
      "favorited":false,
      "retweeted":false,
      "favorite_count":2,
      "retweet_count":0,
      "created_at":"Sun May 24 16:25:01 +0000 2015",
      "link":"https://twitter.com/thangphamquang/status/602510622354341888"
    },
    {
      "id":"602509959583137792",
      "user":"1379119477",
      "message":"RT @UseReactNative: Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":7,
      "created_at":"Sun May 24 16:22:23 +0000 2015",
      "link":"https://twitter.com/gautier_manu/status/602509959583137792",
      "retweet":"602110504891473920"
    },
    {
      "id":"602508890018820096",
      "user":"424882243",
      "message":"RT @UseReactNative: Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":7,
      "created_at":"Sun May 24 16:18:08 +0000 2015",
      "link":"https://twitter.com/matzatorski/status/602508890018820096",
      "retweet":"602110504891473920"
    },
    {
      "id":"602508620819922946",
      "user":"1566463268",
      "message":"RT @UseReactNative: Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":7,
      "created_at":"Sun May 24 16:17:03 +0000 2015",
      "link":"https://twitter.com/reactjs/status/602508620819922946",
      "retweet":"602110504891473920"
    },
    {
      "id":"602498426140405761",
      "user":"96111570",
      "message":"RT @thangphamquang: I keep all example related to #ReactNative here http://t.co/pJcl7SXrk0. Hope it can help other people too.",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":4,
      "created_at":"Sun May 24 15:36:33 +0000 2015",
      "link":"https://twitter.com/TheRealPomax/status/602498426140405761",
      "retweet":"602487114589016065"
    },
    {
      "id":"602497627343597568",
      "user":"1441051304",
      "message":"this book help me walkthrough very first step to use #ReactNative http://t.co/1YERg0PboP",
      "favorited":false,
      "retweeted":false,
      "favorite_count":1,
      "retweet_count":0,
      "created_at":"Sun May 24 15:33:22 +0000 2015",
      "link":"https://twitter.com/thangphamquang/status/602497627343597568"
    },
    {
      "id":"602494052727066624",
      "user":"106086334",
      "message":"RT @thangphamquang: I keep all example related to #ReactNative here http://t.co/pJcl7SXrk0. Hope it can help other people too.",
      "favorited":false,
      "retweeted":false,
      "favorite_count":0,
      "retweet_count":4,
      "created_at":"Sun May 24 15:19:10 +0000 2015",
      "link":"https://twitter.com/Vjeux/status/602494052727066624",
      "retweet":"602487114589016065"
    },
    {
      "id":"602522818866208769",
      "user":"48808887",
      "message":"Develop and test iOS apps without the need for Xcode or even a Mac!\n\nhttp://t.co/VgyOTjfr9K\n\n#reactjs \n#webdevelopment",
      "favorited":false,
      "retweeted":false,
      "favorite_count":2,
      "retweet_count":1,
      "created_at":"Sun May 24 17:13:29 +0000 2015",
      "link":"https://twitter.com/macmengerink/status/602522818866208769"
    },
    {
      "id":"602110504891473920",
      "user":"3206528621",
      "message":"Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":30,
      "retweet_count":7,
      "created_at":"Sat May 23 13:55:05 +0000 2015",
      "link":"https://twitter.com/UseReactNative/status/602110504891473920"
    },
    {
      "id":"602487114589016065",
      "user":"1441051304",
      "message":"I keep all example related to #ReactNative here http://t.co/pJcl7SXrk0. Hope it can help other people too.",
      "favorited":false,
      "retweeted":false,
      "favorite_count":30,
      "retweet_count":4,
      "created_at":"Sun May 24 14:51:36 +0000 2015",
      "link":"https://twitter.com/thangphamquang/status/602487114589016065"
    },
    {
      "id":"602110504891473920",
      "user":"3206528621",
      "message":"Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":30,
      "retweet_count":7,
      "created_at":"Sat May 23 13:55:05 +0000 2015",
      "link":"https://twitter.com/UseReactNative/status/602110504891473920"
    },
    {
      "id":"602110504891473920",
      "user":"3206528621",
      "message":"Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":30,
      "retweet_count":7,
      "created_at":"Sat May 23 13:55:05 +0000 2015",
      "link":"https://twitter.com/UseReactNative/status/602110504891473920"
    },
    {
      "id":"602487114589016065",
      "user":"1441051304",
      "message":"I keep all example related to #ReactNative here http://t.co/pJcl7SXrk0. Hope it can help other people too.",
      "favorited":false,
      "retweeted":false,
      "favorite_count":30,
      "retweet_count":4,
      "created_at":"Sun May 24 14:51:36 +0000 2015",
      "link":"https://twitter.com/thangphamquang/status/602487114589016065"
    },
    {
      "id":"602110504891473920",
      "user":"3206528621",
      "message":"Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":30,
      "retweet_count":7,
      "created_at":"Sat May 23 13:55:05 +0000 2015",
      "link":"https://twitter.com/UseReactNative/status/602110504891473920"
    },
    {
      "id":"602110504891473920",
      "user":"3206528621",
      "message":"Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":30,
      "retweet_count":7,
      "created_at":"Sat May 23 13:55:05 +0000 2015",
      "link":"https://twitter.com/UseReactNative/status/602110504891473920"
    },
    {
      "id":"602110504891473920",
      "user":"3206528621",
      "message":"Simple Sudoku example built with #ReactNative \nhttp://t.co/X6Kiwh1a8Y http://t.co/hgHIPCYLvU",
      "favorited":false,
      "retweeted":false,
      "favorite_count":30,
      "retweet_count":7,
      "created_at":"Sat May 23 13:55:05 +0000 2015",
      "link":"https://twitter.com/UseReactNative/status/602110504891473920"
    },
    {
      "id":"602487114589016065",
      "user":"1441051304",
      "message":"I keep all example related to #ReactNative here http://t.co/pJcl7SXrk0. Hope it can help other people too.",
      "favorited":false,
      "retweeted":false,
      "favorite_count":30,
      "retweet_count":4,
      "created_at":"Sun May 24 14:51:36 +0000 2015",
      "link":"https://twitter.com/thangphamquang/status/602487114589016065"
    },
    {
      "id":"602487114589016065",
      "user":"1441051304",
      "message":"I keep all example related to #ReactNative here http://t.co/pJcl7SXrk0. Hope it can help other people too.",
      "favorited":false,
      "retweeted":false,
      "favorite_count":30,
      "retweet_count":4,
      "created_at":"Sun May 24 14:51:36 +0000 2015",
      "link":"https://twitter.com/thangphamquang/status/602487114589016065"
    }
  ]
})
  });

  app.use('/api/connect/search', searchRouter);
};
