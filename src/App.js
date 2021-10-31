import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import SignIn from './Pages/SignIn/SignIn';
import Menubar from './Pages/Shared/MenuBar/MenuBar';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceBooking from './Pages/PlaceBooking/PlaceBooking';
import MyBookings from './Pages/MyBookings/MyBookings';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import AddTour from './Pages/AddTour/AddTour';
import NotFound from './Pages/NotFound/NotFound';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/managebookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/addtour">
              <AddTour></AddTour>
            </PrivateRoute>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <PrivateRoute path="/booking/:id">
              <PlaceBooking></PlaceBooking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
