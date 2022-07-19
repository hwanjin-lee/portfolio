import React, { useState } from "react";
import styles from "../../styles/components/Likes.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp as farThumbsUp,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import {
  faThumbsUp as fasThumbsUp,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const Likes = ({ onComment }) => {
  library.add(farThumbsUp, fasThumbsUp);
  const [liked, setLiked] = useState(0);

  const handleLike = () => {
    if (liked == 0) {
      setLiked((liked += 1));
    } else if (liked == 1) {
      setLiked((liked -= 1));
    }
  };
  const likeIconPop = () => {
    if (liked == 0) {
      return "";
    } else if (liked == 1) {
      return (
        <Image
          src="/icon/liked_reaction.png"
          alt=""
          width="20px"
          height="20px"
        />
      );
    }
  };
  const likeText = () => {
    if (liked == 0) {
      return "Like";
    } else if (liked == 1) {
      return "Liked";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.reaction}>{likeIconPop()}</div>
      <hr className="noPaddingHr" />
      <div className={styles.buttons}>
        <div className={styles.button} onClick={() => handleLike()}>
          <div
            className={styles.icon}
            style={
              liked == 0
                ? { color: "var(--color-primary-font)" }
                : { color: "#3F51B5" }
            }
          >
            <FontAwesomeIcon icon={liked == 0 ? farThumbsUp : fasThumbsUp} />
          </div>
          <div>{likeText()}</div>
        </div>
        <div className={styles.button} onClick={() => onComment()}>
          <FontAwesomeIcon icon={faMessage} className={styles.icon} />
          <div>Comment</div>
        </div>
      </div>
    </div>
  );
};

export default Likes;
