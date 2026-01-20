import React from "react";
import { ActionIcon,  Button } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";

import {
  IconBellRinging,
  IconLayoutSidebarLeftCollapseFilled,
} from "@tabler/icons-react";
import ProfileMenu from "./ProfileMenu";
const Header = () => {
  return (
    <div className="bg-light shadow-lg w-full h-16 flex justify-between px-5 items-center ">
      <ActionIcon variant="transparent" size="xl" aria-label="Settings">
        <IconLayoutSidebarLeftCollapseFilled size={35} />
      </ActionIcon>

      <div className="flex gap-5 items-center">
        <Link to="/login">
          <Button>Login</Button>
        </Link>

        <ActionIcon variant="transparent" size="xl" aria-label="Settings">
          <IconBellRinging size={25} />
        </ActionIcon>
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Header;
