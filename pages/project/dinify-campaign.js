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

        <h2>Dinify growth hacking</h2>
        <p>
          Using TripAdvisor platform to target our clients in onboarding
          campaign
        </p>

        <Divider />
      </main>
    </div>
  );
};
