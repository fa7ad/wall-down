import snoowrap from 'snoowrap';

class GetReddit {
  constructor(subreddit) {
    this.R = new snoowrap({
      user_agent: 'Wall-Down app by webaholicnobody. Version: 1.0.0',
      client_id: 'CIHceqn6LvIqbA',
      client_secret: 'X8GLe9qgI1yWyXOJOOZFdoqH1rI',
      refresh_token: '59782680-FFDkCxgXp4sBfbZGPs7yZpl4LTs',
    });
    if(subreddit){
      this.subreddit = subreddit;
    }else{
      throw new Error("Please provide a subreddit name");
    }
  }

  getPosts(){
    return this.R.get_subreddit(this.subreddit).get_hot().then(posts => posts.filter(post => {
      const dimension = post.title.match(/(\d+)x(\d+)/).slice(1);
      return (dimension[0] >= dimension[1] * 1.33);
    })).then(posts => posts.map(post => {
      return Object.assign(post, {
        download: /\.(jpg|png)$/.test(post.url) ? post.url : (
          post.preview.images[0].source.url || post.thumbnail
        )
      });
    }));
  }
}

export default GetReddit;