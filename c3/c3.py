def organizeInventory(inventory):
    new_inventory = {}
    for item in inventory:
        category = item["category"]
        name = item["name"]
        quantity = item["quantity"]

        new_inventory.setdefault(category, {})
        new_inventory[category][name] = new_inventory[category].get(name, 0) + quantity

    return new_inventory
