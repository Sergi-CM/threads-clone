import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import TopBar from "@/components/shared/TopBar/TopBar";
import LeftSidebar from "@/components/shared/LeftSidebar/LeftSidebar";
import BottomBar from "@/components/shared/BottomBar/BottomBar";
import RightSidebar from "@/components/shared/RightSidebar/RightSidebar";

export const metadata = {
  title: "Threads",
  description: "A cool Threads app clone",
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <TopBar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
