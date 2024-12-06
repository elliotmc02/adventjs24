type Inventory = Array<{ name: string; quantity: number; category: string }>;
type OrganizedInventory = Record<string, Record<string, number>>;
// @ts-ignore (for duplicate function)
function organizeInventory(inventory: Inventory): OrganizedInventory {
  const new_inventory: OrganizedInventory = {};
  for (const { category, name, quantity } of inventory) {
    new_inventory[category] ??= {};
    new_inventory[category][name] =
      (new_inventory[category][name] || 0) + quantity;
  }
  return new_inventory;
}
