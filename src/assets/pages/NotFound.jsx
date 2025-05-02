import React from 'react';
import Layout from '../../components/Layout';




function NotFound() {
 

  return (
    <Layout>
    <div className="notfound">
      <div className="notfound__content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist or has been moved.</p>
        {/* <button className="notfound__button" onClick={handleGoHome}>Go to Homepage</button> */}
      </div>
    </div>
    </Layout>
  );
}

export default NotFound;
