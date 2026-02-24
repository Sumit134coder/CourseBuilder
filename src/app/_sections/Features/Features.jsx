import UserInterface from "./subSections/UserInterface";
import Quizes from "./subSections/Quizes";
import Tools from "./subSections/Tools";
import ClassManagement from "./subSections/ClassManagment";
import Discussions from "./subSections/Discussions";

const Features = () => {
  return (
    <section className="mx-[150px]" aria-labelledby="features-heading">
      <header className="text-center">
        <h2
          id="features-heading"
          className="header-2-tone font-bold text-heading-500"
        >
          Our <span className="text-primary-500">Features</span>
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600">
          This very extraordinary feature can make learning activities more
          efficient.
        </p>
      </header>

      <ul className="space-y-8 my-25">
        <li>
          <UserInterface />
        </li>
        <li>
          <Tools />
        </li>
        <li>
          <Quizes />
        </li>
        <li>
          <ClassManagement />
        </li>
        <li>
          <Discussions />
        </li>
      </ul>
    </section>
  );
};

export default Features;
