import { useRouter } from 'next/router'
function Docs() {
  const router = useRouter()
  const { params } = router.query;
  console.log('>>>>>>', params)
  return <div>DOCS: {JSON.stringify(params)}</div>
}

export default Docs;
