import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import "../styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";

export const metadata = {
  title: "Kheireddine Boukhatem",
  description:
    "Kheireddine Boukhatem is a front end developer who builds accessible, inclusive products and digital experiences for the web.",
  keywords:
    "Kheireddine Boukhatem, Front-end Developer, Front-end Engineer, UI/UX designer, Web Development, Web3, Software Engineering, Mobile Development, React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta
        name="google-site-verification"
        content="tQJQKmTXubj22u8IgbrpoiqgUgziWqFbAPZ5PJ8xVMs"
      />
      <body
        className={cn(
          "bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 overflow-x-hidden"
        )}
      >
        <Providers>
          <Loader>
            <CustomCursor />
            {children}
          </Loader>
        </Providers>
      </body>
    </html>
  );
}
