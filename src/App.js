// import logo from './logo.svg';
// import { BrowserRouter, Link } from 'react-router-dom';
// import Home from './component/Home';
// import Learn from './component/Learn';
// import Reference from './component/Reference';
// import Community from './component/Community';
// import Blog from './component/Blog';
// import Navbar from './component/Navbar';
// import { Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      {/* <BrowserRouter>
        <nav>
          <ul>            
            <li>
              <Link to="/"><a></a></Link>
            </li>
            <li>
              <Link to="/learn"><a>Learn</a></Link>
            </li>
            <li>
              <Link to="/reference"><a>Reference</a></Link>
            </li>
            <li>
              <Link to="/community"><a>Community</a></Link>
            </li>
            <li>
              <Link to="/blog"><a>Blog</a></Link>
            </li>
          </ul>

        </nav>

        <Switch>
          <Route exact path="/navbar" component={Navbar} />
          <Route exact path="/" component={Home} />
          <Route path="/learn" component={Learn} />
          <Route path="/reference" component={Reference} />
          <Route path="/community" component={Community} />
          <Route path="/blog" component={Blog} />
        </Switch>

      </BrowserRouter> */}

    </>
  );
}

export default App;
