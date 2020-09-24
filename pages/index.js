/** @jsx jsx */
import { jsx, Heading, Text, Button, Box, Divider } from 'theme-ui';
import { useColorMode, useThemeUI } from 'theme-ui';
import { Tiles } from '../components/blocks';
import { CgDarkMode } from 'react-icons/cg';

const projects = [
  {
    title: 'Dinify',
    tags: ['Typescript', 'React Native Web', 'RxJS', 'NestJS'],
    description:
      'Smart dining platform for restaurants and their international guests',
  },
  {
    title: 'Dinify Growth Hacking',
    tags: ['Scraping', 'MongoDB'],
    description:
      'Using TripAdvisor platform to target our clients in onboarding campaign',
  },
  {
    title: 'Rosso.solutions',
    link: 'https://rosso.solutions',
    tags: ['React', 'Rematch', 'SVG', 'MongoDB'],
    description: 'Platform for no-code development',
  },
  {
    title: 'Sinesquare',
    tags: ['React', 'PHP', 'Nette', 'Angular', 'Redux', 'RxJS', 'MongoDB'],
    description: 'Connecting people with similar taste in music',
  },
];

const experiments = [
  {
    title: 'Alpha Analytics',
    tags: ['Scraping', 'React', 'GraphQL'],
    description: 'Stock picker, custom market indicators & insights',
  },
  {
    title: 'Trading algos in C#',
    tags: ['Forex', 'Automated Trading', 'cTrader'],
    description:
      'Creating automated trading system using various indicators, optimizing its parameters with genetic algorithms.',
  },
  {
    title: 'Trilateration',
    tags: ['Scraping', 'React', 'GraphQL'],
    description:
      'Exploiting API of one dating app, demonstrating its vulnerability in locating its users using trilateration',
  },
  {
    title: 'Soundcloud Clusters',
    tags: ['Neo4j'],
    description: 'Visualizing relationships of Sondcloud users using Neo4j',
  },
];

const Tags = ({ item }) => {
  return (
    <div>
      {item.tags.map((tag) => (
        <Button
          sx={{
            mr: 2,
            mb: 2,
            p: 1,
            px: 2,
            fontSize: '11px',
            backgroundColor: 'muted',
            color: 'text',
            ':hover': {
              color: 'text',
              backgroundColor: 'muted',
            },
          }}
          key={`tag-${item.title}-${item.tag}`}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default () => {
  const [colorMode, setColorMode] = useColorMode();
  const { theme } = useThemeUI();
  console.log(theme);
  return (
    <div sx={{ variant: 'styles' }}>
      <header
        sx={{
          variant: 'styles.container',
          display: 'flex',
        }}
      >
        <div>
          {' '}
          <h1>Lukas Vanek</h1>
          <p>full-stack developer, idea maker, data science enthusiast</p>
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

      <main
        sx={{
          variant: 'styles.container',
        }}
      >
        <Divider />

        <h2>Projects</h2>
        <Tiles>
          <ul>
            {projects.map((item) => (
              <li key={`tile-${item.title}`}>
                <h2>
                  <a href={item.link}>{item.title}</a>
                </h2>
                <Tags item={item} />
                {item.description}
              </li>
            ))}
          </ul>
        </Tiles>

        <Divider />

        <h2>Experiments</h2>
        <Tiles>
          <ul>
            {experiments.map((item) => (
              <li key={`tile-${item.title}`}>
                <h2>
                  <a href={item.link}>{item.title}</a>
                </h2>
                <Tags item={item} />
                {item.description}
              </li>
            ))}
          </ul>
        </Tiles>

        <Divider />
      </main>
      <footer
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          p: 2,
          variant: 'styles.container',
        }}
      >
        <div sx={{ mx: 'auto' }} />
        <div sx={{ p: 2 }}>© {new Date().getFullYear()} Lukas Vanek</div>
      </footer>
    </div>
  );
};
