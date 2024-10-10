import React from 'react'

const Dashboard = () => {
    const user = localStorage.getItem("username");//getItem used to retrieve value from another component- key used
  return (
    <>
    <div>Dashboard</div>
    <div>
        Welcome {user}
    </div>
    </>
  )
}

export default Dashboard