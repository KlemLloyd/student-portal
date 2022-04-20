import { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [title, setTitle] = useState("");

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  console.log("theme", theme);

  useEffect(() => {
    const fechData = async () => {
      // From Server Or Some Place.
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setTitle("Student Portal");
    };

    fechData();
  }, []);

  return (
    <ErrorBoundary>
      <div
        className="app"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <HelmetProvider>
          <Helmet>
            <title>{title ? title : "Loading..."}</title>
          </Helmet>
        </HelmetProvider>

        <Header />

        <div className="theme-text" style={styles.themeText}>
          You're using a {isDark ? "Dark" : "Light"} theme{" "}
        </div>
        <button style={styles.themeButton} onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </ErrorBoundary>
  );
}

const styles = {
  themeButton: {
    padding: 5,
    position: "fixed",
    right: "2rem",
    top: "22vh",
    zIndex: 1001,
    cursor: "pointer",
  },

  themeText: {
    padding: 5,
    position: "fixed",
    right: "10rem",
    top: "22vh",
    zIndex: 1001,
  },
};

export default App;
