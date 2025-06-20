import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { AddMealDialog } from "../../../../components/AddMealDialog";

// Data for delivery options
const deliveryOptions = [
  {
    id: "delivery",
    icon: "motorcycle",
    label: "Delivery",
    isActive: true,
  },
  {
    id: "pickup",
    icon: "shopping-bag",
    label: "Pickup",
    isActive: false,
  },
];

interface NavigationHeaderSectionProps {
  onAddMeal?: (meal: any) => void;
}

export const NavigationHeaderSection = ({ onAddMeal }: NavigationHeaderSectionProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative w-full">
      {/* Navigation Bar */}
      <div className="w-full items-center px-[220px] py-4 shadow-object-shadow-1 flex justify-between bg-white">
        <div className="flex items-center gap-[11.5px]">
          <img
            className="relative w-7 h-[29.98px]"
            alt="Mask group"
            src="/mask-group.png"
          />

          <div className="inline-flex items-start">
            <div className="relative w-fit mt-[-1.38px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-[31.1px] tracking-[-0.78px] leading-[37.3px] whitespace-nowrap">
              <span className="text-[#f17228] tracking-[-0.24px]">Food</span>
              <span className="text-[#ffb20d] tracking-[-0.24px]">Wagen</span>
            </div>
          </div>
        </div>

        <AddMealDialog
          trigger={
            <Button className="px-6 py-3 rounded-[14px] shadow-shadow-1 bg-[linear-gradient(141deg,rgba(255,186,38,1)_0%,rgba(255,154,14,1)_100%)] text-white font-bold hover:opacity-90 transition-opacity">
              Add Meal
            </Button>
          }
          onAddMeal={onAddMeal}
        />
      </div>

      {/* Hero Header */}
      <header className="relative w-full h-[628px] bg-[#ffb20d] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute w-[604px] h-[505px] top-[182px] left-[1098px] rotate-180">
            <div className="relative w-full h-full top-[-107px] left-1">
            <div className="absolute w-full h-full top-0 left-0">
              <div className="relative h-full">
              <div className="absolute w-full h-full top-0 left-2 bg-[#c4c4c4b2] rounded-[50%] blur-[40.81px]" />
              <div className="absolute w-[85%] h-[85%] top-[11px] left-0 rounded-[50%] blur-[13.1px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(205,205,205,0.8)_0%,rgba(196,196,196,0)_100%)]" />
              </div>
            </div>

            {/* <img
              className="absolute w-[497px] h-[449px] top-[166px] left-0 -rotate-180 object-cover"
              alt="Image base"
              src="/image-base.png"
            /> */}

            <img
              className="absolute w-full h-auto top-[166px] left-0 -rotate-180"
              alt="Overlay"
              src="/images/banner.png"
            />
            </div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col w-[856px] items-start gap-8 absolute top-[132px] left-[220px]">
          {/* Hero Text */}
          <div className="flex flex-col items-start justify-center gap-[15px] rounded-2xl">
            <h1 className="[text-shadow:0px_27px_82px_#ffad0047] font-headline-1-bold font-[number:var(--headline-1-bold-font-weight)] text-white text-[length:var(--headline-1-bold-font-size)] tracking-[var(--headline-1-bold-letter-spacing)] leading-[var(--headline-1-bold-line-height)] whitespace-nowrap [font-style:var(--headline-1-bold-font-style)] shadow-object-shadow-2">
              Are you starving?
            </h1>

            <h2 className="font-headline-6 font-[number:var(--headline-6-font-weight)] text-white text-[length:var(--headline-6-font-size)] tracking-[var(--headline-6-letter-spacing)] leading-[var(--headline-6-line-height)] whitespace-nowrap [font-style:var(--headline-6-font-style)]">
              Within a few clicks, find meals that are accessible near you
            </h2>
          </div>

          {/* SearchIcon Card */}
          <Card className="w-full rounded-2xl overflow-hidden shadow-object-shadow-1">
            {/* Delivery/Pickup Tabs */}
            <Tabs defaultValue="delivery" className="w-full">
              <TabsList className="w-full h-auto bg-white p-0 justify-start">
                {deliveryOptions.map((option) => (
                  <TabsTrigger
                    key={option.id}
                    value={option.id}
                    className={`flex items-center gap-2.5 px-6 py-2.5 rounded-lg m-6 ${
                      option.isActive
                        ? "bg-[#f172281a] text-[#f17228] data-[state=active]:bg-[#f172281a]"
                        : "text-[#757575] data-[state=active]:bg-[#f172281a] data-[state=active]:text-[#f17228]"
                    }`}
                  >
                    <span
                      className={`[font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-lg`}
                    >
                      {option.icon}
                    </span>
                    <span className="font-button-bold font-[number:var(--button-bold-font-weight)] text-[length:var(--button-bold-font-size)] tracking-[var(--button-bold-letter-spacing)] leading-[var(--button-bold-line-height)] whitespace-nowrap [font-style:var(--button-bold-font-style)]">
                      {option.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <img className="h-[1.44px] w-full" alt="Hr" src="/hr-2.svg" />

            {/* SearchIcon Input */}
            <CardContent className="p-6 bg-white">
              <div className="flex items-center gap-4 w-full">
                <div className="flex items-center gap-3 pl-4 pr-0 pt-[7px] pb-2 relative flex-1 bg-neutral-100 rounded-lg">
                  <SearchIcon className="w-[18px] h-[18px] text-[#9e9e9e]" />
                  <Input
                    className="border-0 bg-transparent shadow-none [font-family:'Open_Sans',Helvetica] font-normal text-[#9e9e9e] text-lg tracking-[0] leading-[25.2px] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9e9e9e]"
                    placeholder="What do you like to eat today?"
                  />
                </div>

                <Button className="px-12 py-[21px] rounded-lg bg-[linear-gradient(138deg,rgba(255,122,122,1)_0%,rgba(246,89,0,1)_100%)] text-white hover:opacity-90 transition-opacity">
                  <span className="[font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-sm text-center mr-2">
                    SEARCH
                  </span>
                  <span className="font-button-bold font-[number:var(--button-bold-font-weight)] text-[length:var(--button-bold-font-size)] text-center tracking-[var(--button-bold-letter-spacing)] leading-[var(--button-bold-line-height)] whitespace-nowrap [font-style:var(--button-bold-font-style)]">
                    Find Meal
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </header>
    </div>
  );
};