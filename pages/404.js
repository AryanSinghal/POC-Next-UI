import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter()

  return (
    <>
      <h1>NotFound</h1>
      <button onClick={() => router.replace('/')}>Home Page</button>
    </>
  );
};

export default NotFound;
