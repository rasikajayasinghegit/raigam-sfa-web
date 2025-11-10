import { NavLink } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";
import { sidebarItems } from "../../routes/sidebar-config";
import type { UserRole } from "../../types/auth";
import { isRoleAuthorized } from "../../utils/roles";
import type { NavItem } from "../../types/navigation";
import { cn } from "../../lib/utils";

interface SidebarProps {
  role?: UserRole;
}

const renderNavItem = (item: NavItem, role?: UserRole, depth = 0) => {
  if (item.roles && !isRoleAuthorized(role, item.roles as UserRole[])) {
    return null;
  }

  const paddingOptions = ["pl-0", "pl-2", "pl-4", "pl-6"] as const;
  const paddingLeft = paddingOptions[Math.min(depth, paddingOptions.length - 1)];

  if (item.subItems && item.subItems.length > 0) {
    return (
      <div key={item.title} className="space-y-1">
        <p className={cn("px-2 text-xs font-semibold uppercase text-muted-foreground", paddingLeft)}>
          {item.title}
        </p>
        <div className="space-y-1">
          {item.subItems.map((subItem) => renderNavItem(subItem, role, depth + 1))}
        </div>
      </div>
    );
  }

  if (!item.url) {
    return null;
  }

  const Icon = item.icon;

  return (
    <NavLink
      key={item.url}
      to={item.url}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
          isActive && "bg-accent text-accent-foreground",
          paddingLeft
        )
      }
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span>{item.title}</span>
    </NavLink>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  return (
    <aside className="flex h-full w-72 flex-col border-r bg-card">
      <div className="flex items-center px-6 py-4 text-lg font-semibold">Raigam SFA</div>
      <ScrollArea className="flex-1 px-4 py-2">
        <nav className="space-y-6">
          {sidebarItems.map((group) => (
            <div key={group.id} className="space-y-2">
              <p className="px-2 text-xs font-semibold uppercase text-muted-foreground">
                {group.label}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => renderNavItem(item, role))}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};
