import React, {useEffect, useState} from 'react';
import {formatDate} from "../../utils/formatDate.js";


function DashboardContent( {isAdmin = false} ) {
  const [userAccounts, setUserAccounts] = useState([]);

  useEffect(() => {
    const getUserAccounts = () => {
      fetch(`http://localhost/capstone-blogsite/users/useraccounts-list.php`)
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
            setUserAccounts(data);
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
    post_feed: `flex-1 max-w-[728px] min-h-[1080px] relative top-[57px] py-12 px-6`,
    aside: `hidden lg:flex flex-1 max-w-fit h-full relative top-[57px] py-12 sticky relative border-l border-gray-200`,
    userAccountTile: `flex gap-2`
  }

  return (
    <div className={style.container}>
      <section className={style.post_feed}>
        {isAdmin ? (
          <div>
            <h2>Here is the list of user accounts:</h2>
            {userAccounts.map(userAccount => (
              <div className={style.userAccountTile}>
                <span>{userAccount.ID_UserAccount}</span>
                <span>{userAccount.Firstname}</span>
                <span>{userAccount.Lastname}</span>
                <span>{userAccount.Gender}</span>
                <span>{formatDate(userAccount.Birthdate)}</span>
                <span>{userAccount.Age}</span>
                <span>{userAccount.TotalPosts} Posts</span>
                <span>{userAccount.TotalLikes} Likes</span>
                <span>{userAccount.TotalReads} Reads</span>
              </div>
            ))}
          </div>
        ) : (
          <div>User is not an admin.</div>
        )}
      </section>
    </div>
  );
}

export default DashboardContent;