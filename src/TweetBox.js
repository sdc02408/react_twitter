import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from "@material-ui/core"

function TweetBox () {
  return(
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src=""/>
          <input placeholder="what's happening?" type="text"/>
        </div>
        <input className="tweetBox_imageInput" placeholder="enter iamge url" type="text"/>
        <Button className="tweetBox_tweetButton">Tweet</Button>
      </form>
    
    </div>
  )
}

export default TweetBox
