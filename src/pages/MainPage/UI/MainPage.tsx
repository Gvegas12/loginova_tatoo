import { FC } from "react";
import { Header } from "@/widgets/Header";
import { SectionHero } from "@/features/SectionHero";
import { SectionAbout } from "@/features/SectionAbout";
import { SectionSuggestions } from "@/features/SectionSuggestions";
import { SectionCallback } from "@/features/SectionCallback";

const MainPage: FC = () => (
  <div>
    <Header />
    <SectionHero />
    <SectionAbout />
    <SectionSuggestions />
    <SectionCallback />
  </div>
);

export default MainPage;
