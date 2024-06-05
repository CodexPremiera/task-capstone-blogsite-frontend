import React, {useEffect, useState} from 'react';
import {formatDate} from "../../utils/formatDate.js";
import timeAgo from "../../utils/timeAgo.js";


function Statistics({isAdmin = false} ) {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const getStatistics = () => {
      fetch(`http://localhost/capstone-blogsite/admin/statistics.php`)
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
            setStatistics(data);
            console.log(data);
          }
        })
        .catch((error) => {
          console.error(`Failed to get posts: ${error}`);
        });
    }

    getStatistics();
  }, []);

  const style = {
    container: `flex flex-col gap-4 grow max-w-[728px] relative top-[57px] pt-12 mb-6 px-6`,
    header: `text-md font-bold `,
    contents: `flex flex-col gap-2 text-base`,
    userAccountHeader: `grid grid-cols-2 font-bold`,
    userAccountEntry: `grid grid-cols-2`
  }

  return !isAdmin ? (<div>User is not an admin.</div>) : (
    <section className={style.container}>
      <h2 className={style.header}>The website at a glance</h2>
      <div className={style.contents}>
        <div className={style.userAccountEntry}>
          <span>Total Accounts</span>
          <span>{statistics.NumberOfAccounts}</span>
        </div>
        <div className={style.userAccountEntry}>
          <span>Total Posts</span>
          <span>{statistics.NumberOfPosts}</span>
        </div>
        <div className={style.userAccountEntry}>
          <span>Author Rate</span>
          <span>{statistics.AuthorRate}</span>
        </div>
        <div className={style.userAccountEntry}>
          <span>Average React</span>
          <span>{statistics.AverageReact}</span>
        </div>
        <div className={style.userAccountEntry}>
          <span>Average Comment</span>
          <span>{statistics.AverageComment}</span>
        </div>
      </div>
    </section>
  );
}

export default Statistics;