import React, { useState } from 'react'

const Data = () => {
    let [userData, setUserData] = useState({
        name : 'Farazam',
        degree : 'BSCS',
        cgpa : '3.21'
    });

    let changeData = ()=>{
    setUserData({
            name :  prompt('Enter Your Data'),
            degree :  prompt('Enter Your Degree Name'),
            cgpa : prompt('Enter Your CGPA')

    })}
  return (
    <>
        <h1>{userData.name}</h1>
        <h1>{userData.degree}</h1>
        <h1>{userData.cgpa}</h1>
        <button onClick={changeData}>Enter Your Data</button>
    </>
  )
}

export default Data;
