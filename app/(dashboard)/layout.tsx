import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import UserNav from "@/components/shared/UserNav";
import { ModalProvider } from "@/hooks/useModal";

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
        <ModalProvider>
          <div className="flex-grow flex-1 flex">{children}</div>
        </ModalProvider>
        <Footer />
      </main>
    </section>
  );
}
