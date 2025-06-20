import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const CtaFooterSection = (): JSX.Element => {
  // Footer navigation data
  const footerNavigation = [
    {
      title: "Company",
      links: [
        { text: "About us", href: "#" },
        { text: "Team", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Blog", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Help & Support", href: "#" },
        { text: "Partner with us", href: "#" },
        { text: "Ride with us", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms & Conditions", href: "#" },
        { text: "Refund & Cancellation", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Cookie Policy", href: "#" },
      ],
    },
  ];

  // Social media icons
  const socialIcons = [
    { icon: <InstagramIcon className="h-6 w-6" />, href: "#" },
    { icon: <FacebookIcon className="h-6 w-6" />, href: "#" },
    { icon: <TwitterIcon className="h-6 w-6" />, href: "#" },
  ];

  return (
    <footer className="flex flex-col items-center justify-center w-full bg-[#212121]">
      <div className="flex flex-col w-full max-w-[1518px] items-start gap-[63px] px-4 md:px-6 lg:px-8">
        <Separator className="w-full bg-neutral-700" />

        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Navigation columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 w-full md:w-auto">
            {footerNavigation.map((section, index) => (
              <div key={index} className="flex flex-col items-start gap-10">
                <h3 className="font-headline-6-bold text-white">
                  {section.title}
                </h3>
                <div className="flex flex-col items-start gap-4">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="font-button text-neutral-100 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe section */}
          <div className="flex flex-col gap-[43px] w-full md:w-[483px]">
            {/* Social media */}
            <div className="flex flex-col gap-10">
              <h4 className="font-bold text-neutral-100 text-lg opacity-60 [font-family:'Source_Sans_Pro',Helvetica]">
                FOLLOW US
              </h4>
              <div className="flex items-center gap-4 opacity-80">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-neutral-100 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col items-start gap-10 w-full">
              <p className="font-body-1-bold text-[#bbbbbb]">
                Receive exclusive offers in your mailbox
              </p>
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 flex items-center gap-2.5 pl-4 pr-0 py-2 bg-[#424242] rounded-lg">
                  <MailIcon className="text-[#adadad] h-6 w-6" />
                  <Input
                    type="email"
                    placeholder="Enter Your email"
                    className="border-0 bg-transparent text-[#adadad] font-body-1 focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0"
                  />
                </div>
                <Button className="w-[133px] px-6 py-[21px] rounded-lg shadow-button-shadow bg-[linear-gradient(150deg,rgba(255,184,0,1)_0%,rgba(255,138,0,1)_100%)] font-bold text-white text-lg [font-family:'Source_Sans_Pro',Helvetica]">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col h-[53px] items-start gap-4 w-full">
          <Separator className="w-full bg-neutral-700" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-0">
            <div className="flex items-center gap-2.5">
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-neutral-100 text-[15px] leading-[18.0px]">
                All rights Reserved
              </p>
              <span className="[font-family:'Font_Awesome_5_Free-Regular',Helvetica] font-normal text-neutral-100 text-base">
                ©
              </span>
              <p className="[font-family:'Open_Sans',Helvetica] font-bold text-neutral-100 text-[15px] leading-[18.0px]">
                Your Company, 2021
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-neutral-100 text-[15px] leading-[18.0px]">
                Made with
              </p>
              <span className="[font-family:'Font_Awesome_5_Free-Regular',Helvetica] text-[#ea6353] text-[13px]">
                ♥
              </span>
              <p className="text-neutral-100 text-[15px] leading-[18.0px]">
                by
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-bold text-neutral-100 text-[15px] leading-[18.0px]">
                Themewagon
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
