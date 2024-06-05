import React, {useEffect, useState} from 'react'
import Header from "../../components/header/Header.jsx";
import {useCurrentUser} from "../../context/Context.jsx";
import Loading from "../../components/utils/Loading.jsx";
import DashboardUserAccount from "./DashboardUserAccount.jsx";
import NotFound from "../notFound/NotFound.jsx";
import DashboardLikersCommenters from "./DashboardLikersCommenters.jsx";
import DashboardAuthorCount from "./DashboardAuthorCount.jsx";
import Statistics from "./Statistics.jsx";

const Dashboard = () => {
  const currentUser = useCurrentUser();
  const userAccountId = currentUser.currentUser.ID_UserAccount;
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost/capstone-blogsite/admin/admin.php?userAccountId=${userAccountId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.result) {
          console.log(data);
          setIsAdmin(true);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userAccountId]);

  const style = {
    container: `flex w-[100%]`,
    content: `flex grow w-fit mx-auto justify-center pb-12`
  }

  if (loading) return <Loading />;
  if (!isAdmin) return <NotFound />;
  return (
    <div>
      <Header />
      <main className={style.container}>
        <div className={style.content}>
          <div>
            <Statistics isAdmin={isAdmin} />
            <DashboardUserAccount isAdmin={isAdmin}/>
            <DashboardLikersCommenters isAdmin={isAdmin}/>
            <DashboardAuthorCount isAdmin={isAdmin} />
          </div>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;