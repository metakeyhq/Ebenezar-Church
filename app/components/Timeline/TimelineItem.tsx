import { TimelineItemType } from './data';

const TimelineItem = ({ data }: { data: TimelineItemType }) => {
  const { time, title, category } = data;

  return (
    <div className="group relative my-[10px] flex w-1/2 justify-end pr-[22px] odd:justify-start odd:self-end odd:pl-[22px] odd:pr-0">
      <div className="relative flex w-[400px] max-w-[95%] flex-col rounded-[5px] bg-white px-4 py-[15px] shadow-md">
        <span className="text-lg font-semibold text-[#275E8B]">
          {category.tag}
        </span>
        <h3 className="mt-2 text-[#275E8B]">{title}</h3>
        <p className="text-sm text-[#275E8B]">{time}</p>
        <span className="absolute -right-8 top-[calc(50%-10px)] z-50 h-5 w-5 rounded-[50%] border-[3px] border-[#275E8B] bg-white group-odd:-left-8 group-odd:right-auto" />
      </div>
    </div>
  );
};

export default TimelineItem;
