import React, { forwardRef} from 'react'
import './Post.css';
import {Avatar} from "@material-ui/core"
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUserIcon"
// import ChatBubbleOutlineIcon from "@material-ui/icons/VerifiedUserIcon"
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublishIcon from '@material-ui/icons/Publish';
import BeenhereIcon from '@material-ui/icons/Beenhere';
const Post = forwardRef(
({
  displayName,
  username,
  verified,
  text,
  image,
  avatar}, ref) => {
  
  return(
    <div className="post" ref={ref}>
     
      <div className="post_avatar">
        <Avatar></Avatar>
      </div>
     
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              {displayName}{" "}
              <span className="post_headerSpecial">
                
                {verified &&
                <BeenhereIcon className="post_badge"/>}
                  @{username}
                
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt =""/>
  
        <div className="post_footer">
          <ChatBubbleIcon fontSize="small"/>
          <RepeatIcon fontSize="Small"/>
          <FavoriteIcon fontSize="small" />
          <PublishIcon fontSize="small"/>
        </div>

      </div>
     
     
    </div>
  )
}
)

export default Post
