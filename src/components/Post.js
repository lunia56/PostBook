import React from 'react';
import "../styles/App.css"

export const Post = (props) => {

    return (
        <div className='App'>
            <div className='Post' >
                <div className='post__content'>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className='post__btns'>
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    )
}

