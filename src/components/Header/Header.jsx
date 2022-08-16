import PropTypes from "prop-types";

export default function Header({ name }) {
  return <h1 className="">Hello {name}</h1>;
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
