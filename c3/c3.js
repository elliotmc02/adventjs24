/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    const new_inventory = {}
    for (const { category, name, quantity } of inventory) {
        new_inventory[category] ??= {}
        new_inventory[category][name] = (new_inventory[category][name] || 0) + quantity
    }
    return new_inventory
}