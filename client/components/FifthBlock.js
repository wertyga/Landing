import '../styles/FifthBlock.sass';

import Worker from './Worker';

import Media from 'react-media';

import Button from './Button';

const FifthBlock = createReactClass({
    render() {
        return (

                <Media query={{ maxWidth: 992 }}>
                    {matches => matches ? (
                        <div className="FifthBlock clearfix" style={{ paddingRight: 20, paddingLeft: 20 }}>
                            <div className="header">
                                <h3>CURRENTLY SIFTING FOR</h3>
                            </div>
                        <div className="main-block" style={{ fontSize: 11, padding: 0 }}>
                            <ul style={{ justifyContent: 'space-around' }}>
                                <li style={{ width: '40%' }}><button>ACCOUNT <br/>PLANNER</button></li>
                                <li style={{ width: '40%' }}><button> BRAND <br/>CONSULTANTS</button></li>
                            </ul>
                            <ul style={{ justifyContent: 'space-around' }}>
                                <li style={{ width: '40%' }}><button>PLANNER</button></li>
                                <li style={{ width: '40%' }}><button> CONTENT <br/>STRATEGIST</button></li>

                            </ul>
                            <ul style={{ justifyContent: 'space-around' }}>
                                <li style={{ width: '40%' }}><button> DESIGN <br/>STRATEGIST</button></li>
                                <li style={{ width: '40%' }}><button> DESIGN <br/>STRATEGIST</button></li>
                            </ul>
                            <ul style={{ justifyContent: 'space-around' }}>
                                <li style={{ width: '40%' }}><button>ANALYST</button></li>
                                <li style={{ width: '40%' }}><button>CRM <br/>STRATEGIST</button></li>
                            </ul>

                            <ul style={{ justifyContent: 'space-around' }}>
                                <li style={{ width: '40%' }}><button>ACCOUNT <br/>PLANNER</button></li>
                                <li style={{ width: '40%' }}><button> BRAND <br/>CONSULTANTS</button></li>
                            </ul>
                            <ul style={{ justifyContent: 'space-around' }}>
                                <li style={{ width: '40%' }}><button>PLANNER</button></li>
                                <li style={{ width: '40%' }}><button> CONTENT <br/>STRATEGIST</button></li>

                            </ul>
                            <ul style={{ justifyContent: 'space-around' }}>
                                <li style={{ width: '40%' }}><button> DESIGN <br/>STRATEGIST</button></li>
                                <li style={{ width: '40%' }}><button> DESIGN <br/>STRATEGIST</button></li>
                            </ul>
                            <ul style={{ justifyContent: 'space-around' }}>
                                <li style={{ width: '40%' }}><button>ANALYST</button></li>
                                <li style={{ width: '40%' }}><button>CRM <br/>STRATEGIST</button></li>
                            </ul>

                        </div>
                            <Worker />
                            <Worker />
                            <Worker />
                            <h3>Load more</h3>
                        </div>

                    ) : (
                        <div className="FifthBlock clearfix">
                            <div className="header">
                                <h3>CURRENTLY SIFTING FOR</h3>
                            </div>
                        <div className="main-block">
                            <ul>
                                <li><button>ACCOUNT <br/>PLANNER</button></li>
                                <li><button> BRAND <br/>CONSULTANTS</button></li>
                                <li><button>ANALYST</button></li>
                                <li><button>PLANNER</button></li>
                                <li><button> CONTENT <br/>STRATEGIST</button></li>
                                <li><button>CRM <br/>STRATEGIST</button></li>
                                <li><button> DESIGN <br/>STRATEGIST</button></li>
                                <li><button> DESIGN <br/>STRATEGIST</button></li>
                            </ul>

                                <ul>
                                    <li><button>ACCOUNT <br/>PLANNER</button></li>
                                    <li><button> BRAND <br/>CONSULTANTS</button></li>
                                    <li><button>ANALYST</button></li>
                                    <li><button>PLANNER</button></li>
                                    <li><button> CONTENT <br/>STRATEGIST</button></li>
                                    <li><button>CRM <br/>STRATEGIST</button></li>
                                    <li><button> DESIGN <br/>STRATEGIST</button></li>
                                    <li><button> DESIGN <br/>STRATEGIST</button></li>
                                </ul>

                        </div>
                            <Worker />
                            <Worker />
                            <Worker />
                            <h3>Load more</h3>
                        </div>
                    )}

                </Media>




        );
    }
});

export default FifthBlock;