// Copy all entities matching a condition separated by spaces
copy(Object.entries(entity.entities) // all entities
      .filter(a=>a[1].name.toLowerCase().includes("puddle")) // filter to those matching the condition
      .map(a=>a[0]) // get the entity IDs
      .join(" ")) // separate them with spaces
