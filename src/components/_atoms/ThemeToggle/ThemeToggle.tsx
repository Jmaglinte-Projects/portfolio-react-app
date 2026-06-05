import { useTheme } from "@/context/ThemeContext";
import { ThemeToggleButton, ThemeToggleIcon } from "./elements";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ThemeToggleButton
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <ThemeToggleIcon aria-hidden="true">{isDark ? "☀" : "☾"}</ThemeToggleIcon>
      {isDark ? "Light" : "Dark"}
    </ThemeToggleButton>
  );
};

export default ThemeToggle;
