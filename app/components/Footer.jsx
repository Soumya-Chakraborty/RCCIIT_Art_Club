import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4">
        <div className="flex-1">
          <a href="https://soumya-chakraborty.github.io/Soumyaportfolio/" className="text-white text-lg text-bold">
            {new Date().getFullYear()} © Soumya Chakraborty 
          </a>
        </div>
        <div className="flex-1 flex justify-end">
          <a href="https://www.instagram.com/soumya_ckakraborty/" className="text-white hover:text-violet-300 mx-2">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/soumya-chakraborty-/" className="text-white hover:text-violet-300 mx-2">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Soumya-Chakraborty" className="text-white hover:text-violet-300 mx-2">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;