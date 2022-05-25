import PropTypes from 'prop-types';

const defaultStyle = {
    backgroundColor: '#cccccc',
};

const Box = (props) => {
    return (
        <div
            className="box"
            style={{ ...defaultStyle, ...props.style, width: props.size === "small" ? 200 : props.size === "medium" ? 400 : 800 }}>
            {props.children}
        </div>
    );
};

Box.propTypes = {
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
}

export default Box;