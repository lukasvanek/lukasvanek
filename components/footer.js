/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FaLinkedin as Linkedin, FaGithub as GitHub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      sx={{
        p: 2,
        variant: 'styles.container',
      }}
    >
      <div
        sx={{
          py: 4,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <a
          href="https://www.linkedin.com/in/vaneklukas/"
          title="Linkedin"
          sx={{
            variant: 'styles.navitem',
            mr: 3,
          }}
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/lukasvanek"
          title="GitHub"
          sx={{
            variant: 'styles.navitem',
          }}
        >
          <GitHub size={24} />
        </a>
      </div>

      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          fontSize: 0,
        }}
      >
        <div sx={{ mx: 'auto' }} />
        <div sx={{ p: 2, color: 'muted2' }}>
          © {new Date().getFullYear()} Lukas Vanek
        </div>
      </div>
    </footer>
  );
};

export default Footer;
