import '../styles/FouthBlock.sass';

import Media from 'react-media';

import List from './List';


const style = {
    flex: {
        display: 'flex',
        alignItems: 'stretch'
    }
};

const FouthBlock = createReactClass({

    render() {
        return (
            <div className="FouthBlock clearfix">

                <div className="col-md-10 col-md-offset-1">
                    <div className="header text-center">
                        <h2>WHAT PROJECTS WE CAN HELP WITH</h2>
                        <h3>HERE ARE THE MOST COMMON PROJECTS OUR SPECIALISTS GET HIRED FOR</h3>
                        <Media query={{ maxWidth: 992 }}>
                            {matches => matches ? (
                                <div className="list-block clearfix">

                                    <div className="col-md-4">
                                        <List
                                            lis={[
                                                'Analytics and reporting',
                                                'Award Submission',
                                                'Brand strategy',
                                                'Brand tracking',
                                                'Brand visioning',
                                                'Brainstorms and ideation',
                                                'Campaign planning',
                                                'Case study development',
                                                'Communications planning',
                                                'Competitive analysis',
                                                'Concept creation',
                                                'Consumer insights',
                                                'Copy testing'
                                            ]}
                                            ref={list => this.list = list}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <List
                                            lis={[
                                                'Analytics and reporting',
                                                'Award Submission',
                                                'Brand strategy',
                                                'Brand tracking',
                                                'Brand visioning',
                                                'Brainstorms and ideation',
                                                'Campaign planning',
                                                'Case study development',
                                                'Communications planning',
                                                'Competitive analysis',
                                                'Concept creation',
                                                'Consumer insights',
                                                'Copy testing'
                                            ]}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <List
                                            lis={[
                                                'Analytics and reporting',
                                                'Award Submission',
                                                'Brand strategy',
                                                'Brand tracking',
                                                'Brand visioning',
                                                'Brainstorms and ideation',
                                                'Campaign planning',
                                                'Case study development',
                                                'Communications planning',
                                                'Competitive analysis',
                                                'Concept creation',
                                                'Consumer insights'
                                            ]}
                                        />
                                    </div>

                                </div>
                            ) : (
                                <div className="list-block clearfix" style={style.flex}>

                                    <div className="col-md-4">
                                        <List
                                            lis={[
                                                'Analytics and reporting',
                                                'Award Submission',
                                                'Brand strategy',
                                                'Brand tracking',
                                                'Brand visioning',
                                                'Brainstorms and ideation',
                                                'Campaign planning',
                                                'Case study development',
                                                'Communications planning',
                                                'Competitive analysis',
                                                'Concept creation',
                                                'Consumer insights',
                                                'Copy testing'
                                            ]}
                                            ref={list => this.list = list}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <List
                                            lis={[
                                                'Analytics and reporting',
                                                'Award Submission',
                                                'Brand strategy',
                                                'Brand tracking',
                                                'Brand visioning',
                                                'Brainstorms and ideation',
                                                'Campaign planning',
                                                'Case study development',
                                                'Communications planning',
                                                'Competitive analysis',
                                                'Concept creation',
                                                'Consumer insights',
                                                'Copy testing'
                                            ]}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <List
                                            lis={[
                                                'Analytics and reporting',
                                                'Award Submission',
                                                'Brand strategy',
                                                'Brand tracking',
                                                'Brand visioning',
                                                'Brainstorms and ideation',
                                                'Campaign planning',
                                                'Case study development',
                                                'Communications planning',
                                                'Competitive analysis',
                                                'Concept creation',
                                                'Consumer insights'
                                            ]}
                                        />
                                    </div>

                                </div>
                            )}
                        </Media>

                    </div>
                </div>

            </div>
        );
    }

});

export default FouthBlock;