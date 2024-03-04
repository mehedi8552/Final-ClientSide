// ProfilePage.js

import React, { useState } from 'react';
import orange from '../../assets/orange.png'
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
    <div className='h-screen'>
    <div className="flex w-80 p-4 justify-center items-center mx-auto bg-green-600 rounded-xl m-16">
      <div>
        <p className='font-bold flex justify-center text-lg'>Profile Management</p>
        <div className="mt-4">
          <p className='font-medium'>Change Profile Picture</p>
          <input type="file" className="form-control" onChange={handleProfilePictureChange} />
        </div>
        <div className="mt-4">
          <p className='font-medium'>Change Password</p>
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
            <button type="submit" className="btn btn-light mb-2" disabled={loading}>
              {loading ? 'Changing Password...' : 'Change Password'}
            </button>
          </form>
        </div>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
    </div>

  );
}

export default ProfilePage;
