import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  url?: string;
  icon?: LucideIcon;
  subItems?: NavItem[];
  roles?: string[];
}

export interface NavGroup {
  id: number;
  label: string;
  items: NavItem[];
}
