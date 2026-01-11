import Footer from "@/components/general/Footer";
import Navbar from "@/components/general/Navbar";
import PreFooter from "@/components/general/PreFooter";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <PreFooter />
      <Footer />
    </>
  );
}
