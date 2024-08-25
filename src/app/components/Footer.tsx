"use client";

import React from "react";
import Button from "@/components/Button";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <>
      <footer className="bg-bg-primary">
        <div className="footerContainer py-28 max-w-[576px] mx-auto">
          <div className="gridFooter grid justify-center justify-items-center gap-y-4">
            <div className="button">
              <Button
                name="Get in touch"
                className="bg-[#A8FFD2] px-16 py-4 text-2xl font-bold text-[#050B38] rounded-lg"
                type="button"
              />
            </div>
            <div className="paragraphFooter">
              <p className="text-[#fff] text-center text-2xl font-normal">What&apos;s next? Feel free to reach out to me if you&apos;re looking for a developer, have a query, or simply want to connect.</p>
            </div>
            <div className="email">
               <MailOutlineIcon style={{color: "#fff"}} /> <span className="text-lg font-normal text-[#fff] ml-4">uttampun62@gmail.com</span>
            </div>
            <div className="phone">
               <PhoneAndroidIcon  style={{color: "#fff"}} /> <span className="text-lg font-normal text-[#fff] ml-4">9742328810, 9814436510</span>
            </div>

            <div className="youMay">
                <p className="text-gray-400">You may also find me on these platforms!</p>
            </div>
            <div className="socialIcon flex gap-x-3">
                <GitHubIcon style={{color: "#fff"}} />
                <LinkedInIcon  style={{color: "#fff"}} />
            </div>
          </div>
         
        </div>
        <div className="copyrights pb-12 text-center">
            <strong className="text-[#DADADA] text-xl">2024@copyrights | Designed By uttam</strong>
          </div>
      </footer>
    </>
  );
}

export default Footer;
