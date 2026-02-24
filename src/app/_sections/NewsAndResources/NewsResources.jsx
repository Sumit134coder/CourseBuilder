import ArticleCard from "./components/ArticleCard";
import ArticleRow from "./components/ArticleRow";
import girlStudying from "@/assets/images/girlStudy.png";
import meetingLaptop from "@/assets/images/laptopMeeting.png";
import laptopFemale from "@/assets/images/laptopFemale.png";
import catAnimated from "@/assets/images/catAnimated.png";

const articles = [
  {
    imageSrc: girlStudying,
    imageAlt: "Class Technologies press release",
    category: "Press Release",
    categoryVariant: "press",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    excerpt: "Class Technologies Inc., the company that created Class,...",
  },
  {
    imageSrc: laptopFemale,
    imageAlt: "Zoom for schools news",
    category: "News",
    categoryVariant: "news",
    title:
      "Zoom's earliest investors are betting millions on a better Zoom for schools",
    excerpt:
      "Zoom was never created to be a consumer product. Nonetheless, the...",
  },
  {
    imageSrc: catAnimated,
    imageAlt: "Blackboard CEO raises funding",
    category: "News",
    categoryVariant: "news",
    title:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    excerpt:
      "This year, investors have reaped big financial returns from betting on Zoom...",
  },
];

const NewsResources = () => {
  return (
    <section className="mx-[200px]">
      <div className="text-center">
        <h2 className="text-dark-500 text-heading-500">
          Latest News and Resources
        </h2>
        <p>See the developments that have occurred to TOTC in the world</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ArticleCard
          imageSrc={meetingLaptop}
          title="Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
          description="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
          tags={["News", "International"]}
        />
        <ul className="space-y-12.5">
          {articles.map((article) => (
            <li key={article.title}>
              <ArticleRow
                title={article.title}
                description={article.excerpt}
                imageSrc={article.imageSrc}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewsResources;
