"use client";
import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown } from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";

const DropdownButton = ({ user }) => {
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("logout successfully");
  };
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image alt={user?.name} src={user?.Image} />
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link className="w-full" href={`/dashboard/${user.role}`}>
              Dashboard
            </Link>
          </Dropdown.Item>
          <Dropdown.Item className="w-full" variant="danger">
            <div className="flex w-full items-center justify-between gap-2">
              <button
                onClick={handleLogout}
                className="w-full flex gap-2 items-center"
              >
                <ArrowRightFromSquare className="size-3.5 text-danger" />
                Logout
              </button>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default DropdownButton;
