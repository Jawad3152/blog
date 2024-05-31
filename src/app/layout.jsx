import Navbar from "@/components/Navbar";
import "./globals.css";
import Topbar from "@/components/Topbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        {/* <Navbar />
        {children} */}
      </body>
    </html>
  );
}
