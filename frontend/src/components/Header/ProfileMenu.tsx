import { Menu, Button, Text } from "@mantine/core";
import { Avatar } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";

 function ProfileMenu() {
  return (
    <Menu shadow="md" width={220}>
      {/* Button */}
      <Menu.Target>
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="font-medium text-lg text-neutral-900">Marshal</span>
          <Avatar src="avatar.jpg" alt="it's me" radius="xl" size={40} />
        </div>
      </Menu.Target>

      {/* Dropdown */}
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>

        <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>

        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>

        <Menu.Item leftSection={<IconPhoto size={14} />}>Gallery</Menu.Item>

        <Menu.Item
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>

        <Menu.Item leftSection={<IconArrowsLeftRight size={14} />}>
          Transfer my data
        </Menu.Item>

        <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;