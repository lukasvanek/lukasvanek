import { useEffect, useRef } from 'react';
/** @jsx jsx */
import { jsx, Button, Divider, useColorMode, Image } from 'theme-ui';
import Fade from 'react-reveal/Fade';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Tweet } from 'react-twitter-widgets';
import { Footer } from '../../components';

const tweetContainer = 'tweet-container';

export default () => {
  const [colorMode] = useColorMode();

  return (
    <div
      sx={{
        variant: 'styles',
      }}
    >
      <Parallax pages={3.5}>
        <main
          sx={{
            a: {
              textDecoration: 'underline',
              color: 'text',
            },
            h2: {
              textAlign: 'center',
              fontSize: 42,
            },
            '.container': {
              width: ['100%', '66%', '50%'],
              ml: 'auto',
              mr: 'auto',
            },
          }}
        >
          <ParallaxLayer offset={0.1} speed={0}>
            <Fade>
              <Image src="/dinify1.webp" sx={{ float: 'right' }} />
            </Fade>
          </ParallaxLayer>

          <ParallaxLayer offset={0.9} speed={0}>
            <Fade>
              <Image
                src="/digitalLab.jpg"
                sx={{
                  width: '50%',
                }}
              />
            </Fade>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.1}>
            <Fade>
              <div className="container" sx={{ my: 100 }}>
                <h2>
                  <svg
                    sx={{ height: 46, verticalAlign: 'top', mr: 12 }}
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g stroke="none">
                      <path
                        id="dinify-logo"
                        sx={{
                          fill: colorMode === 'default' ? 'black' : 'white',
                        }}
                        d="M8,14.9l-0.7-0.7c-0.6-0.6-1.4-0.9-2.3-0.9H0.7L0,2.7h4.4c1.2,0,2.3,0.3,3.3,1L8,3.9l0.3-0.2c1-0.7,2.1-1,3.3-1H16
	l-0.7,10.7H11c-0.9,0-1.7,0.3-2.3,1L8,14.9z M1.9,12H5c1.1,0,2.1,0.4,3,1.1c0.9-0.7,1.9-1.1,3-1.1h3.1l0.5-8h-2.9
	c-0.9,0-1.8,0.3-2.6,0.8l-1,0.7l-1-0.7C6.2,4.3,5.3,4,4.4,4h-3L1.9,12z"
                      />
                    </g>
                  </svg>
                  Dinify
                </h2>
              </div>
            </Fade>

            <Fade>
              <div className="container" sx={{ my: 320 }}>
                <h3>Idea</h3>
                <p>
                  Startup which started its path in 2017, where the core idea
                  was to build a smart multilingual dining platform for
                  restaurants, so their guests could order food from table in
                  their native language. That could have been achieved by
                  scanning QR code with their phone using our{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Progressive_web_application"
                    target="_blank"
                  >
                    Progressive Web App
                  </a>
                  , so the user wouldn't have to install anything. We especially
                  focused on minimizing steps needed to start using our app.
                </p>
              </div>
            </Fade>

            <Fade>
              <div className="container" sx={{ mt: 690 }}>
                <h3>Evolution</h3>
                <p>
                  The platform was originally developed for Kuwaiti market,
                  where our investors came from. The problem we've been solving
                  there was mainly language barrier, which occured between the
                  staff and guests of the restaurant. After uneasy decision of
                  our founder, we moved to European market, focusing on cities
                  with high tourism, namely Prague, Madrid and Barcelona.
                  <br />
                  We participated in gastroturism accelerator in San Sebastian.
                  <br />
                  In 2020 during the pandemic situation, our founder had to
                  leave Spain and come to Korea, the country of his origin,
                  therefore he had to cut the business development in Spain. In
                  order to save the project we tried to adapt to different
                  market once again, the restaurants of Seoul.
                </p>
                <div sx={{ width: 550, height: 550, mx: 'auto' }}>
                  <Tweet
                    tweetId="1124282805427605505"
                    options={{ theme: colorMode }}
                  />
                </div>
              </div>
            </Fade>

            <Fade>
              <div className="container" sx={{ mt: 100 }}>
                <h3>My role</h3>
                <p>
                  The first thing I was working on was developing web app for
                  waiters, so called Waiterboard, I picked React/Redux with{' '}
                  <a href="https://redux-observable.js.org/" target="_blank">
                    Observables
                  </a>{' '}
                  and{' '}
                  <a href="https://styled-components.com/" target="_blank">
                    styled-components
                  </a>{' '}
                  as a stack. The backend was written in Java and I found it
                  rather suboptimal, so I build my own microservice dedicated to
                  the Waiteboard in Node.js using{' '}
                  <a href="https://expressjs.com/" target="_blank">
                    Express
                  </a>{' '}
                  creating simple REST API. The main database was MySQL and I
                  used{' '}
                  <a href="https://sequelize.org/" target="_blank">
                    Sequelize
                  </a>{' '}
                  as ORM.
                  <br />
                  The second thing I developed was Dashboard for managers and
                  owners of the restaurant, where they could manage their menu,
                  translations of menu and other settings. The stack was very
                  similar. Later we started using{' '}
                  <a href="https://material-ui.com/" target="_blank">
                    Material UI
                  </a>{' '}
                  library.
                  <br />
                  The user app was initially separately written natively for
                  Android and iOS. For both development and user experience
                  reasons we decided to recreate the app as PWA using React and
                  the same stack and Material UI.
                  <br />
                  The rest of old Java backend was rewritten in PHP with Laravel
                  by my colleague. Which after some time turned out as a bad
                  idea as we ran into serious performance issues. So I initiated
                  incremental migration to Node.js backend with{' '}
                  <a href="https://nestjs.com/" target="_blank">
                    Nest.js
                  </a>
                  . This made all requests faster by factor of ten.
                  <br />
                  Lastly during the trial of adaptation to Korean market I
                  worked on new{' '}
                  <a
                    href="https://github.com/necolas/react-native-web"
                    target="_blank"
                  >
                    React Native Web
                  </a>{' '}
                  app for waiters, where I used{' '}
                  <a href="https://rematch.netlify.app/" target="_blank">
                    Rematch
                  </a>{' '}
                  for state management.
                </p>
              </div>
            </Fade>

            <Divider />
            <Footer />
          </ParallaxLayer>
        </main>
      </Parallax>
    </div>
  );
};
