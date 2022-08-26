import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter()

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => router.push('/product')}>Product LIST</button>
    </>
  );
};

export default Home;
