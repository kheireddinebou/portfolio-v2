import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import "../styles/globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Kheiereddin Boukhatem",
  description:
    "Kheiereddin Boukhatem is a front end developer who builds accessible, inclusive products and digital experiences for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 overflow-x-hidden"
        )}
      >
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
