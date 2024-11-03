import Heading from "./Heading";
import PropTypes from "prop-types";

function Empty({ resource }) {
  return <Heading text1={resource} text2="Data not found" />;
}

export default Empty;

Empty.propTypes = {
  resource: PropTypes.string.isRequired,
};
