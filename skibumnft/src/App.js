import React,{ Component,Fragment } from "react";
import { Route,Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet } from "react-helmet";


// Analytics tracking 
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';




//img & css 
import title_png from '../src/images/hero5.png'

// Redux 
// import { Provider } from 'react-redux';
// import store from './store';

//  Components
import Navbar from './components/nav/Navbar';
import Links from './components/content/Links';
// import About from './components/content/About';
import Footer from './components/content/Footer';
import Dashboard from './components/content/Dashboard'
import Gallery from './components/content/Gallery'
import Stories from "./components/content/Stories";


ReactGA.initialize(process.env.REACT_APP_GOOGLE_UA);
const history = createBrowserHistory();


// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


class App extends Component{
  componentDidMount(){
    ReactGA.pageview(window.location.pathname)
    
  }
  
     render(){
  
  
         return <Fragment >
             
               <Router history={history}>
                <Fragment  > 
                  <div className="bg-black ">
                  <Navbar />
                  <div className="flex justify-center">
                    <img className="  lg:h-87 md:h-90" src={title_png} alt="" />
                            </div>   
                      {/* helmet meta data for seo */}
                      <Helmet>
                        <html lang="en"/>
                        <title>Ski Bum NFT</title>
                        <meta name="description" content="Creating NFTs, supporting the NFT art and artist. Bringing together 
                        a strong community of big mountain enthusiasts and NFT enthusiasts. To bring our community into  several Metaverse"/>
                         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                      </Helmet>
                     
                    {/* Start of components */}
                   
                    <Routes>
                    <Route exact path="/" element={<Dashboard className="mb-5 pb-10"/>}/>
                    <Route exact path="/gallery" element={<Gallery/>}/>
                    <Route exact path="/links" element={<Links/>}/>
                    <Route exact path="/stories" element={<Stories/>}/>
                    </Routes>
              <Footer className="m-15 pt-3"/>
                        
                     </div>
                      
                   </Fragment>
                  </Router>              
                
                  </Fragment>
                 
     }
 };

export default App;
