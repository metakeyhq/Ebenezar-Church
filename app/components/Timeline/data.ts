export type TimelineItemType = {
  time: string;
  title: string;
  category: {
    tag: string;
    color: string;
  };
};

export const timelineData: TimelineItemType[] = [
  {
    time: "7:00 pm - 7:30 pm",
    title: "Evening Service",
    category: {
      tag: "Every Monday - Tuesday",
      color: "#275E8B",
    },
  },
  {
    time: "7:00 AM - 11:30 AM",
    title: "Sunday Service",
    category: {
      tag: "Every Sunday",
      color: "#275E8B",
    },
  },
  {
    time: "7:30 PM - 8:00 PM",
    title: "Women fellowship",
    category: {
      tag: "Every Tuesday",
      color: "#275E8B",
    },
  },
];
