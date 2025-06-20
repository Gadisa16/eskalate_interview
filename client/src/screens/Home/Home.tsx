import React, { useEffect, useState } from "react";
import { CtaFooterSection } from "./sections/CtaFooterSection";
import { FeaturedMealsSection } from "./sections/FeaturedMealsSection/FeaturedMealsSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";
import { fetchFoods, addFood, updateFood, deleteFood } from "../../lib/api";

export const Home = (): JSX.Element => {
  const [meals, setMeals] = useState<any[]>([]);

  useEffect(() => {
    fetchFoods().then(setMeals);
  }, []);

  const handleAddMeal = async (newMeal: any) => {
    const added = await addFood(newMeal);
    setMeals((prev) => [...prev, added]);
  };

  const handleEditMeal = async (updatedMeal: any) => {
    await updateFood(updatedMeal.id, updatedMeal);
    setMeals((prev) =>
      prev.map((meal) => (meal.id === updatedMeal.id ? updatedMeal : meal))
    );
  };

  const handleDeleteMeal = async (mealId: number) => {
    await deleteFood(mealId);
    setMeals((prev) => prev.filter((meal) => meal.id !== mealId));
  };

  return (
    <main className="flex flex-col items-center w-full bg-white">
      <NavigationHeaderSection onAddMeal={handleAddMeal} />
      <FeaturedMealsSection
        newMeals={meals}
        onEditMeal={handleEditMeal}
        onDeleteMeal={handleDeleteMeal}
      />
      <CtaFooterSection />
    </main>
  );
};