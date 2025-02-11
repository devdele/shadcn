"use client";

import * as React from "react";
import { useState } from "react";
import { House, Settings2, LucideIcon, FileText } from "lucide-react";
import Settings from "@/app/Pages/settings";
import CostumerData from "@/app/Pages/costumer-data";
import Home from "@/app/Pages/home";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  Component: React.ComponentType;
  icon: LucideIcon;
}

interface NavData {
  navMain: NavItem[];
}

const data: NavData = {
  navMain: [
    {
      title: "Home",
      Component: Home,
      icon: House,
    },
    {
      title: "Costumer-data",
      Component: CostumerData,
      icon: FileText,
    },
    {
      title: "Settings",
      Component: Settings,
      icon: Settings2,
    },
  ],
};

const AppSidebar: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>(
    data.navMain[0].title
  );

  const SelectedComponent = data.navMain.find(
    (item) => item.title === selectedTitle
  )?.Component;

  return (
    <div className="flex">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem />
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="font-semibold text-lg mb-5">
              Dash
            </SidebarGroupLabel>
            <SidebarMenu className="space-y-5">
              {" "}
              {data.navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  className="group/collapsible"
                >
                  <SidebarMenuItem className="gap-5">
                    {" "}
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        onClick={() => setSelectedTitle(item.title)}
                      >
                        {item.icon && <item.icon />}
                        <span className="text-[17px]">{item.title}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent />
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <div className="flex-1 p-4">
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default AppSidebar;
