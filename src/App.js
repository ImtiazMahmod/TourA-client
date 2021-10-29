import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddTours from './Pages/Admin/AddTours';
import Home from './Pages/Home/Home/Home';
import NavAll from './Pages/Shared/NavAll';
import TourDetails from './Pages/TourPack/TourDetails/TourDetails';

function App() {
  return (
    <div className="App">
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
          <Route path="/addTours">
            <AddTours/>
          </Route>
          <Route path="/tour/:tourId">
            <TourDetails/>
          </Route>

          <Route>
          {/* <NotFound/> */}
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
