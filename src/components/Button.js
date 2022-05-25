import PropTypes from 'prop-types';

const Button = (props) => {

    return (
        <button
            onClick={props.onClick}
            style={{ backgroundColor: props.color || "blue" }}
        >
            {props.children}
        </button>
    )

}


Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Button;