import Features from "./_sections/Features/Features"
import NewsResources from "./_sections/NewsAndResources/NewsResources"
import OurSuccess from "./_sections/ourSuccess/OurSuccess"

const Home = () => {
  return (
    <div className="text-dark-100 space-y-32">
      <OurSuccess />
      <Features />
      <NewsResources/>
    </div>
  )
}

export default Home