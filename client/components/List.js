import '../styles/List.sass';

import pimpa from '../../images/list-pimpa.png';

const List = createReactClass({
    render() {
        return (
            <div className="List">
                <div className="img">
                    <img src={pimpa} alt="pimpa"/>
                </div>
                <div className="main-list">
                    <ul className="text-left">
                        {this.props.lis.map((list, i) => {
                            return <li key={i} className={i % 2 == 0 ? 'blue' : null}>{list}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
});

export default List;