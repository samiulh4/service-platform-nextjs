import AdminShell from "@/components/ui/Admin/AdminShell";

export const metadata = {
  title: "Admin | Service Platform",
  description: "Service Platform admin dashboard",
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
