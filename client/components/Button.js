import '../styles/Button.sass';

const Button = createReactClass({

    render() {
        return (
            <button>{this.props.label}</button>
        );
    }

});

export default Button;