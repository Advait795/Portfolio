import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/ad Hero.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedInLight : linkedInDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile pic of adwait dalvi"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Adwait
          <br />
          Dalvi
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/adwait-dalvi" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://x.com/Adwait795" target="_blank">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://github.com/Advait795" target="_blank">
            <img src={githubIcon} alt="Github" />
          </a>
        </span>
        <p className={styles.description}>With Passion for Computer Science</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
