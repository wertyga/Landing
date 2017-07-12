import '../styles/Worker.sass';

import Media from 'react-media';

import calendar from '../../images/calendar.png';
import link from '../../images/Link.png'

import { Link } from 'react-router-dom';


const Worker = createReactClass({
    render() {
        return (
                <Media query={{ maxWidth: 992 }}>
                    {matches => matches ? (
                        <div className="Worker clearfix">
                            <div className="header" style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4 style={{ fontSize: 20 }}>ACCOUNT PLANNER</h4>
                                <h5 style={{ fontSize: 20 }}>Experience: 8-12 years</h5>
                                <div className="calendar">
                                    <img src={calendar} alt="calendar"/>
                                    <p>Jan 7</p>
                                </div>
                                <div className="link">
                                    <img src={link} alt="link"/>
                                    <Link to="/">Direct link</Link>
                                </div>
                            </div>
                            <div className="center">
                                <p style={{ fontSize: 20 }}><span style={{ color: '#0a4064' }}>INNOCEAN</span> IS LOOKING FOR A <span style={{ color: '#18c1e3' }}>RAZOR SHARP PLANNING DIRECTOR</span> IN HUNTINGTING. MUST BE AN INSIGHT HOUND AND PERFORMANCE DRIVEN</p>
                                </div>
                                <div className="footer" style={{ display: 'flex', flexDirection: 'column' }}>
                                <p style={{ fontSize: 20 }}><span className="firstSpan">REQUIRED SKILLS:</span>Brand strategy, Brand trackling study</p>
                                <Link to="/api/apply" style={{ marginTop: 20 }}>Apply</Link>
                                </div>
                        </div>
                    ) : (
                        <div className="Worker clearfix">
                            <div className="header">
                                <h4>ACCOUNT PLANNER</h4>
                                <h5>Experience: 8-12 years</h5>
                                <div className="calendar">
                                    <img src={calendar} alt="calendar"/>
                                    <p>Jan 7</p>
                                </div>
                                <div className="link">
                                    <img src={link} alt="link"/>
                                    <Link to="/">Direct link</Link>
                                </div>
                            </div>
                            <div className="center">
                                <p><span style={{ color: '#0a4064' }}>INNOCEAN</span> IS LOOKING FOR A <span style={{ color: '#18c1e3' }}>RAZOR SHARP PLANNING DIRECTOR</span> IN HUNTINGTING. MUST BE AN INSIGHT HOUND AND PERFORMANCE DRIVEN</p>
                                </div>
                                <div className="footer">
                                <p><span className="firstSpan">REQUIRED SKILLS:</span>Brand strategy, Brand trackling study</p>
                                <Link to="/api/apply">Apply</Link>
                                </div>
                        </div>
                    )}
                </Media>
        )
    }
});

export default Worker;