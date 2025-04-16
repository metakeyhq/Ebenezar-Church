import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

import Image from "next/image";
import ChurchBg from "../../../../../public/church-bg.png";

export const ServiceTimingSection = () => {
  return (
    <div className="relative mt-6 md:mt-10 w-full h-[500px] md:h-[773px]">
      <Image
        src={ChurchBg}
        alt="Church Background"
        fill
        className="object-cover"
      />
      
      <div className="absolute inset-x-0 md:right-10 md:left-auto top-1/2 -translate-y-1/2 bg-white/95 flex flex-col p-4 md:p-8 space-y-3 md:space-y-4 w-full md:max-w-[500px] z-10 mx-auto">
        <h2 className="font-medium text-[#275e8b] text-[28px] md:text-[38.2px] text-center md:text-left">
          Latest Sermon
        </h2>

        <Card className="w-full h-[250px] md:h-[373px] bg-[#d9d9d9] border-none rounded-none">
          <CardContent className="p-0">
            {/* Sermon content would go here */}
          </CardContent>
        </Card>

        <Button
          variant="outline"
          className="w-[150px] md:w-[187px] h-[45px] md:h-[55px] bg-white rounded-none border-[#275e8b] text-[#275e8b] text-[18px] md:text-[24.6px] font-medium hover:bg-[#275e8b] hover:text-white mx-auto md:mx-0"
        >
          Browse all
        </Button>

        <p className="font-normal text-[#275e8b] text-[14px] md:text-[16.1px] text-center md:text-left">
          You can listen to sermons anytime on youtube.
        </p>
      </div>
    </div>
  );
};
