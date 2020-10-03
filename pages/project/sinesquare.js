import { useEffect } from 'react';
/** @jsx jsx */
import { jsx, Button, Divider, Image } from 'theme-ui';
import { Footer } from '../../components';
import Fade from 'react-reveal/Fade';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

export default () => {
  return (
    <div
      sx={{
        variant: 'styles',
      }}
    >
      <Parallax pages={2}>
        <main
          sx={{
            width: '100%',
            textAlign: 'center',
            a: {
              textDecoration: 'underline',
              color: 'text',
            },
            h2: {
              fontSize: 42,
              textTransform: 'uppercase',
            },
            '.container': {
              width: ['100%', '66%', '50%'],
              ml: 'auto',
              mr: 'auto',
            },
          }}
        >
          <ParallaxLayer offset={0} speed={0.1}>
            <Fade>
              <h2>Sinesquare</h2>
              <p>
                <i>[High school project, 2015 - 2017]</i>
                <br />
                Connecting people with similar taste in music
              </p>
              <Image
                src="/snsq/songPage.png"
                sx={{
                  width: ['100%', '100%', '100%', '50%'],
                  margin: '20px auto',
                }}
              />
              <Image
                src="/snsq/tagPage.png"
                sx={{
                  width: ['100%', '100%', '100%', '50%'],
                  margin: '20px auto',
                }}
              />
            </Fade>

            <Footer />
          </ParallaxLayer>
        </main>
      </Parallax>
    </div>
  );
};
