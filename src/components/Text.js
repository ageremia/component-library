import PropTypes from 'prop-types';

const Text = (props) => {
    return (
        <div
            className="text"
            style={{
                ...props.style,
                fontSize: props.size === "small" ? 20 : props.size === "medium" ? 40 : 80,
                color: props.color || "black"
            }}>
            {props.children}
        </div>
    );
};

Text.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
}

export default Text;