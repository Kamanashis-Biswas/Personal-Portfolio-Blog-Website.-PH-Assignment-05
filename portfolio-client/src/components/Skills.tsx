// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/image-skill";
import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="py-10 lg:py-20 bg-[#ededed] dark:bg-gray-900">
      <div className="container">
        <div className="flex justify-center mb-10">
          <h3 className="text-2xl font-bold border-b-2 border-primary dark:border-primary inline-block pb-1 uppercase text-gray-900 dark:text-gray-100">
            My skills
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-12">
          {skillsData.map((skill, id) => (
            <div
              className="w-full h-fit flex flex-col items-center justify-center transition-all duration-500 group relative hover:scale-105 cursor-pointer"
              key={id}
            >
              <div className="w-full h-full rounded-lg border border-primary bg-white dark:bg-gray-800 shadow-none shadow-gray-50 dark:shadow-gray-900 group-hover:border-primary transition-all duration-300 ease-in-out transform hover:border-2 hover:border-dashed hover:shadow-lg">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src || "/placeholder.svg"}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-black dark:text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
