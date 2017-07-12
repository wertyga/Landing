import UpperBar from './UpperBar';
import FirstBlock from './FirstBlock';
import SecondBlock from './SecondBlock';
import ThirdBlock from './ThirdBlock';
import FouthBlock from './FouthBlock';
import FifthBlock from './FifthBlock';
import Footer from './Footer';

import '../styles/App.sass';

const App = createReactClass({

    render() {
        return (
            <div>
                <UpperBar />
                <FirstBlock />
                <SecondBlock />
                <ThirdBlock />
                <FouthBlock />
                <FifthBlock />
                <Footer />
            </div>
        );
    }
});

export default App;