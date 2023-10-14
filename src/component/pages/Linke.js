import React from 'react';
import axios from 'axios';

const LinkedInAuth = () => {
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=8600jbmcddcu1z&redirect_uri=http://localhost:3000/callback&state=foobar&scope=r_liteprofile%20r_emailaddress`;

  const handleAuth = async () => {
    // Redirect the user to LinkedIn for authentication
    window.location.href = authUrl;
  };

  return (
    <button onClick={handleAuth}>Connect via LinkedIn</button>
  );
}

export default LinkedInAuth;
