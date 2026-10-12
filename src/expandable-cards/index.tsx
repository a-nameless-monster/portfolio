"use client";

import { Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const _AVATAR_SIZE = 96;
// ease-out-quint for entering/exiting elements
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const;

export interface Card {
  author?: {
    name: string;
    role: string;
    image: string;
  };
  content: string;
  id: number;
  image: string;
  title: string;
  videoUrl: string;
  skills?: string[];
}

export interface ExpandableCardsProps {
  cardClassName?: string;
  cards: Card[];
  className?: string;
  onSelect?: (id: number | null) => void;
  selectedCard?: number | null;
}

export default function ExpandableCards({
  cards,
  selectedCard: controlledSelected,
  onSelect,
  className = "",
  cardClassName = "",
}: ExpandableCardsProps) {
  const [internalSelected, setInternalSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const selectedCard =
    controlledSelected === undefined ? internalSelected : controlledSelected;

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  const handleCardClick = (id: number) => {
    if (selectedCard === id) {
      if (onSelect) {
        onSelect(null);
      } else {
        setInternalSelected(null);
      }
    } else {
      if (onSelect) {
        onSelect(id);
      } else {
        setInternalSelected(id);
      }
      // Center the clicked card in view
      const cardElement = document.querySelector(`[data-card-id="${id}"]`);
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <div
      className={`flex w-full flex-col gap-4 p-4 ${className}`}
    >
      <div
        className="mx-auto flex flex-col pt-4 pb-8"
        ref={scrollRef}
      >
        {cards.map((card) => (
          <motion.div
            animate={{ height: selectedCard === card.id ? "600px" : "300px" }}
            className={`relative mb-4 w-[450px] shrink-0 overflow-hidden rounded-2xl border bg-background shadow-lg ${cardClassName}`}
            data-card-id={card.id}
            key={card.id}
            layout
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                  duration: 0.25,
                  ease: EASE_OUT_QUINT,
                }
            }
          >
            <div className="relative h-[300px] w-full">
              <img
                alt={card.title}
                className="h-full w-full object-cover"
                draggable={false}
                height={300}
                src={card.image || "/placeholder.svg"}
                width={200}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-b from-35% from-black/50 via-50% via-black/10 to-75% to-black/30"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white cursor-pointer">
                <h2 className="font-bold text-2xl">
                  {/* The `after` overlay makes the whole card face clickable
                      without nesting the play button inside another control. */}

                  {/* The div where the play button is does not expand the card when clicked, so fix this later. */}

                  <button
                    aria-expanded={selectedCard === card.id}
                    className="rounded-sm text-left cursor-pointer after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    onClick={() => handleCardClick(card.id)}
                    type="button"
                  >
                    {card.title}
                  </button>
                </h2>
                <div className="relative flex items-center gap-2">
                  <button
                    aria-label={`Play video: ${card.title}`}
                    className="ease cursor-pointer flex h-12 min-h-[44px] w-12 min-w-[44px] items-center justify-center rounded-full bg-background/30 backdrop-blur-sm transition-transform duration-200 hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(card.videoUrl, "_blank")
                    }}
                    type="button"
                  >
                    <Play className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
            <AnimatePresence mode="popLayout">
              {selectedCard === card.id && (
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1, height: "300px" }
                      : { filter: "blur(0px)", opacity: 1, height: "300px" }
                  }
                  className="absolute bottom-0 left-0 w-full bg-background"
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0, height: 0 }
                      : { filter: "blur(5px)", opacity: 0, height: 0 }
                  }
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0, height: 0 }
                      : { filter: "blur(5px)", opacity: 0, height: 0 }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                        duration: 0.25,
                        ease: EASE_OUT_QUINT,
                        opacity: { delay: 0.1, duration: 0.2 },
                      }
                  }
                >
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { filter: "blur(0px)", opacity: 1, y: 0 }
                    }
                    className="flex h-full flex-col justify-between p-8"
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0, y: 20 }
                        : { filter: "blur(5px)", opacity: 0, y: 20 }
                    }
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0, y: 20 }
                        : { filter: "blur(5px)", opacity: 0, y: 20 }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { delay: 0.2, duration: 0.2, ease: EASE_OUT_QUINT }
                    }
                  >
                    <div>
                      <p className="text-primary-foreground text-sm">{card.content}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {card.skills?.map((skill) => (
                          <span
                            className="rounded-full bg-blue-500/10 px-3 py-1 text-cyan-500 text-sm transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                            key={skill}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {card.author ? (
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-12 w-12 overflow-hidden rounded-full border bg-primary">
                          <img
                            alt={card.author.name}
                            className="h-full w-full object-cover"
                            draggable={false}
                            height={48}
                            src={card.author.image}
                            width={48}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {card.author.name}
                          </p>
                          <p className="text-primary-foreground text-xs">
                            {card.author.role}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
