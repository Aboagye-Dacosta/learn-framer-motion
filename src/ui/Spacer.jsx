import PropTypes from "prop-types"
function Spacer({ height = 1 }) {
  return <div style={{ height: `${height}rem` }}></div>;
}

Spacer.propTypes = {
  height: PropTypes.number
}

export default Spacer;
