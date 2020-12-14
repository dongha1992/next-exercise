import Link from 'next/link';
import Layout from '../pages/components/Layout';
import fetch from 'isomorphic-unfetch';

const Index = ({ shows }) => {
  console.log(shows);
  return (
    <Layout>
      <h1>fetch exericse from Batman</h1>
      <ul>
        {shows.map(({ show }) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    shows: data,
  };
};

export default Index;
