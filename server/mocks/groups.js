module.exports = function(app) {
  var express = require('express');
  var groupsRouter = express.Router();

  groupsRouter.get('/:id', function(req, res) {
    res.send({
        "group_facebook":{
          "id":"778902298844266",
          "link":"http://facebook.com/500803300033344",
          "cover":"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/s720x720/1524066_779163332110655_307018926_o.jpg",
          "icon":"https://fbstatic-a.akamaihd.net/rsrc.php/v2/yx/r/YizVmKKkb90.png",
          "name":"Stylus Brazil",
          "description":"grupo para discussão e evangelização do Stylus no Brasil.",
          "posts":[
            "500803300033344_751577661622572",
          ],
          "members":[
            "107287212938336",
          ]
        },
        "post_facebook":[
          {
            "id":"500803300033344_751577661622572",
            "link": "https://facebook.com/500803300033344_751577661622572",
            story: "Mateus shared a link from 9gag",
            picture: "",
            description: "look this link at 9gag",
            external_link: "http://9gag.com",
            "owner":"107287212938336",
            type: "link",
            created_time: "Wed May 27 2015 16:56:04 GMT-0300 (BRT)",
            "message":"Fala pessoal!\n\nAlguém conhece algum framework CSS (like Bootstrap, Foundation...) que use Stylus? Os que eu encontrei, não são nada completos!\n\nSe não existir, o quanto gostariam que existisse? Pois se não tiver, vou criar um!\n\nQuem trabalha com esses frameworks, sabe como é a demora do build a cada save, principalmente os com SASS!",
            like: true
          }
        ],
        "user_facebook":[
          {
            "id":"107287212938336",
            "name":"Mateus",
            "image":"http://graph.facebook.com/107287212938336/picture",
            "link":"http://facebook.com/107287212938336"
          },
        ]
    });
  });
  app.use('/api/connect/groups', groupsRouter);
};
