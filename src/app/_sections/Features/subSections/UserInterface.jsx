import Image from "next/image";
import heroImage from "@/assets/images/home/UserInterface.svg";
import icon1 from "@/assets/images/fourSquare.svg";
import icon2 from "@/assets/images/twoSquare.svg";
import icon3 from "@/assets/images/usersGroup.svg";

const UserInterface = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-x-62">
      <Image
        src={heroImage}
        alt="Illustration showing user interface designed for the classroom used by teachers and students in a classroom"
        width={500}
        height={500}
      />
      <div>
        <h2 className=" text-dark-500 font-bold text-large-600">
          A <span className="text-primary-500">user interface</span> designed
          for the classroom
        </h2>
        <p>
          <ul className="space-y-[40px]">
            <li className="flex items-center gap-10.5">
              <div className="rounded-full p-1 shadow-lg">
                <Image src={icon1} height={26} width={26} alt="icon" />
              </div>
              <span>
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </span>
            </li>
            <li className="flex items-center gap-10.5">
              <div className="rounded-full p-1 shadow-lg">
                <Image src={icon2} height={26} width={26} alt="icon" />
              </div>
              <span>
                TA’s and presenters can be moved to the front of the class.
              </span>
            </li>
            <li className="flex items-center gap-10.5">
              <div className="rounded-full p-1 shadow-lg">
                <Image src={icon3} height={26} width={26} alt="icon" />
              </div>
              <span>
                Teachers can easily see all students and class data at one time.
              </span>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default UserInterface;
