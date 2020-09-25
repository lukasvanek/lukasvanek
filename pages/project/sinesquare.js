import { useEffect } from 'react';
/** @jsx jsx */
import { jsx, Button, Divider } from 'theme-ui';

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

        <h2>Sinesquare</h2>
        <p>Connecting people with similar taste in music</p>

        <Divider />
      </main>
    </div>
  );
};
