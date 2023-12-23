import {TopSelllingSection, Why4u} from "@/components/home";
import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  return (
    <div
      style={{
        background: `radial-gradient(
          18.97% 28.49% at 67.19% 61.12%,
          rgba(221, 70, 62, 0.05) 0%,
          rgba(234, 0, 94, 0) 100%
        ),
        radial-gradient(
          44.39% 44.39% at -2.94% 63.53%,
          rgba(0, 183, 195, 0.1) 0%,
          rgba(0, 183, 195, 0) 100%
        )`,
      }}>
      <TopSelllingSection />
      {/* <Why4u /> */}
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
