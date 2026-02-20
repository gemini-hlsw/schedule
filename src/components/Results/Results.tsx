import { cn } from "@/lib/utils";
import { NightPlanType } from "../../types";
import NightPlan from "./NightPlan";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Results({ plans }: { plans: NightPlanType[] }) {
  if (!plans || plans.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "border rounded-md flex flex-col gap-2 p-3 flex-wrap",
        "dark:bg-white/20 bg-black/10"
      )}
    >
      <h1 className="font-bold w-full">Results</h1>
      <Carousel
        className="w-full px-4"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {plans.map((plan) => (
            <CarouselItem key={plan.nightIndex}>
              <NightPlan nightPlan={plan} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-2 h-20 w-5 rounded-md" />
        <CarouselNext className="absolute -right-2.5 h-20 w-6 rounded-md" />
      </Carousel>
    </div>
  );
}
