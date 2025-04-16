import React from "react";
import { Button } from "../../../../components/ui/button";

export const FindYourBelongingSection = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[773px] bg-[url(/image-1.png)] bg-cover bg-center flex flex-col items-center justify-center px-4 md:px-0">
      <div className="text-center space-y-4">
        <h2 className="font-light text-white text-[32px] md:text-[64.4px] font-['Inter',Helvetica] tracking-[0] leading-normal">
          WELCOME TO
        </h2>

        <h1 className="font-semibold text-white text-[32px] md:text-[64.4px] font-['Inter',Helvetica] tracking-[0] leading-normal">
          C.S.I Ebenezar Church
        </h1>


        <div className="mt-8 md:mt-12 flex justify-center">
          <Button
            variant="outline"
            className="h-[45px] md:h-[55px] w-[180px] md:w-[228px] rounded-none bg-transparent border-white text-white hover:text-white hover:bg-white/10"
          >
            <span className="font-['Inter',Helvetica] font-medium text-[18px] md:text-[24.6px]">
              Latest Sermon
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
