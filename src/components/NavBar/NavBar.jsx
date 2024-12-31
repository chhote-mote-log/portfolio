import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const NavBar = ({ navOpen }) => {
  const lastActiveLink = useRef(null); // Tracks the last active link
  const activeBox = useRef(null); // Ref for the active indicator

  // Initialize the active box
  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
  };

  // Handle active link change
  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active"); // Remove active class from the previous link
    event.target.classList.add("active"); // Add active class to the clicked link
    lastActiveLink.current = event.target; // Update the reference
    initActiveBox(); // Update the active box position and size
  };

  // Add and clean up resize listener
  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  // Navigation items
  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Achievement", link: "#achievement", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <div>
      <nav className={"navbar " + (navOpen ? "active" : "")}>
        {navItems.map(({ label, link, className }, key) => (
          <a
            href={link}
            key={key}
            className={className}
            ref={className.includes("active") ? lastActiveLink : null} // Assign ref only to the initial active link
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        ))}
        <div className="active-box" ref={activeBox}></div>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default NavBar;
