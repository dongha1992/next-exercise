import Layout from '../pages/components/Layout';
import { useRouter } from 'next/router';

const post = (props) => {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary}</p>
      <img src={props.show.image.medium } alt='' />
    </Layout>
  );
};

post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default post;
