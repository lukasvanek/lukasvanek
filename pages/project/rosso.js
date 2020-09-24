import { useEffect } from 'react';
/** @jsx jsx */
import { jsx, Button, Divider } from 'theme-ui';
import { Footer } from '../../components';

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

        <h2>Rosso Solutions</h2>
        <p>Platform for no-code development</p>

        <Divider />
      </main>

      <Footer />
    </div>
  );
};
