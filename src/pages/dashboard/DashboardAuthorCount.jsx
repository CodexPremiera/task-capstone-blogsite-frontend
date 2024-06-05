import React, {useEffect, useState} from 'react';
import {formatDate} from "../../utils/formatDate.js";
import timeAgo from "../../utils/timeAgo.js";


function DashboardUserAccount({isAdmin = false} ) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getUserAccounts = () => {
      fetch(`http://localhost/capstone-blogsite/admin/author-count.php`)
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
    container: `flex flex-col gap-4 grow max-w-[728px] relative top-[57px] pt-12 mb-6 px-6`,
    header: `text-md font-bold `,
    userAccounts: `flex flex-col gap-2 text-base`,
    userAccountHeader: `grid grid-cols-2 font-bold`,
    userAccountEntry: `grid grid-cols-2`
  }

  return !isAdmin ? (<div>User is not an admin.</div>) : (
    <section className={style.container}>
      <h2 className={style.header}>List of User Accounts and their number of post</h2>
      <div className={style.userAccounts}>
        <div className={style.userAccountHeader}>
          <span>Full Name</span>
          <span>Post Count</span>
        </div>
        {list.map(item => (
          <div className={style.userAccountEntry}>
            <span>{`${item.Firstname} ${item.Lastname}`}</span>
            <span>{item.PostCount}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DashboardUserAccount;