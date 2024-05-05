import React, {useEffect, useState} from 'react'
import Header from "../../components/header/Header.jsx";
import {useCurrentUser} from "../../context/Context.jsx";
import Loading from "../../components/utils/Loading.jsx";
import DashboardContent from "./DashboardContent.jsx";

const Dashboard = () => {
  const currentUser = useCurrentUser();
  const userAccountId = currentUser.currentUser.ID_UserAccount;
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost/capstone-blogsite/admins/admin.php?userAccountId=${userAccountId}`);
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <main>
        <DashboardContent isAdmin={isAdmin} />
      </main>
    </div>
  );
}

export default Dashboard;