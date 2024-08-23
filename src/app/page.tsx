"use client";

import Button from "@/components/Button";
import Image from "next/image";
import HeroImage from "@/image/Softwaredeveloper.png";
import AboutImage from "@/image/about.png";
import Html from "@/image/html.png";
import Css from "@/image/css.png";
import Sass from "@/image/sass_logo.png";
import JavascriptIcon from "@/image/icon-javscript.png";
import TypescriptIcon from "@/image/icon-typescript .png";
import ReactLogo from "@/image/react-removebackground.png";
import Nextjs from "@/image/nextjs.png";
import BootstrapIcon from "@/image/bootstrap.png";
import TailwindIcon from "@/image/tailwind.png";
import FigmaIcon from "@/image/figma.png";
import GitIcon from "@/image/git.png";
import PhpIcon from "@/image/php.png";
import Laravel from "@/image/laravel.png";
import Mysql from "@/image/mysql.png";
import Postman from "@/image/postman.png";
import RestApi from "@/image/rest_api.png"


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
              <h1 className="text-[48px] font-bold text-white">
                Full Stack Developer
              </h1>
              <p className="text-xl text-[#D0D0D0] my-12 ">
                I’ve spent the past 2.5 years working in web development, with 9
                months of intensive experience as a full-stack developer.
              </p>
              <div className="button">
                <Button
                  className="bg-[#A8FFD2] px-16 py-4 text-lg text-[#050B38] rounded-md"
                  type="button"
                  name="Download CV"
                />
              </div>
            </div>
            <div className="heroImg w-[40%]">
              <Image
                src={HeroImage}
                className="w-[100%]"
                quality={100}
                alt="heroImage"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary">
        <div className="aboutContainer max-w-[1440px] mx-auto">
          <div className="title pt-28 pb-36">
            <h1 className="text-[64px] font-bold text-center text-[#fff]">
              About Me
            </h1>
          </div>
          <div className="aboutRow pb-44 flex gap-x-40">
            <div className="aboutImg w-[40%]">
              <Image src={AboutImage} alt="aboutImage" />
            </div>
            <div className="aboutDescription w-[60%]">
              <p className="text-[#D0D0D0] text-center text-xl">
                I began my web development career working with WordPress, where
                I designed websites using Figma and wrote jQuery code. During my
                time there, I gained experience with GitHub for version control
                and learned about task management tools like ClickUp and Jira.
                This role helped me develop my design skills and familiarity
                with design tools.
              </p>
              <p className="text-[#D0D0D0] text-center my-4 text-xl">
                After working with WordPress for over 1.5 years, I dedicated
                additional time to enhance my skills. I then transitioned to a
                new position where I expanded my expertise to include React,
                JavaScript, PHP, and Laravel.
              </p>
              <p className="text-[#D0D0D0] text-center text-xl">
                I continued to improve my design skills with Figma and further
                sharpened my Git knowledge. My journey has been enriching so
                far, and I’m excited about the future possibilities in web
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-primary">
        <div className="containerSkill max-w-[1440px] mx-auto py-24">
          <div className="skillTitle">
            <h1 className="text-[64px] font-bold text-center text-[#fff]">
              Skill
            </h1>
          </div>
          <div className="skillIcon grid grid-cols-8 gap-y-8 my-8 items-center justify-items-center">
            <div className="html w-20 h-20">
              <Image src={Html} 
              alt="html_image" 
              className="w-[100%] h-auto" />
            </div>
            <div className="css w-20 h-20">
              <Image 
              src={Css} 
              alt="css" 
              className="w-[100%] h-auto" />
            </div>
            <div className="sass w-20 h-20">
              <Image 
              src={Sass} 
              alt="sass" 
              className="w-[100%] h-auto" />
            </div>
            <div className="javascript w-20 h-20">
              <Image
                src={JavascriptIcon}
                alt="javascript"
                className="w-[100%] h-auto"
              />
            </div>
            <div className="typescript w-20 h-20">
              <Image
                src={TypescriptIcon}
                alt="typescript"
                className="w-[100%] h-auto"
              />
            </div>
            <div className="react w-20 h-20">
              <Image
                src={ReactLogo}
                className="w-[100%] h-auto"
                alt="react_logo"
              />
            </div>
            <div className="bootstrap w-20 h-20">
              <Image
                src={BootstrapIcon}
                className="w-[100%] h-auto"
                alt="bootstrap"
              />
            </div>
            <div className="tailwind w-20 h-20">
              <Image
                src={TailwindIcon}
                className="w-[100%] h-auto"
                alt="tailwind"
              />
            </div>
            <div className="nextjs w-20 h-20">
              <Image 
              src={Nextjs} 
              className="w-[100%] h-auto"
               alt="next_logo" />
            </div>

            <div className="figma  w-20 h-20">
              <Image 
              src={FigmaIcon}
               className="w-[100%] h-auto"
                alt="figma" />
            </div>
            <div className="git  w-20 h-20">
              <Image 
              src={GitIcon} 
              className="w-[100%] h-auto" 
              alt="git" />
            </div>
            <div className="php  w-20 h-20">
              <Image src={PhpIcon}
               className="w-[100%] h-auto" 
               alt="php" />
            </div>
            <div className="laravel w-20 h-20">
              <Image 
              src={Laravel} 
              className="w-[100%] h-auto"
               alt="laravel" />
            </div>
            <div className="mysql w-20 h-20">
              <Image 
              src={Mysql}
               className="w-[100%] h-auto"
                alt="mysql" />
            </div>
            <div className="postman w-20 h-20">
              <Image 
              src={Postman} 
              className="w-[100%] h-auto" 
              alt="mysql" />
            </div>
            <div className="restApi w-20 h-20">
                <Image 
                src={RestApi}
                 className="w-[100%] h-auto" 
                 alt="restApi"  />
            </div>
          </div>
        </div>
      </section>

       <section className="bg-bg-primary">
           <div className="portfolioContainer max-w-[1440px] mx-auto">
              
           </div>
       </section>
    </main>
  );
}
