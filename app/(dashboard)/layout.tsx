import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import UserNav from "@/components/shared/UserNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="relative flex flex-col min-h-screen max-container">
        <Navbar>
          <div className="flex gap-2 pr-4">
            <UserNav />
          </div>
        </Navbar>
        <div className="flex-grow flex-1">{children}</div>
        <Footer />
      </main>
    </section>
  );
}
