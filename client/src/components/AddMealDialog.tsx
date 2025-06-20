import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter, // <-- Add this import
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

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
    status: "open", // <-- Add status field
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
      status: formData.status, // <-- Use status from form
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
      status: "open",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white p-6 rounded-lg shadow-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline-6-bold text-[#212121]">
            Add a meal
          </DialogTitle>
          <DialogDescription className="text-[#757575]">
            Create a new meal listing. Fill in the details below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-[#424242]">
              Food name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="e.g., Grilled Chicken"
              required
              className="border-gray-300 focus:border-[#f28c38] focus:ring-[#f28c38] w-full p-2 rounded-md"
            />
            {!formData.name && <p className="text-red-500 text-sm mt-1">Food name is required</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="price" className="text-sm font-medium text-[#424242]">
              Food rating *
            </Label>
            <Input
              id="price"
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
              placeholder="e.g., 4.5"
              required
              className="border-gray-300 focus:border-[#f28c38] focus:ring-[#f28c38] w-full p-2 rounded-md"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="restaurant" className="text-sm font-medium text-[#424242]">
              Food image (link)
            </Label>
            <Input
              id="restaurant"
              value={formData.restaurant}
              onChange={(e) => handleInputChange("restaurant", e.target.value)}
              placeholder="e.g., https://example.com/image.jpg"
              className="border-gray-300 focus:border-[#f28c38] focus:ring-[#f28c38] w-full p-2 rounded-md"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium text-[#424242]">
              Restaurant name
            </Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
              placeholder="e.g., Restaurant Name"
              className="border-gray-300 focus:border-[#f28c38] focus:ring-[#f28c38] w-full p-2 rounded-md"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-[#424242]">
              Restaurant logo (link)
            </Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="e.g., https://example.com/logo.jpg"
              className="border-gray-300 focus:border-[#f28c38] focus:ring-[#f28c38] w-full p-2 rounded-md"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status" className="text-sm font-medium text-[#424242]">
              Restaurant status (open/close)
            </Label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => handleInputChange("status", e.target.value)}
              className="border-gray-300 focus:border-[#f28c38] focus:ring-[#f28c38] w-full p-2 rounded-md"
            >
              <option value="open">Open</option>
              <option value="close">Close</option>
            </select>
          </div>

          <DialogFooter className="gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-gray-300 text-[#424242] hover:bg-gray-50 px-4 py-2 rounded-md"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[linear-gradient(141deg,rgba(255,186,38,1)_0%,rgba(255,154,14,1)_100%)] text-white hover:opacity-90 px-4 py-2 rounded-md"
            >
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};