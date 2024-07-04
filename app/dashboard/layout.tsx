import Sidebar from "@/components/Dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex bg-[#efefef] h-full">
      <Sidebar />
      <div className="w-full  p-5 flex flex-col h-full">{children}</div>
    </div>
  );
}
