import Snoowrap from 'snoowrap'

class GetReddit {
  constructor (subreddit) {
    if (!subreddit) {
      throw new Error('No subreddit provided.')
    }
    this.subreddit = subreddit
    this.reddit = new Snoowrap({
      user_agent: 'Wall-Down app by webaholicnobody. Version: 1.0.0',
      client_id: 'CIHceqn6LvIqbA',
      client_secret: 'X8GLe9qgI1yWyXOJOOZFdoqH1rI',
      refresh_token: '59782680-FFDkCxgXp4sBfbZGPs7yZpl4LTs'
    })
  }



  getPosts () {
    return this.reddit
      .get_subreddit(this.subreddit)
      .get_hot()
      .then(posts => posts.filter(
        ({title}) => {
          const [width, height] = title.match(/(\d+)x(\d+)/).slice(1)
          return (width >= height * 1.33)
        }
      ))
      .then(posts => posts.map(
        post => Object.assign(post, {
          download: /\.(jpg|png)/.test(post.url) ? post.url : (
            post.preview.images[0].source.url || post.thumbnail
          )
        })
      ))
  }
}

export default GetReddit
