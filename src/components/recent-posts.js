import React, { Component } from 'react';

export default class RecentPosts extends Component {
  render() {
    return (
      <div className='recent-posts'>
        <div className='recent-posts-wrapper'>
          <div className='recent-posts-heading'></div>
          <ul className='recent-posts-posts'>
            <li>recent posts 0</li>
            <li>recent posts 1</li>
            <li>recent posts 2</li>
          </ul>
        </div>

      </div>
    );
  }
}
