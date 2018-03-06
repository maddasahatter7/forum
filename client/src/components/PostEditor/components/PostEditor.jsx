import React, { Component } from 'react';
import './PostEditor.css';
class PostEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPostBody: '',
        };

        this.handlePostEditorAddChange = this.handlePostEditorAddChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    handlePostEditorAddChange(ev) {
        this.setState({
            newPostBody: ev.target.value
        });
    }

    createPost() {
        this.props.addPost(this.state.newPostBody);
        this.setState({
            newPostBody: '',
        });
    }

    render() {
        return (
            <div className="panel panel-default post-editor-input">
                <div className="panel-body">
                    <textarea className="form-control post-editor-add" value={this.state.newPostBody} onChange={this.handlePostEditorAddChange} />
                    <button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
                </div>
            </div>
        )
    }
}

export default PostEditor;
