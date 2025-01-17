import React from "react";
import Container from "../Container";

import Link from "next/link";
import { teams } from "@/constants/TEAM";

function Team() {
  return (
    <section className="py-24 md:py-28 bg-gray-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold">
              Board Of Directors
            </h2>
          </div>
          <div>
            <p className="text-green-800">
              The Board of Directors at Boko Agro Allied Nigeria Limited
              comprises visionary leaders and seasoned professionals dedicated
              to driving the company's mission of transforming agriculture in
              Nigeria.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-20">
          {teams.map((team, index) => (
            <Link href={team.url} key={index} className="">
              <img
                src={team.picture}
                alt=""
                className="w-full aspect-[5/6] object-cover grayscale hover:grayscale-0"
              />
              <div className="py-5">
                <h3 className="font-bold text-2xl tracking-wider">
                  {team.name}
                </h3>
                <span className="text-sm opacity-80 block uppercase tracking-wider">
                  {team.designation}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Team;
