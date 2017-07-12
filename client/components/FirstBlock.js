import '../styles/FirstBlock.sass';

import logo from '../../images/1-block-table.png';

import Media from 'react-media';

const FirstBlock = createReactClass({

    render() {
        return (
                    <Media query={{ maxWidth: 880}}>
                        {matches => matches ? (
                            <div className="FirstBlock clearfix" style={{ display: 'block' }}>
                                <div className="col-md-6">

                                <div className="left-block">
                                    <h1 style={{ fontSize: 25 }}>CONNECTING AGENCIES
                                        WITH THE LARGEST
                                        FREELANCE POOL OF
                                        STRATEGIC MEGA BRAINS</h1>
                                    <h2 style={{ fontSize: 15 }}>Powered by <span>x</span> <span>x</span> <span>x</span> <span>x</span> strategic guns
                                        for hire.</h2>
                                    <h3>Find the perfect strategist for your
                                        freelance gig today</h3>
                                </div>

                                </div>
                                <div className="lower-border"></div>
                                <div className="col-md-5 col-md-offset-1">

                                    <div className="img" ref={img => this.img = img}>
                                        <img src={logo} alt="img"/>
                                    </div>

                                </div>


                            </div>
                        ) : (
                            <div className="FirstBlock clearfix">
                                <div className="col-md-5">

                                    <div className="left-block">
                                        <h1>CONNECTING AGENCIES
                                            WITH THE LARGEST
                                            FREELANCE POOL OF
                                            STRATEGIC MEGA BRAINS</h1>
                                        <h2>Powered by <span>x</span> <span>x</span> <span>x</span> <span>x</span> strategic guns
                                            for hire.</h2>
                                        <h3>Find the perfect strategist for your
                                            freelance gig today</h3>
                                    </div>

                                </div>
                                <div className="lower-border"></div>
                                <div className="col-md-6 col-md-offset-1">

                                    <div className="img" ref={img => this.img = img}>
                                        <img src={logo} alt="img"/>
                                    </div>

                                </div>


                            </div>
                        )}
                    </Media>




        );
    }
});

export default FirstBlock;