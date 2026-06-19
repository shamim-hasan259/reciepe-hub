import Link from "next/link";
import { getUserSession } from "../lib/session/session";
import { Button, Drawer } from "@heroui/react";
import { Bars } from "@gravity-ui/icons";
import NavItem from "./NavItem";

const DashboardSidebar = async () => {
  const user = await getUserSession();
  const daashboardItems = {
    user: [
      {
        id: "overview",
        label: "Overview",
        path: "/dashboard/user", // অথবা আপনার মেইন ড্যাশবোর্ড পাথ
        // icon: <FiPieChart className="w-5 h-5" />,
      },
      {
        id: "add-recipe",
        label: "Add Recipe",
        path: "/dashboard/add-recipe",
        // icon: <FiPlusCircle className="w-5 h-5" />,
      },
      {
        id: "my-recipes",
        label: "My Recipes",
        path: "/dashboard/my-recipes",
        // icon: <FiBookOpen className="w-5 h-5" />,
      },
      {
        id: "favorites",
        label: "Favorites",
        path: "/dashboard/favorites",
        // icon: <FiStar className="w-5 h-5" />,
      },
      {
        id: "purchased",
        label: "Purchased",
        path: "/dashboard/purchased",
        // icon: <FiShoppingCart className="w-5 h-5" />,
      },
      {
        id: "profile",
        label: "Profile",
        path: "/dashboard/profile",
        // icon: <FiUser className="w-5 h-5" />,
      },
    ],

    admin: [
      {
        id: "overview",
        label: "Overview",
        path: "/admin/overview",
        // icon: <FiPieChart className="w-5 h-5" />,
      },
      {
        id: "manage-users",
        label: "Manage Users",
        path: "/admin/manage-users",
        // icon: <FiUsers className="w-5 h-5" />,
      },
      {
        id: "manage-recipes",
        label: "Manage Recipes",
        path: "/admin/manage-recipes",
        // icon: <FiBookOpen className="w-5 h-5" />,
      },
      {
        id: "reports",
        label: "Reports",
        path: "/admin/reports",
        // icon: <FiBarChart2 className="w-5 h-5" />,
      },
      {
        id: "transactions",
        label: "Transactions",
        path: "/admin/transactions",
        // icon: <FiCreditCard className="w-5 h-5" />,
      },
    ],
  };

  const navItems = daashboardItems[user?.role || "user"];

  // const navContent = (
  //   <nav className="flex flex-col gap-1">
  //     {navItems.map((item) => (
  //       <Link
  //         key={item.id}
  //         href={item.path}
  //         className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
  //       >
  //         {/* <item.icon size={18} /> */}
  //         <span>{item.label}</span>
  //       </Link>
  //     ))}
  //   </nav>
  // );
  return (
    <Drawer>
      <aside className="hidden w-64 h-screen shawdow-lg shrink-0 boreder border-r border-default p-4 lg:block border-cyan-200/10 backdrop-blur-md bg-linear-to-t from-white via-sky-50 to-white dark:from-[#0b1120] dark:via-[#111827] dark:to-black">
        <NavItem navItems={navItems} />
      </aside>
      <Button
        variant="outline"
        className="bg-base-300 text=4xl text-black dark:text-white px-4 py-2 rounded md:hidden"
      >
        <Bars />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <NavItem navItems={navItems} />
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
};
export default DashboardSidebar;
