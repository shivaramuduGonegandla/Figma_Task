import React from "react";
import { 
  LayoutGrid, 
  Users, 
  GitMerge, 
  UserCheck, 
  Workflow, 
  Shield, 
  Box, 
  UserPlus, 
  Binary, 
  Wrench, 
  ClipboardList, 
  Sparkles, 
  Gift 
} from "lucide-react";
import Logo from "./Logo";
import SidebarLink from "./SidebarLink";

const Sidebar  = () => {
  return (
    <div className="w-64 min-h-screen bg-[#0A0C14] text-gray-300 p-4 flex flex-col">
      <Logo />
      <nav className="mt-8 space-y-2">
        <SidebarLink icon={<ClipboardList />} label="Internal Audit" hasSubmenu />
        <SidebarLink icon={<Binary />} label="UAT Testing" />
        <SidebarLink icon={<GitMerge />} label="Intract" hasSubmenu />
        <SidebarLink icon={<Users />} label="Queue" isActive />
        <SidebarLink icon={<Workflow />} label="Workflow" />
        <SidebarLink icon={<Shield />} label="Admin" />
        <SidebarLink icon={<Box />} label="Asset" />
        <SidebarLink icon={<UserPlus />} label="Parent" />
        <SidebarLink icon={<Binary />} label="Option One" />
        <SidebarLink icon={<Binary />} label="Option Two" />
        <SidebarLink icon={<Wrench />} label="All Accessories" />
        <SidebarLink icon={<ClipboardList />} label="Internal Audit" hasSubmenu />
        <SidebarLink icon={<Sparkles />} label="Decorating" hasSubmenu />
        <SidebarLink icon={<Gift />} label="Presenting" />
      </nav>
    </div>
  );
};

export default Sidebar;
