import AboutUsPage from './layouts/AboutUsPage/AboutUsPage';
import Auth from './layouts/AuthPage/Auth';
import Contact from './layouts/ContactPage/Contact';
import DojoManagementPage from './layouts/DojoManagement/DojoManagementPage';
import DojoMemberPage from './layouts/DojoMemberPage/DojoMemberPage';
import AddMainBlog from './layouts/Homepage/AddMainBlog';
import Homepage from './layouts/Homepage/Homepage';
import Navbar from './layouts/Navbar/Navbar';
import { Redirect, Route, Routes, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            {/* <section> */}
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home' />
                </Route>
                <Route path='/home'>
                    <Homepage />
                </Route>
                <Route path='/dojo'>
                    <DojoManagementPage />
                </Route>
                <Route path='/about-us'>
                    <AboutUsPage />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/mainblog/add'>
                    <AddMainBlog />
                </Route>
                <Route path='/auth'>
                    <Auth />
                </Route>
                <Route path='/tagok'>
                    <DojoMemberPage />
                </Route>
            </Switch>
            {/* </section> */}
        </div>
    );
}

export default App;
