import React, {useState} from 'react'

import like_icon from './images/like.svg';
import comment from './images/comment.svg';
import share from './images/share.svg';
import like_blue from './images/like_blue.svg';


function Review({ post }) {

    const [like, setLike] = useState(post);

    const handleOnClick = () => {
        if (!like.isLiked) {
            setLike({...like, isLiked: !like.isLiked, likes: like.likes + 1})
        } else {
            setLike({...like, isLiked: !like.isLiked, likes: like.likes - 1})
        }
    }

    return (
            <div class="review">
                <div class="profile">
                    <div class="profile__photo">
                        <a href="https://www.facebook.com/audenis.lt">
                            <img src={post.profile.photo} />
                        </a>
                    </div>
                    <div class="profile__info">
                        <p class="title"><a class="inline-link" target="_blank" href={post.profile.url}>{post.profile.name}</a>
                        <a href={post.profile.url} target="_blank" class="showProfile">
                            <div class="showProfile__cover" style={{'backgroundImage': `linear-gradient(to bottom, rgba(0,0,0,0),  rgba(0,0,0,0.6)), url('${post.profile.cover}')`, 'backgroundSize':'cover', 'backgroundPosition': 'center center'}}>
                            </div>
                            <div class="showProfile__photo">
                                <div class="image">
                                    <img src={post.profile.photo} />
                                </div>
                                <div class="info">
                                    <div class="title"><strong>{post.profile.name}</strong></div>
                                    {/* <div class="margin-top">{post.profile.description}</div> */}
                                    <div>{post.profile.pageLikes} žmonės (-ių) like this</div>
                                </div>
                            </div>
                        </a>
                        </p>
                        <p class="date">{post.date}</p>
                    </div>
                </div>
                <div class="comment">
                    {post.comment} {post.smile && post.smile}
                </div>
                <div class="buttons">
                    <div class="buttons__item" onClick={() => handleOnClick()}>
                        {like.isLiked ? 
                            <img src={like_blue} />
                            :
                            <img src={like_icon} />
                        }

                        {like.isLiked ? 
                            <p style={{'color': '#3E6094'}}>{like.likes}</p>
                            :
                            <p>{like.likes}</p>
                        }
                    </div>
                    <div class="buttons__item">
                        <img src={comment} />
                        <p>{post.comments}</p>
                    </div>
                    <div class="buttons__item">
                        <img src={share} />
                        <p>{post.shares}</p>
                    </div>
                </div>
            </div>
    )
}

export default Review
