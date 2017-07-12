import '../styles/UpperBar.sass';
import logo from '../../images/logo.png';
import Media from 'react-media';

import ButterMenu from './ToggleButerMenu/ToggleButerMenu';
import Button from './Button';
import Modal from './Modal';

import findAGig from '../fidAGig';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

let get = true;


const UpperBar = createReactClass({

    getInitialState() {
        return {
            modal: false,
            list: []
        }
    },

    request() {
        if(get) {
            get = false;
            this.props.findAGig().then(res => {
                setTimeout(() => { get = true }, 2000)
                this.setState({
                    list: res.filter(item => item.id == 30),
                    modal: true
                });
            });
        }

    },

    closeClick() {
        this.setState({
            modal: false
        });
    },

    render() {
        return (
                <Media query={{ maxWidth: 1050 }}>
                    {matches => matches ? (
                        <Media query={{ maxWidth: 790 }}>
                            {matches => matches ? (
                                <div className="UpperBar clearfix" style={{ display: 'flex', alignItems: 'center' }}>
                                    {this.state.modal && <Modal
                                        list={this.state.list}
                                        closeClick={this.closeClick}
                                    />}
                                    <div className="col-xs-6">
                                        <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="menu">
                                            <ButterMenu
                                                links={[
                                                    <div className="a" onClick={this.request}>find a gig</div>,
                                                    <div className="a">post a gig</div>,
                                                    <Link to="/">how it works</Link>,
                                                    <Link to="/">invite</Link>,
                                                    <Link className="login" to="/login">Log in</Link>
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="UpperBar clearfix">
                                    {this.state.modal && <Modal
                                        list={this.state.list}
                                        closeClick={this.closeClick}
                                    />}
                                    <div className="col-xs-4 col-xs-offset-4">
                                        <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="buttons text-center" style={{ marginTop: 20 }}>
                                            <button onClick={this.request}>find a gig</button>,
                                            <button>post a gig</button>,
                                            <Link to="/">how it works</Link>
                                            <Link to="/">invite</Link>
                                            <Link className="login" to="/login">Log in</Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Media>

                    ) : (
                        <div className="UpperBar clearfix">
                            <div className="col-md-2">
                                <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
                            </div>
                            <div className="col-md-9 col-md-offset-1">
                                <div className="buttons text-right">
                                    <Button label="find a gig"/>
                                    <Button label="post a gig"/>
                                    <Link to="/">how it works</Link>
                                    <Link to="/">invite</Link>
                                    <Link className="login" to="/login">Log in</Link>
                                </div>
                            </div>
                        </div>
                    )}

                </Media>


        );
    }

});

export default connect(null, { findAGig })(UpperBar);