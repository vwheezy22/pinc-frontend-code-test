import React, {Component} from 'react';

import styles from '../assets/css/Feed.css';

export default class Feed extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="feed">
                <div className={styles.content}>
                    <div className={styles.conversation}>
                        <img></img>
                        <textarea placeholder="Start a conversation..."></textarea>
                    </div>
                </div>

                <div>
                    <nav className={styles.nav}>
                        <ul>
                            <li className={styles.active}><a href="/">Posts</a></li>
                            <li><a href="#">Polls</a></li>
                        </ul>
                    </nav>
                    <div className={styles.feedHead}> <h3>Post of the Day </h3></div>
                    <div className="startFeed">
                        <PostItems />
                    </div>
                </div>
            </div>
        );
    }
}