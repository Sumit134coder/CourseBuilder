import Image from "next/image";
import heroImage from "@/assets/images/home/Tools.svg";

const Tools = () => {
  return (
    <article className="flex flex-col md:flex-row items-center justify-between gap-x-16">

      <div className="max-w-xl">
        <h3 className="text-dark-500 font-bold text-large-600 leading-tight">
          <span className="text-primary-500">Tools</span> for Teachers and Learners
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can hand out assignments in real-time for
          students to complete and submit.
        </p>
      </div>

      {/* Image */}
      <div className="mt-8 md:mt-0">
        <Image
          src={heroImage}
          alt="Illustration showing teaching tools used by teachers and students in a classroom"
          width={500}
          height={500}
        />
      </div>

    </article>
  );
};

export default Tools;
