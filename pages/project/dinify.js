/** @jsx jsx */
import { jsx, Button, Divider } from 'theme-ui';
import { Footer, Header } from '../../components';

export default () => {
  return (
    <div sx={{ variant: 'styles' }}>
      <Header />

      <main
        sx={{
          variant: 'styles.container',
        }}
      >
        <Divider />

        <h2>Dinify</h2>
        <p>
          Smart dining platform for restaurants and their international guests
        </p>

        <Divider />
      </main>

      <Footer />
    </div>
  );
};
