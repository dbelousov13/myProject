import React, { createContext } from "react";
import { withUser } from "../HOCs";
import { UserContext } from "./../../contexts";
import styles from "./userPageSidebar.module.scss";

function UserPageSidebar(props) {
  const { user } = props;
  return (
    <div className={styles.sidebarDiv}>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
            
      <img src={user.imgSrc} />
          
    </div>
  );
}

export default withUser(UserPageSidebar);
