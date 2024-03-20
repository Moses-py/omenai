"use client";
import OverviewComponentCard from "../../components/OverviewComponentCard";
import { editorialRecommendationMocks } from "./mocks";
import EditorialRecommendationSlide from "./components/EditorialRecommendationSlide";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useWindowSize } from "usehooks-ts";
// @ts-ignore
export default function EditorialRecommendations() {
  const { width } = useWindowSize();

  return (
    <div>
      <OverviewComponentCard
        id="tour-external-links"
        fullWidth={false}
        title="Latest editorial articles"
      >
        <h4>Editorial data goes here</h4>
        {/* </Carousel> */}
      </OverviewComponentCard>
    </div>
  );
}
