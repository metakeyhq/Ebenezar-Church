import { timelineData } from '../../components/Timeline/data';
import TimelineItem from '../../components/Timeline/TimelineItem';

export default function ServiceTiming() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 px-4">
      <h2 className="text-4xl font-semibold text-[#275E8B] mb-12 text-center">
        Service Timing
      </h2>
      <div className="relative w-full max-w-5xl my-10 flex flex-col after:absolute after:left-[calc(50%_-_2px)] after:h-full after:w-1 after:content-normal after:bg-[#275E8B]">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    </div>
  );
}
