"use client";
import SideNav from "@/app/ui/dashboard/sidenav";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      className={clsx(`flex h-screen flex-col md:flex-row md:overflow-hidden`, {
        "bg-red-50": pathname === "/dashboard/customers",
        "bg-blue-50": pathname === "/dashboard/invoices",
      })}
    >
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
