import '../styles/ItemThird.sass';

const ItemThird = createReactClass({
    render() {
        return (
            <div className="ItemThird">
                <h3>{this.props.header}</h3>
                <div className="imgWrapper" style={{ width: window.screen.width / 6.5, height: window.screen.width / 6.5 }}>
                    <img src={this.props.img} alt="" style={this.props.imgStyle}/>
                </div>
                <p>{this.props.text}</p>
            </div>
        );
    }
});

export default ItemThird;