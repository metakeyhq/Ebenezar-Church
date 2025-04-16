import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { EventsSection } from "./sections/EventsSection";
import { FindYourBelongingSection } from "./sections/FindYourBelongingSection";
import { LatestSermonSection } from "./sections/LatestSermonSection";
import { ServiceTimingSection } from "./sections/ServiceTimingSection/ServiceTimingSection";
import { WelcomeSection } from "./sections/WelcomeSection";
import ServiceTiming from "./ServiceTiming";

export const Desktop = () => {
  // Footer navigation links
  const footerNavLinks = [
    "Home",
    "About us",
    "Our Branches",
    "Events",
    "Members",
    "Groups",
  ];

  // Service timing data
  const serviceTimings = [
    {
      day: "Every Sunday",
      time: "7:00 AM - 11:30 AM",
      position: "left",
    },
    {
      day: "Every Monday - Tuesday",
      time: "7:00 pm - 7:30 pm Evening Service",
      position: "right",
    },
    {
      day: "Every Tuesday",
      time: "7:30 PM - 8:00PM Women fellowship",
      position: "right",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Welcome Section */}
        <div className="w-full mt-3 px-4 md:px-5">
          <WelcomeSection />
        </div>

        <FindYourBelongingSection />

        {/* Service Timing Section */}
        <div className="w-full mt-8 md:mt-16 px-4 md:px-[87px] relative">
          <h2 className="font-normal text-[24px] md:text-[31.1px] text-black tracking-normal leading-normal">
            Loving God. Growing Together. Reaching the World.
          </h2>

          <div className="flex flex-col md:flex-row mt-6 md:mt-[50px]">
            <div className="w-full md:w-[859px] font-normal text-[#727272] text-[14px] md:text-[15.5px] tracking-normal leading-normal">
              We are so glad you&apos;re here! At Harvest Church, we are
              passionate about Loving God, Growing Together, and Reaching the
              World.
              <br />
              <br />
              Our heart is to see people encounter Jesus, experience His love,
              and grow in faith. Whether you&apos;re new to church or have been
              walking with Christ for years, you are welcome here. We believe in
              the power of worship, the truth of the Bible, and the strength of
              a thriving community. Together, we are building a place where hope
              is found, faith is strengthened, and lives are transformed.
              <br />
              <br />
              We would love to meet you and journey alongside you. Join us this
              Sunday—we can&apos;t wait to welcome you!
              <br />
              <br />
              Rev.Stalin Raja
            </div>
            <div className="w-full h-[250px] md:w-[330px] md:h-[330px] mt-6 md:mt-0 md:ml-[69px] bg-[#d9d9d9]" />
          </div>

          <ServiceTimingSection />
        </div>

        {/* Latest Sermon Section */}
        <div className="w-full mt-8 md:mt-16 bg-[#275e8b] py-6 md:py-[53px] relative">
          <h2 className="text-center font-medium text-white text-[28px] md:text-[38.2px] tracking-normal leading-normal">
            Find where you belong
          </h2>

          <LatestSermonSection />
        </div>

        {/* Events Section */}
        <div className="w-full mt-8 md:mt-16 flex flex-col items-center px-4 md:px-0">
          <h2 className="font-medium text-[#275e8b] text-[28px] md:text-[38.2px] tracking-normal leading-normal">
            Events
          </h2>

          <EventsSection />

          <div className="mt-6 md:mt-[50px] flex justify-center">
            <Button
              variant="outline"
              className="w-[150px] md:w-[187px] h-[45px] md:h-[55px] bg-white border border-solid border-[#275e8b] rounded-none"
            >
              <span className="font-medium text-[#275e8b] text-[18px] md:text-[24.6px]">
                View all
              </span>
            </Button>
          </div>

          <Separator className="w-full md:w-[819px] h-[3px] mt-8 md:mt-[50px] bg-[#275e8b]" />
        </div>
              <ServiceTiming />

        {/* Footer */}
        <footer className="w-full mt-8 md:mt-16 bg-[#275e8b] text-white">
          <div className="max-w-[1481px] py-8 md:py-[78px] px-4 md:px-[35px] relative">
            <div className="flex flex-col md:flex-row gap-8 md:gap-0">
              {/* Logo and mission */}
              <div className="flex flex-col items-center md:items-start">
                <img
                  className="w-[180px] md:w-[230px] h-auto md:h-[99px]"
                  alt="Church Logo"
                  src="/logo-gold.svg"
                />
                <div className="mt-4 md:ml-[16px] text-center md:text-left">
                  <p className="text-white text-[18px] md:text-[21.8px] leading-normal md:leading-[23.1px]">
                    We exist to Love God, Grow Together and Reach the World.
                  </p>

                  <div className="flex justify-center md:justify-start mt-6 md:mt-[48px] gap-[12.38px]">
                    <img
                      className="w-[33px] h-[33px]"
                      alt="Instagram"
                      src="/social-instagram.svg"
                    />
                    <img
                      className="w-[33px] h-[33px]"
                      alt="LinkedIn"
                      src="/social-linkedin.svg"
                    />
                    <img
                      className="w-[33px] h-[33px]"
                      alt="Twitter"
                      src="/social-twitter.svg"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation and Contact */}
              <div className="flex flex-col md:flex-row md:ml-auto gap-6 md:gap-[40px] text-center md:text-left">
                <div className="flex flex-col gap-3">
                  {footerNavLinks.map((link, index) => (
                    <a key={index} href="#" className="text-white text-sm">
                      {link}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-[9px]">
                  <p className="text-white text-sm leading-[19.5px]">
                    Krishnarajapuram, Thoothukudi, <br />
                    Tamil Nadu 628002
                  </p>
                  <p className="text-white text-sm leading-[14.8px]">
                    +91-9876543234
                  </p>
                  <p className="text-white text-sm leading-[14.8px]">
                    admin@ebebezarchurch.com
                  </p>
                </div>
              </div>
            </div>

            <Separator className="w-full h-px mt-8 md:mt-[100px] bg-white" />


            <div className="text-center mt-4 md:mt-[16px]">
              <p className="text-white text-sm leading-[19.5px]">
                © 2025 Ebenezar Church. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};