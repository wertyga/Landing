import '../styles/ThirdBlock.sass';

import Media from 'react-media';

import man from '../../images/3-block-1.png';
import second from '../../images/3-block-brain.png'
import third from '../../images/3-block-third.png';
import fourth from '../../images/3-block-4th.png';
import fifth from '../../images/3-block-5th.png';

import ItemThird from './ItemThird';

const ThirdBlock = createReactClass({

    render() {
        return (
            <div className="ThirdBlock clearfix">
                <div className="col-md-10 col-md-offset-1 text-center">

                        <Media query={{ maxWidth: 610 }}>
                            {matches => matches ? (
                                <div className="header no-padding" style={{ padding: 0 }}>
                                    <h2 style={{ fontSize: '30px' }}>HOW SIFTLYnow WORKS FOR FREELANCERS</h2>
                                </div>
                            ) : (
                                <div className="header">
                                    <h2>HOW SIFTLYnow WORKS FOR FREELANCERS</h2>
                                </div>
                            )}
                        </Media>

                </div>

                    <div className="row text-center">
                        <div className="col-md-2 item col-md-offset-1">
                            <ItemThird
                                header="CREATE PROFILE"
                                img={man}
                                text="Tell us who you are and what you are looking for"
                            />
                        </div>

                        <div className="col-md-2 item">
                            <ItemThird
                                header="BRAG A BIT"
                                img={second}
                                text="Let us know what your specialities and skills are"
                                imgStyle={{ width: '100%' }}
                            />
                        </div>

                        <div className="col-md-2 item">
                            <ItemThird
                                header="GET MATCHED"
                                img={third}
                                text="Sit back while we sift the perfect gig for you delivered straight to your inbox"
                                imgStyle={{ width: '100%' }}
                            />
                        </div>

                        <div className="col-md-2 item">
                            <ItemThird
                                header="CAPPLY"
                                img={fourth}
                                text="Choose to throw in your hat to any gig that interest you"
                                imgStyle={{ width: '70%' }}
                            />
                        </div>

                        <div className="col-md-2 item">
                            <ItemThird
                                header="GET HIRED"
                                img={fifth}
                                text="TeGet hired as our clients determines you as the perfect wo/man for the job"
                                imgStyle={{ width: '100%' }}
                            />
                        </div>
                    </div>
                </div>



        );
    }

});

export default ThirdBlock;