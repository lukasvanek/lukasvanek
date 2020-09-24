/** @jsx jsx */
import { jsx, Button, useColorMode } from 'theme-ui';
import Link from 'next/link';
import { CgDarkMode } from 'react-icons/cg';
import { useRouter } from 'next/router';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const { pathname } = useRouter();
  let minimal = true;
  if (pathname === '/') {
    minimal = false;
  }
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
            <a
              sx={{
                fontWeight: 'heading',
                cursor: 'pointer',
                div: {
                  display: 'inline-block',
                  overflow: 'hidden',
                  transition: 'all 0.45s ease-in-out',
                  verticalAlign: 'bottom',
                  opacity: minimal ? '0' : '1',
                },
              }}
            >
              L<div style={{ width: minimal ? '0' : '70px' }}>ukas</div> V
              <div style={{ width: minimal ? '0' : '75px' }}>anek</div>
            </a>
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
