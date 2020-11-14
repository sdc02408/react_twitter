import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button} from "@material-ui/core"
import db from './firebase'


function TweetBox () {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')
  const sendTweet = (e) => {
    e.preventDefault();
    
    db.collection("posts").add({
      displayName: "yang tweet",
      username: "yang",
      verified: true,
      text: tweetMessage,
      avatar: tweetImage,
      image: tweetImage,
    })
    setTweetMessage("")
      setTweetImage("")
   
    

  }
  
  return(
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src=""/>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} placeholder="what's happening?" type="text"/>
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox_imageInput" placeholder="enter iamge url" type="text"/>
        <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
      </form>
    
    </div>
  )
}

export default TweetBox
