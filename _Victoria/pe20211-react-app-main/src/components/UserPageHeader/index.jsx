import React, { createContext } from "react";
import { withUser } from "../HOCs";
import { UserContext } from "./../../contexts";
import styles from "./userPageHeader.module.scss";

function UserPageHeader(props) {
  const { user } = props;
  return (
    <div className={styles.headerDiv}>
            <span>{user.firstName}</span>
            
      <img src={user.imgSrc} />
          
    </div>
  );
}

export default withUser(UserPageHeader);
