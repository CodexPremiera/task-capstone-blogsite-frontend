import React, {useEffect, useState} from 'react';
import {formatDate} from "../../utils/formatDate.js";
import timeAgo from "../../utils/timeAgo.js";


function DashboardLikersCommenters({isAdmin = false} ) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getUserAccounts = () => {
      fetch(`http://localhost/capstone-blogsite/admin/likers-comments-list.php`)
        .then((response) => {
          switch (true) {
            case response.ok:
              return response.json();

            default:
              //  sendErrorMessage("Failed to connect to the server.");
              break;
          }
        })
        .then((data) => {
          if (data !== null) {
            setList(data);
          }
        })
        .catch((error) => {
          console.error(`Failed to get posts: ${error}`);
        });
    }

    getUserAccounts();
  }, []);

  const style = {
    container: `flex flex-row max-w-[1336px] justify-evenly mx-auto`,
    header: `text-md font-bold `,
    useraccounts: `flex flex-col gap-4 grow max-w-[728px] relative top-[57px] pt-12 mb-6 px-6`,
    userAccounts: `flex flex-col gap-2 text-base`,
    userAccountHeader: `grid grid-cols-2 font-bold`,
    userAccountEntry: `grid grid-cols-2`
  }

  return !isAdmin ? (<div>User is not an admin.</div>) : (
    <section className={style.useraccounts}>
      <h2 className={style.header}>List of User Accounts that both commented and liked posts.</h2>
      <div className={style.userAccounts}>
        <div className={style.userAccountHeader}>
          <span>Fullname</span>
          <span>Post Title</span>
        </div>
        {list.map(item => (
          <div className={style.userAccountEntry}>
            <span>{`${item.Firstname} ${item.Lastname}`}</span>
            <span>{item.PostTitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DashboardLikersCommenters;