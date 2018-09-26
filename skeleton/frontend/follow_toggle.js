class FollowToggle {
  constructor(el) {
    // debugger
    this.$el = $(el);
    console.log(`${this.$el}`);
    this.userId = this.$el.data('user-Id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
  }
  
  render(){
    let button = $('button');
    console.log(button);
    if (this.followState === 'followed') {
      button.text('Unfollow!');
    } else {
      button.text('Follow!');
    }
  }
  
  
}



module.exports = FollowToggle;