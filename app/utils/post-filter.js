export default function (posts) {
  return {
    posts: posts,

    filterByMessage(criteria) {
      if(!this.isValidCriteria(criteria)) {
        return this.posts;
      }
      return posts.filter((post) => {
        let message = post.get('message');
        return this.isSimilarMessage(message, criteria);
      });
    },

    isSimilarMessage(message, criteria) {
      if(!message) {
        return false;
      }
      return message.indexOf(criteria) > -1;
    },

    isValidCriteria(criteria) {
      if(criteria === '' || !criteria) {
        return false;
      }
      return true;
    },
  };
}
