import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="relative flex flex-col min-h-screen max-container">
        <Navbar />
        <div className="flex-grow flex-1">{children}</div>
        <Footer />
      </main>
    </section>
  );
}
