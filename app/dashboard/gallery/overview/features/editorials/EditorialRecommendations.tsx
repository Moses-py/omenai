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
  const generateNaturalSlideWidth = () => {
    if (width >= 1280) return 250;
    if (width >= 1440) return 180;
    // if (width >= 1680) return 180;
    // if (width >= 1024) return 200;
    if (width >= 1024) return 310;
    if (width >= 768) return 250;
    if (width >= 460) return 300;
    return 300;
  };
  return (
    <>
      <OverviewComponentCard
        fullWidth={false}
        title="Latest editorial articles"
      >
        <CarouselProvider
          visibleSlides={1}
          totalSlides={editorialRecommendationMocks.length}
          step={1}
          naturalSlideWidth={500}
          naturalSlideHeight={generateNaturalSlideWidth()}
          isPlaying
          interval={5000}
        >
          {/* <h4 className="text-dark text-base md:text-sm font-normal my-5">
          Latest editorial articles
        </h4> */}
          <Slider>
            {editorialRecommendationMocks.map((editorial, index) => {
              return (
                <Slide key={index} index={index}>
                  <EditorialRecommendationSlide
                    url={editorial.url}
                    title={editorial.title}
                    author={editorial.author}
                    date={editorial.date}
                    category={editorial.category}
                  />
                </Slide>
              );
            })}
          </Slider>
          <div className="flex justify-end gap-x-5 my-4">
            <ButtonBack>
              <BsArrowLeft className="text-md text-base-theme" />
            </ButtonBack>
            <ButtonNext>
              <BsArrowRight className="text-md text-base-theme" />
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* </Carousel> */}
      </OverviewComponentCard>
    </>
  );
}
