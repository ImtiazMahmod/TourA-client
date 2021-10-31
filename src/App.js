import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import AddTours from './Pages/Admin/AddTours';
import ManageTourOrders from './Pages/Admin/ManageTour';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import NavAll from './Pages/Shared/NavAll';
import NotFound from './Pages/Shared/NotFound/NotFound';
import TourDetails from './Pages/TourPack/TourDetails/TourDetails';
import TourPack from './Pages/TourPack/TourPack';
import MyTours from './Pages/User/MyTours/MyTours';

function App() {
 
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <NavAll />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/tourPackages">
            <TourPack/>
          </Route>
          <PrivateRoute path="/addTours">
            <AddTours/>
          </PrivateRoute>
          <PrivateRoute path="/placeOrder/:tourId">
          <PlaceOrder/>
          </PrivateRoute>
          <PrivateRoute path="/tour/:tourId">
            <TourDetails/>
          </PrivateRoute>
          <PrivateRoute path="/myTours">
            <MyTours/>
          </PrivateRoute>
          <PrivateRoute path="/manageOrders">
            <ManageTourOrders/>
          </PrivateRoute>

          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
              <NotFound/>
              
          </Route>
        </Switch>
        <Footer/>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
