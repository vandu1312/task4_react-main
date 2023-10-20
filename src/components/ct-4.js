import React, { useState, useEffect } from 'react';
import './ct-4.css';
import maleIcon from '../images/male-icon.png'; // Update the path to the actual location
import femaleIcon from '../images/female-icon.png'; // Update the path to the actual location

const Task4Component = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API Response:', data); // Log the API response

        // Adjust this based on the actual structure of the API response
        const userData = data ? (data.users ? data.users : []) : [];

        setData(userData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="task4">
      <h1>Dummy Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Profile Picture</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>
                    {user.gender === 'male' ? (
                      <img src={maleIcon} alt="Male" className="profile-icon" />
                    ) : (
                      <img src={femaleIcon} alt="Female" className="profile-icon" />
                    )}
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.domain}</td>
                  <td>{user.ip}</td>
                  <td>{user.university}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Task4Component;
