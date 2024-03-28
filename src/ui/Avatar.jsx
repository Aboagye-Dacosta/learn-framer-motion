import PropTypes from "prop-types";

function Avatar({ avatar, alt }) {
  return (
    <img
      src={avatar || "./default-user.jpg"}
      alt={alt}
      className="block w-[4rem] object-cover object-center rounded-full aspect-[1] outline-1 outline-slate-100"
    />
  );
}

Avatar.propTypes = {
  alt: PropTypes.string,
  avatar: PropTypes.string,
};

export default Avatar;
