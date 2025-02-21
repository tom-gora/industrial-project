import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@headlessui/react";
import { useCallback } from "react";

const emblaOpts = {
  loop: true,
  containScroll: "keepSnaps"
};
const autoPlayOpts = {
  delay: 10000,
  stopOnMouseEnter: true,
  stopOnFocusIn: true
};

const buttonClasses =
  "btn-custom outline-main grid items-center justify-center rounded-xl bg-main px-6 py-2 font-serif font-extrabold leading-tight text-main outline outline-1 outline-offset-[-0.15rem] transition-all data-[active]:bg-main data-[focus]:bg-muted/50 data-[hover]:bg-muted/50 data-[hover]:outline-offset-0 data-[focus]:ring-4 data-[focus]:ring-subtle/90";

export default (props: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOpts, [Autoplay(autoPlayOpts)]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const news = props.news;

  const onLoadHandler = (id: string) => () => {
    const loaded = document.querySelector(`#${id}`);
    loaded?.parentNode.classList.remove("animate-pulse", "opacity-50");
  };

  return (
    <div className="embla relative mb-12 h-fit w-fit py-4">
      <h1 className="px-4 py-8 text-3xl">Recent news</h1>
      <div className="mb-4 grid items-center">
        <div className="embla__viewport h-fit overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex items-start gap-8">
            {news?.length > 0 &&
              news.map((newsItem: any) => (
                <div key={newsItem.id} className="embla__slide flex flex-col items-start justify-center gap-4 px-4">
                  <h2 className="font-serif text-xl">{newsItem.data.title}</h2>
                  <div className="z-10 aspect-video w-full animate-pulse rounded-md border-2 border-current bg-text-like opacity-50 duration-75">
                    <img
                      id={newsItem.id}
                      onLoad={onLoadHandler(newsItem.id)}
                      src={newsItem.data.featureImage.src}
                      alt={newsItem.data.featureImage.alt}
                      fetchPriority={newsItem.id === news[0].id ? "high" : "auto"}
                      className="ebla__image aspect-video rounded-md border-2 border-current bg-cover"
                    />
                  </div>
                  <p className="text-lg">{newsItem.data.excerpt}</p>
                  <a href="#" className="flex gap-2">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M9.646 7.646a.5.5 0 0 1 .708 0L14.707 12l-4.353 4.354a.5.5 0 0 1-.708-.708L13.293 12L9.646 8.354a.5.5 0 0 1 0-.708"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="embla__controls flex h-min w-fit justify-start gap-8 pt-2">
        <Button className={`${buttonClasses} embla__prev`} onClick={scrollPrev}>
          Prev
        </Button>
        <Button className={`${buttonClasses} embla__next`} onClick={scrollNext}>
          Next
        </Button>
      </div>
    </div>
  );
};
