import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/navbar";
import Footer from "./components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GradifyNow",
  description: "This is the Website for Gradify Now, A platform for all the aspiring doctorate and researchers.",
  openGraph: {
    url: "https://learnhub-5lpp.vercel.app",
    type: "website",
    title: "GradifyNow",
    description: "This is the Website for Gradify Now, A platform for all the aspiring doctorate and researchers.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/72d8a9c4-6334-4ae1-9d62-db334ff18601.jpg?token=ERgobjhDUk2bxbbmJxeI09ni9VfSjzK8OtYWCNv3r5g&height=1049&width=1200&expires=33291591311",
        width: 1200,
        height: 1049,
        alt: "GradifyNow - Platform for aspiring doctorate and researchers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gradifynow", // Add your Twitter handle if you have one
    title: "GradifyNow",
    description: "This is the Website for Gradify Now, A platform for all the aspiring doctorate and researchers.",
    images: ["https://opengraph.b-cdn.net/production/images/72d8a9c4-6334-4ae1-9d62-db334ff18601.jpg?token=ERgobjhDUk2bxbbmJxeI09ni9VfSjzK8OtYWCNv3r5g&height=1049&width=1200&expires=33291591311"],
  },
  metadataBase: new URL("https://learnhub-5lpp.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
