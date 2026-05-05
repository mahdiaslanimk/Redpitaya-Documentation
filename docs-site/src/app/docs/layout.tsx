import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-8 py-8">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <MobileSidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
