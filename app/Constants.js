import { GrResources } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { ClipboardList, PlayCircle, BarChart, Bolt, Info } from "lucide-react";

export const SideBarLinks = [
   {
      name: "dashboard",
      path: "/",
      icons: IoHomeOutline,
    },
    {
      name: "test management",
      path: "/TestManagement",
      icons: ClipboardList,
      submenu: [
        { name: "create test", path: "/TestManagement/Create" },
        { name: "manage tests", path: "/TestManagement/Manage" },
        { name: "import/export tests", path: "/TestManagement/ImportExport" },
      ],
    },
    {
      name: "execution",
      path: "/Execution",
      icons: PlayCircle,
      submenu: [
        { name: "run test", path: "/Execution/Run" },
        { name: "schedule test", path: "/Execution/Schedule" },
      ],
    },
    {
      name: "reports",
      path: "/Reports",
      icons: BarChart,
      submenu: [
        { name: "execution summary", path: "/Reports/ExecutionSummary" },
        { name: "extent reports", path: "/Reports/ExtentReports" },
        { name: "execution logs", path: "/Reports/ExecutionLogs" },
      ],
    },
    {
      name: "resources",
      path: "/Resources",
      icons: GrResources,
      submenu: [
        { name: "element repository", path: "/Resources/ElementRepository" },
        { name: "drivers", path: "/Resources/Drivers" },
        { name: "data files", path: "/Resources/DataFiles" },
        { name: "code templates", path: "/Resources/CodeTemplates" },
      ],
    },
    {
      name: "configuration",
      path: "/Configuration",
      icons: Bolt,
      submenu: [
        { name: "project settings", path: "/Configuration/ProjectSettings" },
        { name: "user preferences", path: "/Configuration/UserPreferences" },
        { name: "environment variables", path: "/Configuration/EnvironmentVariables" },
      ],
    },
    {
      name: "about",
      path: "/About",
      icons: Info,
    },
];