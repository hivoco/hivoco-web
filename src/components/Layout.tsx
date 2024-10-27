// components/Layout.tsx
import Head from "next/head";

interface LayoutProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterImage?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  ogImage,
  ogUrl,
  twitterImage,
  children,
}) => {
  return (
    <>
      <Head>
        <title>
          {title ||
            "HiVoco Studios | Voice AI first solutions – Bharat Bhasha AI, Talking Brochures AI and Razor Sharp Operations"}
        </title>
        <meta
          name="description"
          content={
            description ||
            "HiVoco Studios is an Award-winning start-up with focus on AI based solutions on Feature Phones and Browser based applications  for Pre-Sales, Customer Care & Interactive Content for Retail Store Operations. Solve your deep business problems with our solutions like Bharat Bhasha AI, Talking Brochures AI and Razor Sharp Operations and more."
          }
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={
            title ||
            "HiVoco Studios | Voice AI first solutions – Bharat Bhasha AI, Talking Brochures AI and Razor Sharp Operations"
          }
        />
        <meta
          property="og:description"
          content={
            description ||
            "HiVoco Studios is an Award-winning start-up with focus on AI based solutions on Feature Phones and Browser based applications  for Pre-Sales, Customer Care & Interactive Content for Retail Store Operations. Solve your deep business problems with our solutions like Bharat Bhasha AI, Talking Brochures AI and Razor Sharp Operations and more."
          }
        />
        <meta property="og:image" content={ogImage || "/svgs/HV.svg"} />
        <meta
          property="og:url"
          content={ogUrl || "https://www.hivocostudios.com"}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={
            title ||
            "HiVoco Studios | Voice AI first solutions – Bharat Bhasha AI, Talking Brochures AI and Razor Sharp Operations"
          }
        />
        <meta
          name="twitter:description"
          content={
            description ||
            "HiVoco Studios is an Award-winning start-up with focus on AI based solutions on Feature Phones and Browser based applications  for Pre-Sales, Customer Care & Interactive Content for Retail Store Operations. Solve your deep business problems with our solutions like Bharat Bhasha AI, Talking Brochures AI and Razor Sharp Operations and more."
          }
        />
        <meta name="twitter:image" content={twitterImage || "/svgs/HV.svg"} />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
