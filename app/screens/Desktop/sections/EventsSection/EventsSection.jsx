import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const EventsSection = () => {
    // Event data that can be mapped over
    const events = [
        { date: "April 13", title: "Palm Sunday" },
        { date: "April 13", title: "Palm Sunday" },
        { date: "April 13", title: "Palm Sunday" },
        { date: "April 13", title: "Palm Sunday" },
    ];

    return (
        <section className="w-full flex justify-center py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1135px]">
                {events.map((event, index) => (
                    <Card
                        key={index}
                        className="w-full max-w-[555px] h-[154px] rounded-2xl shadow-[0px_4px_13.5px_#00000017] overflow-hidden"
                    >
                        <CardContent className="p-0 h-full relative flex gap-12 items-center">
                            <div className="flex items-center">
                                <div className="w-[182px] h-[134px] my-[9px] ml-3 bg-[#e3e3e3] rounded-[11px]" />
                                <div className="flex flex-col justify-center ml-8 flex-1">
                                    <p className="[font-family:'Inter',Helvetica] font-medium text-[#275e8b] text-base">
                                        {event.date}
                                    </p>
                                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#275e8b] text-xl">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex items-center pr-4">
                                <ChevronRightIcon className="w-[20px] h-6 text-[#275e8b]" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
