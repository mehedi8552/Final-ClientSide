// ProfilePage.js

import React, { useState } from 'react';

function ProfilePage() {
  //const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleProfilePictureChange = (e) => {
    // Handle profile picture change
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send request to change password
      // Update message state based on response
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center bg-primary text-white">
      <div>
        <h2>Profile Management</h2>
        <div className="mt-4">
          <h3>Change Profile Picture</h3>
          <input type="file" className="form-control" onChange={handleProfilePictureChange} />
        </div>
        <div className="mt-4">
          <h3>Change Password</h3>
          <form onSubmit={handlePasswordChange}>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password:</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-light" disabled={loading}>
              {loading ? 'Changing Password...' : 'Change Password'}
            </button>
          </form>
        </div>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
}

export default ProfilePage;
