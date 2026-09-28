import PropTypes from "prop-types";

export default function Button({
  text,
  icon,
  size = "medium",
  varian = "primary",
  fullWith = false,
  isDisabled = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`button ${varian} ${size} ${isDisabled ? "disabled" : ""} ${
        fullWith ? "full-with" : ""
      }`}
    >
      {icon ? <span>{icon}</span> : ""}
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  varian: PropTypes.oneOf(["primary", "secondary"]),
  fullWith: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: "Some text",
};
