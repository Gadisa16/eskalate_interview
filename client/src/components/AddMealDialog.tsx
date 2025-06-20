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

interface AddMealDialogProps {
  trigger: React.ReactNode;
  onAddMeal?: (meal: any) => void;
}

export const AddMealDialog = ({ trigger, onAddMeal }: AddMealDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    restaurant: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newMeal = {
      id: Date.now(),
      name: formData.name,
      price: `$${formData.price}`,
      rating: "5.0",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      logoImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=100",
      status: "Open" as const,
      restaurant: formData.restaurant,
      description: formData.description,
      category: formData.category,
    };

    onAddMeal?.(newMeal);
    setOpen(false);
    setFormData({
      name: "",
      price: "",
      description: "",
      restaurant: "",
      category: "",
    });
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
            Add New Meal
          </DialogTitle>
          <DialogDescription className="text-[#757575]">
            Create a new meal listing. Fill in the details below.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-[#424242]">
                Meal Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="e.g., Grilled Chicken"
                required
                className="border-gray-300 focus:border-[#f17228] focus:ring-[#f17228]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price" className="text-sm font-medium text-[#424242]">
                Price *
              </Label>
              <Input
                id="price"
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
              <Label htmlFor="restaurant" className="text-sm font-medium text-[#424242]">
                Restaurant
              </Label>
              <Input
                id="restaurant"
                value={formData.restaurant}
                onChange={(e) => handleInputChange("restaurant", e.target.value)}
                placeholder="Restaurant name"
                className="border-gray-300 focus:border-[#f17228] focus:ring-[#f17228]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium text-[#424242]">
                Category
              </Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                placeholder="e.g., Main Course"
                className="border-gray-300 focus:border-[#f17228] focus:ring-[#f17228]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-[#424242]">
              Description
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe the meal..."
              className="border-gray-300 focus:border-[#f17228] focus:ring-[#f17228] min-h-[80px]"
            />
          </div>

          <div className="flex items-center gap-2">
            <Badge className="bg-[#79b83c33] text-[#79b83c] px-3 py-1">
              <span className="font-headline-6-bold">Available</span>
            </Badge>
            <span className="text-sm text-[#757575]">New meals are available by default</span>
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
              Add Meal
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};