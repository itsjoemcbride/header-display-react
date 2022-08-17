import PropTypes from "prop-types";

export default function Profile({ name, imgUrl }) {
  return <img src={imgUrl} alt={name} className="profile-pic" />;
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
