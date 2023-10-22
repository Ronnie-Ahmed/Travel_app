import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Travel App",
  description: "Developed By Ronnie Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-300 to-blue-900">
        <Navbar />
        <main className="relative  overflow-hidden ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
