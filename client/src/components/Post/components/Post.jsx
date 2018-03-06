import React from 'react';
import './Post.css';

const Post = (props) => (
    <div className="panel panel-default panel-post">
        <div className="panel-body">
           { props.postBody }
           <br />
           <div className="link">
           <a href="url">View Thread | </a>
           <a href="url">Post To Thread</a>
           {/* <button type="button" className="btn btn-sml">
                <span className="glyphicon glyphicon-hand-up up" aria-hidden="true"></span> Star
                <span className="glyphicon glyphicon-hand-down down" aria-hidden="true"></span> Star
                </button> */}
            </div>
</div>
</div>
    
);

export default Post;