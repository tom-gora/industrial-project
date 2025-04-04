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
  "btn-custom outline-main grid aspect-square w-4 scale-75 items-center justify-center rounded-full bg-main px-6 py-2 font-serif font-extrabold leading-tight text-main outline outline-1 outline-offset-[-0.15rem] transition-all data-[active]:bg-main data-[focus]:bg-muted data-[hover]:bg-muted data-[hover]:outline-offset-0 data-[focus]:ring-4 data-[focus]:ring-subtle/90 md:scale-100";

export default (props: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOpts, [Autoplay(autoPlayOpts)]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const news = props.news;
  const assetUrl = props.assetUrl;

  const staticPlaceholder = document.querySelector("#carousel-placeholder");
  const placeholderSpacer = document.querySelector("#placeholder-spacer");
  staticPlaceholder?.remove();
  placeholderSpacer?.remove();

  const onLoadHandler = (id: string) => () => {
    const loaded = document.querySelector(`#${id}`);
    const loadedParent = loaded?.parentNode as HTMLElement;
    loadedParent.classList.remove("animate-pulse", "opacity-50");
  };

  const genericAlt = (title: string) => `Illustrative image for the section named: "${title}". Apologies, but no specific description was provided.`;

  return (
    <div className={`embla relative flex h-fit w-full flex-col sm:h-[48rem] ${news.length > 0 ? "" : "hidden"}`}>
      <h1 className="px-4 py-8 text-4xl">Recent news from us</h1>
      <div className="mb-4 grid items-start sm:grow">
        <div className="embla__viewport h-fit overflow-hidden" ref={emblaRef}>
          <div className="embla__container group flex items-start gap-4">
            {news?.length > 0 &&
              news.map((newsItem: any) => (
                <div key={`news-item-${newsItem.id}`} className="embla__slide flex flex-col items-start justify-center gap-4 px-4">
                  <a href={`/news/${newsItem.slug}`} className="flex flex-col items-start justify-center gap-4">
                    <h2 className="font-serif text-2xl decoration-main/40 group-hover:underline group-hover:decoration-dashed group-hover:decoration-1 group-hover:underline-offset-[12px]">
                      {newsItem.title}
                    </h2>
                    <div className="z-10 aspect-video w-full animate-pulse rounded-md border-2 border-main bg-muted text-transparent opacity-50">
                      {newsItem.heroImage && (
                        <img
                          id={`news-item-image-${newsItem.id}`}
                          onLoad={onLoadHandler(`news-item-image-${newsItem.id}`)}
                          src={assetUrl + newsItem.heroImage.id}
                          alt={newsItem.heroImage.description ? newsItem.heroImage.description : genericAlt(newsItem.title)}
                          fetchPriority={newsItem.id === news[0].id ? "high" : "auto"}
                          className="ebla__image aspect-video rounded-md border-2 border-current ring-main/40 duration-150 group-hover:ring-2 group-focus:ring-2"
                        />
                      )}
                    </div>
                    <p className="h-max grow text-lg">{newsItem.excerpt}</p>
                    <p className="flex items-center gap-1 italic underline-offset-[5px] opacity-0 duration-150 hover:underline focus-visible:underline group-focus-within:opacity-100 group-hover:opacity-100 group-focus:opacity-100">
                      Read More
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 translate-y-0.5 fill-current">
                        <path d="M4.286 12c0-0.533 0.432-0.964 0.964-0.964v0h11.172l-4.14-4.138c-0.175-0.175-0.283-0.416-0.283-0.683 0-0.533 0.432-0.965 0.965-0.965 0.267 0 0.508 0.108 0.683 0.283v0l5.785 5.785c0.175 0.175 0.283 0.416 0.283 0.683s-0.108 0.508-0.283 0.683l-5.785 5.785c-0.175 0.175-0.416 0.283-0.683 0.283-0.533 0-0.965-0.432-0.965-0.965 0-0.267 0.108-0.508 0.283-0.683v0l4.14-4.138h-11.172c-0.533 0-0.964-0.432-0.964-0.964v0z"></path>
                      </svg>
                    </p>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="embla__controls absolute bottom-1/2 left-0 flex h-min w-full justify-between lg:-left-14 lg:w-[112%]">
        <Button className={`${buttonClasses} embla__prev`} onClick={scrollPrev}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current">
            <path d="M19.714 12c0 0.533-0.432 0.964-0.964 0.964v0h-11.172l4.14 4.138c0.175 0.175 0.283 0.416 0.283 0.683 0 0.533-0.432 0.965-0.965 0.965-0.267 0-0.508-0.108-0.683-0.283v0l-5.785-5.785c-0.175-0.175-0.283-0.416-0.283-0.683s0.108-0.508 0.283-0.683l5.785-5.785c0.175-0.175 0.416-0.283 0.683-0.283 0.533 0 0.965 0.432 0.965 0.965 0 0.267-0.108 0.508-0.283 0.683v0l-4.14 4.138h11.172c0.533 0 0.964 0.432 0.964 0.964v0z"></path>
          </svg>
        </Button>
        <Button className={`${buttonClasses} embla__next`} onClick={scrollNext}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current">
            <path d="M4.286 12c0-0.533 0.432-0.964 0.964-0.964v0h11.172l-4.14-4.138c-0.175-0.175-0.283-0.416-0.283-0.683 0-0.533 0.432-0.965 0.965-0.965 0.267 0 0.508 0.108 0.683 0.283v0l5.785 5.785c0.175 0.175 0.283 0.416 0.283 0.683s-0.108 0.508-0.283 0.683l-5.785 5.785c-0.175 0.175-0.416 0.283-0.683 0.283-0.533 0-0.965-0.432-0.965-0.965 0-0.267 0.108-0.508 0.283-0.683v0l4.14-4.138h-11.172c-0.533 0-0.964-0.432-0.964-0.964v0z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};
