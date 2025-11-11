import {
  Anchor,
  BriefcaseBusiness,
  CalendarClock,
  ChartArea,
  ChartLine,
  ChartNoAxesCombined,
  FileCheck2,
  FileHeart,
  House,
  LayoutDashboard,
  ListRestart,
  LocateFixed,
  MapPinHouse,
  MapPinPlus,
  ReceiptText,
  Route,
  Store,
  Trophy,
  Undo2,
  User,
  UserRoundCog,
  Warehouse,
} from 'lucide-react'
export type NavItem = { title: string; url?: string; icon?: any; subItems?: NavItem[] }
export type NavGroup = { id: number; label: string; items: NavItem[] }
export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: 'Dashboards',
    items: [
      {
        title: 'Home Report',
        url: '/dashboard/home-report',
        icon: House,
      },
      {
        title: 'Heart Count',
        url: '/dashboard/heart-count',
        icon: FileHeart,
      },
    ],
  },
  {
    id: 2,
    label: 'Master Settings',
    items: [
      {
        title: 'Demarcation',
        url: '/master-settings/demarcation',
        icon: MapPinHouse,
      },
      {
        title: 'Distributor Mapping',
        url: '/master-settings/distributor-mapping',
        icon: Anchor,
      },
      {
        title: 'Final Geography Mapping',
        url: '/master-settings/final-geography-mapping',
        icon: MapPinPlus,
      },
    ],
  },
  {
    id: 3,
    label: 'Sales',
    items: [
      {
        title: 'Sales Details',
        icon: ReceiptText,
        subItems: [
          {
            title: 'View Item Range Wise',
            url: '/sales/sales-details/view-item-range-wise',
          },
          {
            title: 'Stock',
            url: 'sales/sales-details/stock',
          },
          {
            title: 'View Invoices',
            url: 'sales/sales-details/view-invoices',
          },
          {
            title: 'Market Return',
            url: 'sales/sales-details/market-return',
          },
        ],
      },
      {
        title: 'Sales Operations',
        icon: BriefcaseBusiness,
        subItems: [
          {
            title: 'Category Add',
            url: '/sales/sales-operations/category-add',
          },
          {
            title: 'Item Master',
            url: 'sales/sales-operations/item-master',
          },
          {
            title: 'Item Add',
            url: 'sales/sales-operations/item-add',
          },
          {
            title: 'Working Day',
            url: 'sales/sales-operations/working-day',
          },
          {
            title: 'Target',
            url: 'sales/sales-operations/target',
          },
          {
            title: 'Free Issue',
            url: 'sales/sales-operations/free-issue',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Outlet Module',
    items: [
      {
        title: 'Customer(Outlet)',
        url: '/outlet-module/customer',
        icon: Store,
      },
      {
        title: 'Route',
        url: '/outlet-module/route',
        icon: Route,
      },
    ],
  },
  {
    id: 5,
    label: 'Reports',
    items: [
      {
        title: 'Achievement Category Wise',
        url: '/reports/achievement-category-wise',
        icon: Trophy,
      },
      {
        title: 'Area Wise Sales Report',
        url: '/reports/area-wise-sales-report',
        icon: ChartArea,
      },
      {
        title: 'Item Summary Report',
        url: '/reports/item-summary-report',
        icon: FileCheck2,
      },
      {
        title: 'Territory Wise Sales Report',
        url: '/reports/territory-wise-sales-report',
        icon: ChartLine,
      },
      {
        title: 'Territory Wise Items Report',
        url: '/reports/territory-wise-items-report',
        icon: ChartNoAxesCombined,
      },
    ],
  },
  {
    id: 6,
    label: 'HR Module',
    items: [
      {
        title: 'GPS Monitoring',
        url: '/hr-module/gps-monitoring',
        icon: LocateFixed,
      },
      {
        title: 'Time Attendance',
        url: '/hr-module/time-attendance',
        icon: CalendarClock,
      },
    ],
  },
  {
    id: 7,
    label: 'Admin Module',
    items: [
      {
        title: 'User Module',
        icon: User,
        subItems: [
          {
            title: 'Add/Modifiy User',
            url: '/admin-module/user-module/add-modifiy-user',
          },
        ],
      },
      {
        title: 'Operation',
        icon: UserRoundCog,
        subItems: [
          {
            title: 'Reverse Requests',
            url: '/admin-module/operation/reverse-requests',
          },
          {
            title: 'Manual Bill Quota',
            url: '/admin-module/operation/manual-bill-quota',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    label: 'Agency Module',
    items: [
      {
        title: 'Dashboard',
        icon: LayoutDashboard,
        subItems: [
          {
            title: 'Monthly Target',
            url: '/agency-module/dashboard/monthly-target',
          },
        ],
      },
      {
        title: 'Invoice',
        icon: ReceiptText,
        subItems: [
          {
            title: 'Actual Invoice',
            url: '/agency-module/invoice/actual-invoice',
          },
          {
            title: 'Post Invoice',
            url: '/agency-module/invoice/post-invoice',
          },
          {
            title: 'Manual Invoice',
            url: '/agency-module/invoice/manual-invoice',
          },
          {
            title: 'View Invoice',
            url: '/agency-module/invoice/view-invoice',
          },
        ],
      },
      {
        title: 'Loading List',
        icon: ListRestart,
        subItems: [
          {
            title: 'View Loading List',
            url: '/agency-module/loading-list/view-loading-list',
          },
        ],
      },
      {
        title: 'Return',
        icon: Undo2,
        subItems: [
          {
            title: 'Market Return',
            url: '/agency-module/market-return/return',
          },
        ],
      },
      {
        title: 'Stock',
        icon: Warehouse,
        subItems: [
          {
            title: 'View Stock',
            url: '/agency-module/stock/view-stock',
          },
          {
            title: 'Add Stock',
            url: '/agency-module/stock/add-stock',
          },
          {
            title: 'Request Order',
            url: '/agency-module/stock/request-order',
          },
        ],
      },
    ],
  },
]
