"use client";

import Button from "@/components/Button";
import Image from "next/image";
import HeroImage from "../../public/image/Softwaredeveloper.png"

export default function Home() {
  return (
    <main>
      <section className="bg-bg-primary">
        <div className="heroContainer max-w-[1440px] mx-auto w-full px-16 pt-40">
          <div className="mainRow flex">
            <div className="mainTitle w-[60%]">
              <h1 className="text-[48px] font-bold text-white">
                Hi, I am Uttam Pun 
              </h1>
              <h1 className="text-[48px] font-bold text-white">Full Stack Developer</h1>
              <p className="text-xl text-[#D0D0D0] my-12 ">
                I’ve spent the past 2.5 years working in web development, with 9
                months of intensive experience as a full-stack developer.
              </p>
              <div className="button">
                <Button className="bg-[#A8FFD2] px-16 py-4 text-lg text-[#050B38] rounded-md" type="button" name="Download CV"/>
              </div>
            </div>
            <div className="heroImg w-[40%]">
              <Image src={HeroImage} className="w-[100%]" quality={100} alt="heroImage" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
