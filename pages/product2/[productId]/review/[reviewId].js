import { useRouter } from 'next/router'

function Review() {
  const router = useRouter()
  const { productId, reviewId } = router.query
  return <div>Product: {productId}, Review: {reviewId}</div>
}

export default Review;