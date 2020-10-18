import React from "react";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, imageUrl, caption }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="abdou"
          src="https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png"
        />
      </div>

      <h3>{username}</h3>
      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post_text">
        {" "}
        {username} : {caption}
      </h4>
    </div>
  );
}

export default Post;
