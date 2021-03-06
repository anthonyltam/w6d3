const APIUtil = require('./api_util.js');


class FollowToggle {
  constructor(el) {
    // debugger
    this.$el = $(el);
    // console.log(`${this.$el}`);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }
  
  // render() {
  //   let button = $('button');
  //   if (this.followState === 'followed') {
  //     button.text('Unfollow!');
  //   } else {
  //     button.text('Follow!');
  //   }
  // }
  
  render() {
  switch (this.followState) {
    case 'followed':
      this.$el.prop('disabled', false);
      this.$el.html('Unfollow!');
      break;
    case 'unfollowed':
      this.$el.prop('disabled', false);
      this.$el.html('Follow!');
      break;
    case 'following':
      this.$el.prop('disabled', true);
      this.$el.html('Following...');
      break;
    case 'unfollowing':
      this.$el.prop('disabled', true);
      this.$el.html('Unfollowing...');
      break;
  }
}
  
  handleClick(e) {
    const followToggle = this;
    e.preventDefault();
    
    if (this.followState === 'followed') {
      this.followState = 'unfollowing';
      this.render();
      APIUtil.unfollowUser(this.userId).then(() => {
        followToggle.followState = 'unfollowed';
        followToggle.render();
    });
  } else if (this.followState === 'unfollowed') {
    this.followState = 'following';
    this.render();
    APIUtil.followUser(this.userId).then(() =>  {
      followToggle.followState = 'followed';
      followToggle.render();      
    });
  }

  }
}


module.exports = FollowToggle;