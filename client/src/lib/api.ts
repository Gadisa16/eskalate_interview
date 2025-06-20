const API_URL = "http://localhost:3000/api/foods";

export async function fetchFoods() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch foods");
  return res.json();
}

export async function addFood(food: any) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(food),
  });
  if (!res.ok) throw new Error("Failed to add food");
  return res.json();
}

export async function updateFood(id: number, food: any) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(food),
  });
  if (!res.ok) throw new Error("Failed to update food");
  return res.json();
}

export async function deleteFood(id: number) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete food");
  return res.json();
}