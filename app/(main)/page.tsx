import BannerSwiper from "@/components/BannerSwiper";
import FoodMenu from "@/components/FoodMenu";

export default function Home() {
  return (
    <div className="flex w-full flex-wrap">
      <BannerSwiper />
      <FoodMenu />
    </div>
  );
}
