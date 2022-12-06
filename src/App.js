import { Routes, Route } from 'react-router-dom';
import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import PrivateRoutes from './routes/PrivateRoutes';
import Login from './routes/login/login.component';
import Home from './routes/home/home.component';
import AddDaily from './routes/addDaily/addDaily.component';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubsribe;
  }, [dispatch]);

  return (
    <Fragment>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/add' element={<AddDaily />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App;
