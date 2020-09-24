/** @jsx jsx */
import { jsx, Button, Divider } from 'theme-ui';
import { Footer, Header } from '../../components';

export default () => {
  return (
    <div
      sx={{
        variant: 'styles',
      }}
    >
      <Header minimal />

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

        <h2>Dinify</h2>
        <h3>Idea</h3>
        <p>
          Startup which started its path in 2017, where the core idea was to
          build a smart multilingual dining platform for restaurants, so their
          guests could order food from table in their native language. That
          could have been achieved by scanning QR code with their phone using
          our{' '}
          <a href="https://en.wikipedia.org/wiki/Progressive_web_application">
            PWA app
          </a>
          , so the user wouldn't have to install anything. We especially focused
          on minimizing steps needed to start using our app.
        </p>
        <h3>Evolution</h3>
        <p>
          The platform was originally developed for Kuwaiti market, where our
          investors came from. The problem we've been solving there was mainly
          language barrier, which occured between the staff and guests of the
          restaurant. After uneasy decision of our founder, we moved to European
          market, focusing on cities with high tourism, namely Prague, Madrid
          and Barcelona.
        </p>
        <h3>My role</h3>
        <p>
          The first thing I was working on was developing web app for waiters,
          so called Waiterboard, I picked React/Redux with{' '}
          <a href="https://redux-observable.js.org/">Observables</a> and{' '}
          <a href="https://styled-components.com/">styled-components</a> as a
          stack. The backend was written in Java and I found it rather
          suboptimal, so I build my own microservice dedicated to the Waiteboard
          in Node.js using <a href="https://expressjs.com/">Express</a> creating
          simple REST API. The main database was MySQL and I used{' '}
          <a href="https://sequelize.org/">Sequelize</a> as ORM.
          <br />
          The second thing I developed was Dashboard for managers and owners of
          the restaurant, where they could manage their menu, translations of
          menu and other settings. The stack was very similar. Later we started
          using <a href="https://material-ui.com/">Material UI</a> library.
          <br />
          The user app was initially separately written natively for Android and
          iOS. For both development and user experience reasons we decided to
          recreate the app as PWA using React and the same stack and Material
          UI.
          <br />
          The rest of old Java backend was rewritten in PHP with Laravel by my
          colleague. Which after some time turned out as a bad idea as we ran
          into serious performance issues. So I initiated incremental migration
          to Node.js backend with <a href="https://nestjs.com/">Nest.js</a>.
          This made all requests faster by factor of ten.
          <br />
        </p>

        <Divider />
      </main>

      <Footer />
    </div>
  );
};
