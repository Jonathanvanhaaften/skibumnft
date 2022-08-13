import Analytics from './Analytics'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
return (
<Analytics>
  <Navbar/>
  {  children }
  <Footer/>
</Analytics>


);
}
export default Layout;