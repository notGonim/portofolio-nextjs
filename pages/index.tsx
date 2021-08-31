import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 Poppins">
      <h5 className="my-3 font-medium">
        I am a very passionate Software Engineer with a strong CS background.
        Having developed various web projects, It's safe to say that I am very
        confident in my developmental skills I have worked on many different
        projects so I am familiar with many technologies.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-300 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6>What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
