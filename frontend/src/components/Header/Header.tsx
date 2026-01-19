import React from "react";
import { ActionIcon } from "@mantine/core";
import {
  IconBellRinging,
  IconLayoutSidebarLeftCollapseFilled,
} from "@tabler/icons-react";
import ProfileMenu from "./ProfileMenu";
const Header = () => {
  return (
    <div className="bg-cyan-100 w-full h-16 flex justify-between px-5 items-center ">
      <ActionIcon variant="transparent" size="xl" aria-label="Settings">
        <IconLayoutSidebarLeftCollapseFilled size={35} />
      </ActionIcon>

      <div className="flex gap-5 items-center">
        <ActionIcon variant="transparent" size="xl" aria-label="Settings">
          <IconBellRinging size={25} />
        </ActionIcon>
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Header;
