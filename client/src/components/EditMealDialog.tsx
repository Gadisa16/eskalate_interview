import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

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

interface EditMealDialogProps {
  trigger: React.ReactNode;
  meal: Meal;
  onEditMeal?: (meal: Meal) => void;
}

export const EditMealDialog = ({ trigger, meal, onEditMeal }: EditMealDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: meal.name,
    price: meal.price.replace('$', ''),
    description: meal.description || "",
    restaurant: meal.restaurant || "",
    category: meal.category || "",
    status: meal.status,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const updatedMeal = {
      ...meal,
      name: formData.name,
      price: `$${formData.price}`,
      restaurant: formData.restaurant,
      description: formData.description,
      category: formData.category,
      status: formData.status as "Open" | "Closed",
    };

    onEditMeal?.(updatedMeal);
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline-6-bold text-[#212121]">
            Edit Meal
          </DialogTitle>
          <DialogDescription className="text-[#757575]">
            Update the meal details below.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name" className="text-sm font-medium text-[#424242]">
                Meal Name *
              </Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="e.g., Grilled Chicken"
                required
                className="border-gray-300 focus:border-[#f17228] focus:ring-[#f17228]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-price" className="text-sm font-medium text-[#424242]">
                Price *
              </Label>
              <Input
                id="edit-price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                placeholder="12.99"
                required
                className="border-gray-300 focus:border-[#f17228] focus:ring-[#f17228]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-restaurant" className="text-sm font-medium text-[#424242]">
                Restaurant
              </Label>
              <Input
                id="edit-restaurant"
                value={formData.restaurant}
                onChange={(e) => handleInputChange("restaurant", e.target.value)}
                placeholder="Restaurant name"
                className="border-gray-300 focus:border-[#f17228] focus:ring-[#f17228]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-category" className="text-sm font-medium text-[#424242]">
                Category
              </Label>
              <Input
                id="edit-category"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                placeholder="e.g., Main Course"
                className="border-gray-300 focus:border-[#f17228] focus:ring-[#f17228]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-description" className="text-sm font-medium text-[#424242]">
              Description
            </Label>
            <Textarea
              id="edit-description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe the meal..."
              className="border-gray-300 focus:border-[#f17228] focus:ring-[#f17228] min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#424242]">Status</Label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleInputChange("status", "Open")}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  formData.status === "Open"
                    ? "bg-[#79b83c33] text-[#79b83c] border-[#79b83c]"
                    : "bg-gray-50 text-gray-600 border-gray-300"
                }`}
              >
                Open
              </button>
              <button
                type="button"
                onClick={() => handleInputChange("status", "Closed")}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  formData.status === "Closed"
                    ? "bg-[#f1722833] text-[#f17228] border-[#f17228]"
                    : "bg-gray-50 text-gray-600 border-gray-300"
                }`}
              >
                Closed
              </button>
            </div>
          </div>

          <DialogFooter className="gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-gray-300 text-[#424242] hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[linear-gradient(141deg,rgba(255,186,38,1)_0%,rgba(255,154,14,1)_100%)] text-white hover:opacity-90"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};