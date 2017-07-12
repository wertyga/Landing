import '../styles/Footer.sass';

import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import play from '../../images/play.png';
import logo from '../../images/logo-footer.png';

import { Link } from 'react-router-dom';

const Footer = createReactClass({
    render() {
        return (
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="icons">
                                <Link to="/"><img src={facebook} alt="facebook"/></Link>
                                <Link to="/"><img src={twitter} alt="twitter"/></Link>
                                <Link to="/"><img src={play} alt="play"/></Link>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h4><Link to="/">ABOUT US</Link></h4>
                        </div>
                        <div className="col-md-1">
                            <h4><Link to="/">FAQ</Link></h4>
                        </div>
                        <div className="col-md-2">
                            <h4><Link to="/">PRIVACY POLICY</Link></h4>
                        </div>
                        <div className="col-md-2">
                            <h4><Link to="/">TERM OF USE</Link></h4>
                        </div>
                        <div className="col-md-3">
                            <h4><Link to="/">wertyga@gmail.com</Link></h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 logo">
                            <img src={logo} alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Footer;