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

        <h2>Neo4j</h2>
        <p>Visualizing relationships of Sondcloud users using Neo4j</p>

        <Fade>
          <img src="/neo4j.png" />
        </Fade>

        <Divider />
      </main>
    </div>
  );
};
