import React from "react";
import FeatureCard from "@/components/home/FeatureCard";
import { Calendar, Invoice, PeopleGroup } from "@/assets/icons";

const featuresData = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    cardIcon: <Calendar iconClass="text-white" />,
    accentClass: "bg-tertiary-100 ",
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    cardIcon: <Invoice iconClass="text-white" />,
    accentClass: "bg-primary-500 text-secondary-500",
  },
  {
    title: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
    cardIcon: <PeopleGroup iconClass="text-white" />,
    accentClass: "bg-primary-200",
  },
];

const CloudSoftware = () => {
  return (
    <div>
      <div className="text-center">
        <h2
          id="Cloud Software"
          className="header-2-tone font-bold text-large-500"
        >
          All-In-One <span className="text-primary-500"> Cloud Software.</span>
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600">
          TOTC is one powerful online software suite that combines all the tools{" "}
          <br /> needed to run a successful school or office.
        </p>
      </div>

      <div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {featuresData.map((feature, index) => (
            <li key={index}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                cardIcon={feature.cardIcon}
                accentClass={feature.accentClass}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CloudSoftware;
