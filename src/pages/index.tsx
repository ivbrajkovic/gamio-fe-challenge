import { NextPage } from 'next';

import { Head } from '@/components/Head';
import { PageTitle } from '@/components/PageTitle';

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <PageTitle title="Overview" />
    </>
  );
};

export default Home;
