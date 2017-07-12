import '../styles/Modal.sass';

const Modal = createReactClass({
    render() {
        return (
            <div className="Modal">
                <i className="fa fa-times" onClick={this.props.closeClick}></i>
                <ul>
                    {this.props.list.map((item, i) => {
                        return <li key={i}>
                            <p><strong>Description: </strong>{item.description}</p>
                            <p><strong>Name: </strong>{item.name}</p>
                            <p><strong>Price: </strong>{item.price}</p>
                            </li>
                    })}
                </ul>
            </div>
        );
    }
});

export default Modal;