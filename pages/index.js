/** @jsx jsx */
import { jsx, Button, Divider } from 'theme-ui';
import { Footer, Tiles } from '../components';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const projects = [
  {
    title: 'Dinify',
    link: '/project/dinify',
    tags: ['Typescript', 'React Native Web', 'RxJS', 'NestJS'],
    description:
      'Smart dining platform for restaurants and their international guests',
  },
  {
    title: 'Dinify Growth Hacking',
    link: '/project/dinify-campaign',
    tags: ['Scraping', 'MongoDB'],
    description:
      'Using TripAdvisor platform to target our clients in onboarding campaign',
  },
  {
    title: 'Rosso Solutions',
    link: '/project/rosso',
    tags: ['React', 'Rematch', 'SVG', 'MongoDB'],
    description: 'Platform for no-code development',
  },
  {
    title: 'Sinesquare',
    link: '/project/sinesquare',
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
          key={`tag-${item.title}-${tag}`}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default () => {
  return (
    <div sx={{ variant: 'styles' }}>
      <main
        sx={{
          variant: 'styles.container',
        }}
      >
        <Divider />

        <h2>Projects</h2>
        <Tiles>
          <Fade>
            <ul>
              {projects.map((item) => (
                <li key={`tile-${item.title}`}>
                  <h2>
                    <Link href={item.link || '/'}>
                      <a>{item.title}</a>
                    </Link>
                  </h2>
                  <Tags item={item} />
                  {item.description}
                </li>
              ))}
            </ul>
          </Fade>
        </Tiles>

        <Divider />

        <h2>Experiments</h2>
        <Tiles>
          <Fade>
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
          </Fade>
        </Tiles>

        <Divider />
      </main>
    </div>
  );
};
