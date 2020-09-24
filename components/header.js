/** @jsx jsx */
import { jsx, Button, useColorMode } from 'theme-ui';
import Link from 'next/link';
import { CgDarkMode } from 'react-icons/cg';

const Header = ({ minimal = false }) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header
      sx={{
        variant: 'styles.container',
        display: 'flex',
      }}
    >
      <div>
        {' '}
        <h1>
          <Link href="/">
            <a>{minimal ? 'LV' : 'Lukas Vanek'}</a>
          </Link>
        </h1>
        {!minimal && (
          <p>full-stack developer, idea maker, data science enthusiast</p>
        )}
      </div>

      <div sx={{ mx: 'auto' }} />
      <Button
        sx={{
          alignSelf: 'end',
          backgroundColor: 'transparent',
          color: colorMode === 'default' ? 'black' : 'white',
          fontSize: '32px',
          p: 0,
          m: 2,
          ':hover': {
            backgroundColor: 'transparent',
          },
        }}
        onClick={() =>
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }
      >
        <CgDarkMode />
      </Button>
    </header>
  );
};

export default Header;
