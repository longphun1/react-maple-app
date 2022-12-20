import { Routes, Route } from 'react-router-dom';
import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import PrivateRoutes from './routes/PrivateRoutes';
import Login from './routes/login/login.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import AddCharacter from './routes/addCharacter/addCharacter.component';
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
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route exact path='addCharacter' element={<AddCharacter />} />
            <Route exact path='addDaily' element={<AddDaily />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App;
