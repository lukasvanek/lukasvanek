/** @jsx jsx */
import { jsx, Button, Divider } from 'theme-ui';
import { Footer, Tiles } from '../components';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const projects = [
  {
    title: 'Rosso Solutions',
    link: '/project/rosso',
    tags: ['React', 'Rematch', 'MongoDB'],
    visit: 'https://rosso.solutions',
    visitBg:
      'linear-gradient(48deg, rgb(180, 58, 129) 0%, rgb(199, 0, 0) 100%)',
    description: 'Platform for no-code development',
  },
  {
    title: 'Dinify',
    link: '/project/dinify',
    tags: ['React Native', 'RxJS', 'NestJS'],
    description:
      'Smart dining platform for restaurants and their international guests',
  },
  {
    title: 'Dinify Growth Hacking',
    link: '/project/dinify-campaign',
    tags: ['Sendgrid', 'MongoDB', 'CharlesProxy'],
    description:
      'Using TripAdvisor platform to target our clients in onboarding campaign',
  },
  {
    title: 'Sinesquare',
    link: '/project/sinesquare',
    tags: ['React', 'Nette', 'Angular', 'Redux'],
    description: 'Connecting people with similar taste in music',
  },
];

const experiments = [
  {
    title: 'Alpha Analytics',
    link: '/project/alpha',
    visit: 'https://alpha.lukasvanek.com',
    visitBg: 'linear-gradient(48deg, rgb(0, 0, 255) 0%, rgb(0, 100, 255) 100%)',
    tags: ['React', 'GraphQL', 'Apollo'],
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
    link: '/project/neo4j',
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

const Item = ({ item }) => {
  return (
    <li key={`tile-${item.title}`}>
      <h2>
        <Link href={item.link || '/'}>
          <a>{item.title}</a>
        </Link>
      </h2>
      <Tags item={item} />
      <div>{item.description}</div>
      {!!item.link && (
        <Link href={item.link}>
          <Button>MORE</Button>
        </Link>
      )}
      {!!item.visit && (
        <a href={item.visit} target="_blank">
          <Button
            sx={{
              color: 'white',
              background: item.visitBg,
            }}
          >
            VISIT
          </Button>
        </a>
      )}
    </li>
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
                <Item item={item} key={`tile-${item.title}`} />
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
                <Item item={item} key={`tile-${item.title}`} />
              ))}
            </ul>
          </Fade>
        </Tiles>

        <Divider />
      </main>
      <Footer />
    </div>
  );
};
