import React from 'react';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client: auth2', () => {
      window.gapi.client.init({
        clientId: '921621248845-6q873cf6mfkj80bsi8a4ia9rtefd8efl.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth;
