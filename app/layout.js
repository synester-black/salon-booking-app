import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <div className="md:px-20">
        <Header/>
        {children}
        <script src="https://app.wotnot.io/chat-widget/6YwrQwW4wfNH104727220068WtZx4YSC.js" defer></script>

        <Footer/>
      </div>
      </body>
    </html>
  );
}
