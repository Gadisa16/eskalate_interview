import { ChevronRightIcon, StarIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { EditMealDialog } from "../../../../components/EditMealDialog";

// Define meal data structure
interface Meal {
  id: number;
  name: string;
  price: string;
  rating: string;
  image: string;
  logoImage: string;
  status: "Open" | "Closed";
  restaurant?: string;
  description?: string;
  category?: string;
}

interface FeaturedMealsSectionProps {
  newMeals?: Meal[];
  onEditMeal?: (meal: Meal) => void;
  onDeleteMeal?: (mealId: number) => void;
}

export const FeaturedMealsSection = ({ newMeals = [], onEditMeal, onDeleteMeal }: FeaturedMealsSectionProps): JSX.Element => {
  // First row of meals with Pexels images
  const topRowMeals: Meal[] = [
    {
      id: 1,
      name: "Bow Lasagna",
      price: "$12.99",
      rating: "4.6",
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400",
      logoImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=100",
      status: "Closed",
      restaurant: "Italian Bistro",
      description: "Classic Italian lasagna with layers of pasta, meat sauce, and cheese",
      category: "Main Course"
    },
    {
      id: 2,
      name: "Mixed Avocado Smoothie",
      price: "$5.99",
      rating: "4.0",
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400",
      logoImage: "https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=100",
      status: "Closed",
      restaurant: "Green Juice Bar",
      description: "Fresh avocado smoothie with mixed fruits and honey",
      category: "Beverages"
    },
    {
      id: 3,
      name: "Pancake",
      price: "$8.99",
      rating: "5",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
      logoImage: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=100",
      status: "Open",
      restaurant: "Morning Cafe",
      description: "Fluffy pancakes served with maple syrup and fresh berries",
      category: "Breakfast"
    },
    {
      id: 4,
      name: "Cupcake",
      price: "$4.99",
      rating: "5",
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
      logoImage: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=100",
      status: "Open",
      restaurant: "Sweet Treats",
      description: "Delicious vanilla cupcake with buttercream frosting",
      category: "Dessert"
    },
  ];

  // Second row of meals with Pexels images
  const bottomRowMeals: Meal[] = [
    {
      id: 5,
      name: "Creamy Steak",
      price: "$18.99",
      rating: "4.5",
      image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400",
      logoImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=100",
      status: "Open",
      restaurant: "Steakhouse Prime",
      description: "Tender steak with creamy mushroom sauce and vegetables",
      category: "Main Course"
    },
    {
      id: 6,
      name: "Steak with Potatoes",
      price: "$22.99",
      rating: "5",
      image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400",
      logoImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=100",
      status: "Open",
      restaurant: "Steakhouse Prime",
      description: "Grilled steak served with roasted potatoes and herbs",
      category: "Main Course"
    },
    {
      id: 7,
      name: "Indian Spicy Soup",
      price: "$9.99",
      rating: "4.5",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
      logoImage: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100",
      status: "Open",
      restaurant: "Spice Garden",
      description: "Traditional Indian soup with aromatic spices and vegetables",
      category: "Soup"
    },
    {
      id: 8,
      name: "Steak Omelet",
      price: "$14.99",
      rating: "4.9",
      image: "https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400",
      logoImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=100",
      status: "Open",
      restaurant: "Breakfast Corner",
      description: "Fluffy omelet filled with tender steak pieces and cheese",
      category: "Breakfast"
    },
  ];

  // Combine all meals
  const allMeals = [...topRowMeals, ...bottomRowMeals, ...newMeals];
  const firstRowMeals = allMeals.slice(0, 4);
  const secondRowMeals = allMeals.slice(4, 8);
  const additionalMeals = allMeals.slice(8);

  return (
    <section className="flex flex-col items-center justify-center gap-[88px] w-full px-4">
      <h2 className="font-headline-4-bold text-[#212121] text-[length:var(--headline-4-bold-font-size)] tracking-[var(--headline-4-bold-letter-spacing)] leading-[var(--headline-4-bold-line-height)] [font-style:var(--headline-4-bold-font-style)]">
        Featured Meals
      </h2>

      <div className="flex flex-col gap-16 w-full max-w-7xl">
        {/* First row of meal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {firstRowMeals.map((meal) => (
            <MealCard 
              key={meal.id} 
              meal={meal} 
              onEdit={onEditMeal}
              onDelete={onDeleteMeal}
            />
          ))}
        </div>

        {/* Second row of meal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {secondRowMeals.map((meal) => (
            <MealCard 
              key={meal.id} 
              meal={meal} 
              onEdit={onEditMeal}
              onDelete={onDeleteMeal}
            />
          ))}
        </div>

        {/* Additional meals from new additions */}
        {additionalMeals.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {additionalMeals.map((meal) => (
              <MealCard 
                key={meal.id} 
                meal={meal} 
                onEdit={onEditMeal}
                onDelete={onDeleteMeal}
              />
            ))}
          </div>
        )}
      </div>

      <Button className="px-12 py-[21px] rounded-[14px] shadow-shadow-1 bg-[linear-gradient(141deg,rgba(255,186,38,1)_0%,rgba(255,154,14,1)_100%)] text-white hover:opacity-90 transition-opacity">
        <span className="font-button-bold text-[length:var(--button-bold-font-size)] tracking-[var(--button-bold-letter-spacing)] leading-[var(--button-bold-line-height)] [font-style:var(--button-bold-font-style)]">
          Load more
        </span>
        <ChevronRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </section>
  );
};

interface MealCardProps {
  meal: Meal;
  onEdit?: (meal: Meal) => void;
  onDelete?: (mealId: number) => void;
}

const MealCard = ({ meal, onEdit, onDelete }: MealCardProps) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${meal.name}"?`)) {
      onDelete?.(meal.id);
    }
  };

  return (
    <Card className="flex flex-col h-[463px] rounded-2xl overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-[301px] bg-white rounded-2xl overflow-hidden">
        <div
          className="h-[301px] bg-cover bg-center w-full transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${meal.image})` }}
        >
          <div className="relative top-6 left-6 inline-flex items-start">
            <Badge className="flex items-center gap-2.5 px-4 py-2 bg-[#f17228] text-white rounded-lg border-none shadow-md">
              <span className="text-lg">💰</span>
              <span className="font-headline-6-bold text-[length:var(--headline-6-bold-font-size)] tracking-[var(--headline-6-bold-letter-spacing)] leading-[var(--headline-6-bold-line-height)] [font-style:var(--headline-6-bold-font-style)]">
                {meal.price}
              </span>
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="flex flex-col gap-7 p-0 mt-7">
        <div className="flex items-start justify-between px-4">
          <div className="flex items-center gap-6">
            <div
              className="w-16 h-16 bg-cover bg-center rounded-md shadow-sm"
              style={{ backgroundImage: `url(${meal.logoImage})` }}
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-6-bold text-[#424242] text-[length:var(--headline-6-bold-font-size)] tracking-[var(--headline-6-bold-letter-spacing)] leading-[var(--headline-6-bold-line-height)] [font-style:var(--headline-6-bold-font-style)]">
                {meal.name}
              </h3>
              <div className="flex items-center gap-2">
                <StarIcon className="text-[#ffb20d] h-[22px] w-[22px] fill-[#ffb20d]" />
                <span className="font-headline-6 text-[#ffb20d] text-[length:var(--headline-6-font-size)] tracking-[var(--headline-6-letter-spacing)] leading-[var(--headline-6-line-height)] [font-style:var(--headline-6-font-style)]">
                  {meal.rating}
                </span>
              </div>
              {meal.restaurant && (
                <p className="text-sm text-[#757575] font-medium">
                  {meal.restaurant}
                </p>
              )}
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col gap-1">
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white border border-solid border-[#edeef1] rounded-lg shadow-lg"
            >
              <EditMealDialog
                trigger={
                  <DropdownMenuItem 
                    className="font-medium text-[#424242] text-sm hover:bg-gray-50 cursor-pointer"
                    onSelect={(e) => e.preventDefault()}
                  >
                    Edit
                  </DropdownMenuItem>
                }
                meal={meal}
                onEditMeal={onEdit}
              />
              <DropdownMenuItem 
                className="font-medium text-[#f17228] text-sm hover:bg-red-50 cursor-pointer"
                onClick={handleDelete}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="px-4">
          <Badge
            className={`px-4 py-2 rounded-2xl border-none transition-colors ${
              meal.status === "Open"
                ? "bg-[#79b83c33] text-[#79b83c] hover:bg-[#79b83c44]"
                : "bg-[#f1722833] text-[#f17228] hover:bg-[#f1722844]"
            }`}
          >
            <span className="font-headline-6-bold text-[length:var(--headline-6-bold-font-size)] tracking-[var(--headline-6-bold-letter-spacing)] leading-[var(--headline-6-bold-line-height)] [font-style:var(--headline-6-bold-font-style)]">
              {meal.status}
            </span>
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};