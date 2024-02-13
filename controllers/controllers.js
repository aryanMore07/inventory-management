const Inventory = require("../model/inventory.model.js");
const Sales = require("../model/sales.model.js");

async function fetchItems() {
  try {
    const items = await Inventory.find();
    if (items) {
      // console.log("Items fetching successful", items);
      return items;
    } else {
      console.log("Items fetching failed");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function addItems(itemDetails) {
  try {
    const addedItem = await Inventory(itemDetails);
    if (addedItem) {
      // console.log("Item added successfully", { data: addedItem });
      addedItem.save();
      return addedItem;
    } else {
      throw new Error("Unable to add item");
    }
  } catch (error) {
    throw new error();
  }
}

async function editItems(itemId, itemDetails) {
  try {
    const editedItem = await Inventory.findByIdAndUpdate(itemId, itemDetails, {
      new: true,
    });
    if (editedItem) {
      // console.log("Item edited successfully", { data: editedItem });
      return editedItem;
    } else {
      console.log("Item editing failed");
    }
  } catch (error) {
    throw error;
  }
}

async function removeItems(itemId) {
  try {
    const removedItem = await Inventory.findByIdAndDelete(itemId);
    if (removedItem) {
      // console.log("Item removed successfully", { data: removedItem });
      return removedItem;
    } else {
      console.log("Item not found");
    }
  } catch (error) {
    throw error;
  }
}

async function fetchSales() {
  try {
    const sales = await Sales.find();
    if (sales) {
      // console.log("Sales fetching successful", sales);
      return sales;
    } else {
      console.log("Sales fetching failed");
    }
  } catch (error) {
    throw error;
  }
}

async function addSales(salesDetails) {
  try {
    const addedSales = await Sales(salesDetails);
    if (addedSales) {
      // console.log("Sales added successfully", { data: addedSales });
      addedSales.save();
      return addedSales;
    } else {
      throw new Error("Unable to add sales");
    }
  } catch (error) {
    throw error;
  }
}

async function removeSales(salesId) {
  try {
    const removedSales = await Sales.findByIdAndDelete(salesId);
    if (removedSales) {
      // console.log("Sales removed successfully", { data: removedSales });
      removedSales.save();
      return removedSales;
    } else {
      console.log("Sales not found");
    }
  } catch (error) {
    throw error;
  }
}

async function filterInventoryByCategory(category) {
  try {
    const filteredInventory = await Inventory.find({ category: category });
    if (filteredInventory) {
      // console.log("Inventory filtered successfully", {
      //   data: filteredInventory,
      // });
      return filteredInventory;
    } else {
      console.log("Inventory not found");
    }
  } catch (error) {
    throw error;
  }
}
module.exports = {
  fetchItems,
  addItems,
  editItems,
  removeItems,
  fetchSales,
  addSales,
  removeSales,
  filterInventoryByCategory,
};
