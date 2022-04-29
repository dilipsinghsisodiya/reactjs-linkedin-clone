import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {

        // user is logged in
        dispatch( 
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL || '',
          })
        );

      } else {

        // user is logged in
        dispatch( logout() );

      }
    });
  }, []);

  return (  

    <div className="App"> 

        <Header /> 

        {!user ? (
          <Login />
        ) : (
          <div className="app__body">

          <Sidebar />
          <Feed />
          <Widgets />

        </div>
        )}
    </div>
  );
}

export default App;
  