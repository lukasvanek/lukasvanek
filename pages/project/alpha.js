import { useEffect } from 'react';
/** @jsx jsx */
import { jsx, Button, Divider } from 'theme-ui';
import Fade from 'react-reveal/Fade';

export default () => {
  return (
    <div
      sx={{
        variant: 'styles',
      }}
    >
      <main
        sx={{
          variant: 'styles.container',
          a: {
            textDecoration: 'underline',
            color: 'text',
          },
        }}
      >
        <Divider />

        <h2>Alpha Analytics</h2>
        <p>Stock picker, custom market indicators & insights</p>

        <Fade>
          <img src="/alpha1.png" />
        </Fade>
        <Fade>
          <img src="/alpha2.png" />
        </Fade>

        <Divider />
      </main>
    </div>
  );
};
