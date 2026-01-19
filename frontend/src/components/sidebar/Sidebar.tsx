import React from "react";
import {
  IconHeartbeat,
  IconLayout2,
  IconStethoscope,
  IconMoodHeart,
  IconCalendarCheck,
  IconVaccine,
} from "@tabler/icons-react";
import { Avatar, Text } from "@mantine/core";

const links = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <IconLayout2 stroke={1.5} />,
  },
  {
    name: "Doctors",
    url: "/doctors",
    icon: <IconStethoscope stroke={1.5} />,
  },
  {
    name: "Patients",
    url: "/patients",
    icon: <IconMoodHeart stroke={1.5} />,
  },
  {
    name: "Appointments",
    url: "/appointments",
    icon: <IconCalendarCheck stroke={1.5} />,
  },
  {
    name: "Appointments",
    url: "/appointments",
    icon: <IconCalendarCheck stroke={1.5} />,
  },
  {
    name: "Pharmacy",
    url: "/pharmacy",
    icon: <IconVaccine stroke={1.5} />,
  },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-red-200 flex flex-col items-center pt-3">
      <div className="text-red-500 flex gap-1 items-center ">
        <IconHeartbeat size={40} stroke={2.5} />
        <span className="font-heading text-3xl">Pulse</span>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <div className="p-1 bg-white rounded-full shadow-xl">
          <Avatar variant="filled" src="avatar.jpg" radius="xl" size={60} />
        </div>
        <span className="font-medium">Marshal</span>
        <Text c="dimmed" size="xs">
          Admin
        </Text>
      </div>
    </div>
  );
};

export default Sidebar;
