import '../styles/SecondBlock.sass';

import Media from 'react-media';

import Button from './Button';

import house from '../../images/2-block-house.png';
import people from '../../images/2-block-people.png';

const SecondBlock = createReactClass({
    render() {
        return (
            <div className="SecondBlock clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <Media query={{ maxWidth: 570 }}>
                                {matches => matches ? (
                                    <div className="header">
                                        <h2 style={{ fontSize: 30 }}>JOIN THE ONLY SMART JOB MATCHING SITE FOR
                                            STRATEGISTS AND PLANNERS</h2>
                                    </div>
                                ) : (
                                    <div className="header">
                                        <h2>JOIN THE ONLY SMART JOB MATCHING SITE FOR
                                            STRATEGISTS AND PLANNERS</h2>
                                    </div>
                                )}
                            </Media>


                        </div>

                        <Media query={{ maxWidth: 992 }}>
                            {matches => matches ? (
                            <div className="row">
                                <div className="col-md-6">

                                    <div className="wrapper">
                                        <img src={house} alt="house"/>

                                        <Button
                                            label="FIND GIGS"
                                        />

                                    </div>

                                </div>
                                <div className="divider"></div>
                                <div className="col-md-6">

                                    <div className="wrapper people">
                                        <img src={people} alt="house"/>

                                        <Button
                                            label="FIND FREELANCERS"
                                        />

                                    </div>

                                </div>
                            </div>
                            ) : (
                                <div>
                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="wrapper">
                                                <img src={house} alt="house"/>
                                            </div>

                                        </div>
                                        <div className="divider"></div>
                                        <div className="col-md-6">

                                            <div className="wrapper people">
                                                <img src={people} alt="house"/>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="buttons">
                                            <div className="col-md-6">
                                                <Button
                                                    label="FIND GIGS"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <Button
                                                    label="FIND FREELANCERS"
                                                />
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            )}
                        </Media>


                    </div>
                </div>

            </div>
        )
    }

});

export default SecondBlock