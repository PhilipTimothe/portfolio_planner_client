import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompanySearchContainer from './containers/CompanySearchContainer';
import CompanyContainer from "./containers/CompanyContainer";
import PortfolioContainer from "./containers/PortfolioContainer";
import { NavbarComponent } from './components/NavbarComponent'
import LandingPageContainer from './containers/LandingPageContainer';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/portfolio_planner_client" exact component={LandingPageContainer} />
        <Route path="/search" exact component={CompanySearchContainer} />
        <Route path="/company-overview/:id" exact component={CompanyContainer} />
        <Route path="/portfolio" exact component={PortfolioContainer} />
      </Switch>
    </Router>
  );
}

export default App;