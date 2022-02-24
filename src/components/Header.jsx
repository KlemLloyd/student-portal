import React, { useState } from "react";

import defaultStyles from "../config/styles";

import "../index.css";

import DummyLogo from "../assets/logos/DummyLogo.png";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.logo} />

      {loggedIn ? (
        <div style={styles.navBar}>
          <ul style={styles.navMenu}>
            <li style={styles.menuItem}>My Courses</li>
            <li style={styles.menuItem}>Library</li>
            <li style={styles.menuItem}>Link3</li>
            <li style={styles.menuItem}>Link4</li>
            <li style={styles.menuItem}>Link5</li>
          </ul>
        </div>
      ) : (
        <h2 style={styles.loginAdvice}>
          Login Below To Access Student Portal Navigation.
        </h2>
      )}
    </header>
  );
};

const styles = {
  container: {
    border: "0.1rem gray solid",
    left: 0,
    margin: "auto",
    position: "absolute",
    right: 0,
    top: 70,
    width: "90%",
  },

  header: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    borderBottom: "0.5em solid orangered",
    color: defaultStyles.colors.white,
    display: "flex",
    height: "18vh",
    padding: "0 4em 1em",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },

  loginAdvice: {
    marginLeft: "4rem",
  },

  logo: {
    background: `url('${DummyLogo}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "120%",
    height: 120,
    width: 150,
  },

  menuItem: { fontSize: 18 },
  navBar: { marginLeft: "4rem", width: "60%" },
  navMenu: {
    alignItems: "center",
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
    width: "100%",
  },
};

export default Header;
