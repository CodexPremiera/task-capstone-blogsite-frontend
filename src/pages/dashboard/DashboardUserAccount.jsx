import React, {useEffect, useState} from 'react';
import {formatDate} from "../../utils/formatDate.js";
import timeAgo from "../../utils/timeAgo.js";


function DashboardUserAccount({isAdmin = false} ) {
  const [userAccounts, setUserAccounts] = useState([]);

  useEffect(() => {
    const getUserAccounts = () => {
      fetch(`http://localhost/capstone-blogsite/admin/useraccounts-list.php`)
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
    header: `text-md font-bold `,
    useraccounts: `flex flex-col gap-4 grow max-w-[728px] relative top-[57px] pt-12 pb-6 px-6`,
    userAccounts: `flex flex-col gap-2 text-base`,
    userAccountHeader: `grid grid-cols-5 font-bold`,
    userAccountEntry: `grid grid-cols-5`
  }

  return !isAdmin ? (<div>User is not an admin.</div>) : (
    <section className={style.useraccounts}>
      <h2 className={style.header}>List of User Accounts and their creation date</h2>
      <div className={style.userAccounts}>
        <div className={style.userAccountHeader}>
          <span>Username</span>
          <span>Firstname</span>
          <span>Lastname</span>
          <span>Date Created</span>
          <span>Account Age</span>
        </div>
        {userAccounts.map(userAccount => (
          <div className={style.userAccountEntry}>
            <span>{userAccount.Username}</span>
            <span>{userAccount.Firstname}</span>
            <span>{userAccount.Lastname}</span>
            <span>{formatDate(userAccount.CreateTime)}</span>
            <span>{`${timeAgo(userAccount.CreateTime)} old`}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DashboardUserAccount;