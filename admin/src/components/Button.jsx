import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({ children, disabled, onClick, type = "primary", to }) {
  const base =
    "font-medium tracking-wide text-sm text-white transition-colors duration-300 hover:bg-gray-700 focus:bg-stone-700 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " bg-black px-10 py-2 ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      base + " rounded-full bg-gray-600 px-5 py-2 sm:px-7 sm:py-2 sm:text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  to: PropTypes.string,
};
