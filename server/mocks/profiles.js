module.exports = function(app) {
  var express = require('express');
  var profilesRouter = express.Router();

  profilesRouter.get('/', function(req, res) {
    res.send({"profiles":[{"id":"10513336322","description":"Find the Guardian elsewhere:  \nWebsite http://theguardian.com\nMobile http://theguardian.com \nTwitter http://twitter.com/guardian  \nYouTube http://youtube.com/theguardian  \niPhone app http://bit.ly/guardianapp\n\nRead about new design developments on theguardian.com in our beta blog:\nhttp://next.theguardian.com/blog/\n\nFind out about our Positive Action Work Placement scheme: http://gu.com/p/2p8cj","user_image":"http://graph.facebook.com/10513336322/picture","link":"http://facebook.com/10513336322","profile_banner_url":"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/t31.0-8/p240x240/10947384_10153082796981323_2904465683199102921_o.png","network":req.query.network,"name": "The Guardian","posts":["10513336322_10153280616646323","10513336322_10153280633601323","10513336322_10153280559561323","10513336322_10153280605611323","10513336322_10153280471571323","10513336322_10153280534931323","10513336322_10153280502976323","10513336322_10153280480971323","10513336322_10153280478561323","10513336322_10153278284201323","10513336322_10153280418206323","10513336322_10153278426531323","10513336322_10153279135181323","10513336322_10153279533376323","10513336322_10153279459111323","10513336322_10153279596291323","10513336322_10153279626466323","10513336322_10153279545426323","10513336322_10153279207516323","10513336322_10153279188701323","10513336322_10153278995286323","10513336322_10153278947201323","10513336322_10153279143071323","10513336322_10153278989126323","10513336322_10153278978911323"]}],"posts":[{"id":"10513336322_10153280616646323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T11:00:01+0000","from":"The Guardian","from_id":"10513336322","message":"Each day this week we are looking at key election issues. Today we examine the NHS, and the claim that the coalition’s plan for market-based healthcare was based on a mistaken belief that doctors are driven by self-interest.","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153280633601323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T10:30:00+0000","from":"The Guardian","from_id":"10513336322","message":"“I don’t know anything about you. But I do know this: you did not just attack me that night. I am a daughter. I am a friend. I am a girlfriend. I am a pupil. I am a cousin. I am a niece. I am a neighbour. I am the employee who served everyone down the road coffee in the café under the railway. All the people who form those relations to me make up my community and you assaulted every single one of them.”","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153280559561323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T10:00:00+0000","from":"The Guardian","from_id":"10513336322","message":"Explosive! Behind the internet's 'popping' craze (warning: graphic content)","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153280605611323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T09:30:01+0000","from":"The Guardian","from_id":"10513336322","message":"\"A significant reason why women still can’t go to The Garrick Club is the worldwide affection for Winnie the Pooh. In 1956, A. A. Milne left a quarter of the royalties from his children’s books to his club. In 2000, Disney bought out the club’s share of the rights for £40m. While other clubs welcomed women members and their membership fees, the Garrick hasn’t needed them.\"","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153280471571323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T09:00:02+0000","from":"The Guardian","from_id":"10513336322","message":"\"Globally Europeans and, by extension, white people, have been the dominant group for centuries. This may continue for many more. But it’s at least conceivable today that the rise of China might change that: the profound economic and military setbacks the west has suffered in the last decade could be an opportunity for the east to take over. In which case, colonialism, plunder and exploitation would have a different face, a different beneficiary, and a different victim.\"","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153280534931323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T08:30:00+0000","from":"The Guardian","from_id":"10513336322","message":"“It’s clear from our time in government that the Tories target will be slashing support for families. They now ask the British people to trust them when they make unfunded pledges on health and tax yet they won’t tell us how they will cut welfare for millions of families to pay for their plans. They may give with one hand but they will take away twice as much as with the other.”","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153280502976323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T08:10:00+0000","from":"The Guardian","from_id":"10513336322","message":"\"If Russell Brand is the voice of youth, what has happened to actual youth?\"\n\n\"Who knows what young people actually think?\"","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153280480971323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T07:51:39+0000","from":"The Guardian","from_id":"10513336322","message":"\"Each day that passes is one that reminds me of all I will lose if the answer is no. I used to be a teacher. How desperately I would like to be one again. I’m a mother. I can’t even bear here to describe the sense of loss I feel every day when I look at my children and wonder where we will all be a year from now. Call me. Please. I can’t take it.\"","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153280478561323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T07:30:23+0000","from":"The Guardian","from_id":"10513336322","message":"The first extraordinary images are emerging of Pema Lama, the 15-year-old boy who was pulled from the rubble in Kathmandu five days after the earthquake. Follow our live coverage.","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153278284201323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T07:00:01+0000","from":"The Guardian","from_id":"10513336322","message":"'However much they might try to throw dirt over it, the unexploded bomb sticking out of the ground of this battlefield belongs to the Tories, and it has EU Ref written on its side.'","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153280418206323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T06:33:06+0000","from":"The Guardian","from_id":"10513336322","message":"\"Am I being executed?\"","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153278426531323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T06:00:01+0000","from":"The Guardian","from_id":"10513336322","message":"\"My teachers were kind but overstretched, and there was a weariness to their reactions to bullying, a masked but nevertheless apparent attitude that to some degree I was culpable – that if I wasn’t so bloody weird it wouldn’t happen. All I had to do was fit in; but that was all I couldn’t do.\"","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153279135181323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T05:30:01+0000","from":"The Guardian","from_id":"10513336322","message":"\"The images I see from home have shattered my soul.\"\n\nThe stories you shared with us from the aftermath of the Nepalese earthquake","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153279533376323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-30T01:08:00+0000","from":"The Guardian","from_id":"10513336322","message":"The most important documents to be released could be reports wired to Rome by the Vatican's then ambassador to Buenos Aires who met regularly with the military chiefs. During the 1976-83 dictatorship, 20,000 people were made to \"disappear\".","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153279459111323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T23:00:00+0000","from":"The Guardian","from_id":"10513336322","message":"The Messenger probe has beamed back a series of breathtaking images of the tiny, scorched world. It is destined to collide with the planet very soon.","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153279596291323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T22:30:01+0000","from":"The Guardian","from_id":"10513336322","message":"The controversy over the CIA’s secret drone program has gone from bad to worse this week.","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153279626466323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T22:00:00+0000","from":"The Guardian","from_id":"10513336322","message":"Don't worry, the banana and the peach remain unaffected. \n\nCarry on.","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153279545426323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T21:04:02+0000","from":"The Guardian","from_id":"10513336322","message":"\"I'm ambivalent about the death penalty – there have been so many incidents of prosecutorial misconduct, or DNA testing that has proved a prisoner’s innocence. It’s problematic.\"","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153279207516323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T21:00:05+0000","from":"The Guardian","from_id":"10513336322","message":"\"I was holding myself back and, in the process, slowing the progress of the LGBT movement. I decided to embrace my identity and bring my authentic self to the workplace.\"","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153279188701323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T20:30:01+0000","from":"The Guardian","from_id":"10513336322","message":"After 22 hours under a collapsed building and covered in dust, Sonit Awal is lifted to safety","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153278995286323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T20:00:04+0000","from":"The Guardian","from_id":"10513336322","message":"Faking serious illness online is more common than you might think.","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153278947201323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T19:30:01+0000","from":"The Guardian","from_id":"10513336322","message":"\"Strung to a pole and staring down at the weapons pointed over their hearts, prisoners defiantly sang Amazing Grace in the moments before they were executed on Indonesia’s Nusa Kambangan prison island on Wednesday.\"","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153279143071323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T19:00:01+0000","from":"The Guardian","from_id":"10513336322","message":"\"I was a keynote speaker who – I realised – might not speak again.\"","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153278989126323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T18:30:00+0000","from":"The Guardian","from_id":"10513336322","message":"An Oregon wastewater treatment operator has asked home brewers to make great-tasting beer from hops, barley, yeast and treated sewer water.\n\nFancy a pint?","shares_count":"","user_shares":false,"likes_count":"","user_likes":false},{"id":"10513336322_10153278978911323","user_image":"http://graph.facebook.com/10513336322/picture","network":"facebook","video":"","image":"","created_at":"2015-04-29T18:00:02+0000","from":"The Guardian","from_id":"10513336322","message":"A woman relaxing on a giant ice cube?\n\nWhen you strip the copy out of adverts what do the images left behind tell you?","shares_count":"","user_shares":false,"likes_count":"","user_likes":false}]});
  });


  app.use('/api/connect/profiles', profilesRouter);
};
