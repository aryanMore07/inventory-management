const express = require("express");
const inventoryRouter = express.Router();
const {
  fetchItems,
  addItems,
  editItems,
  removeItems,
  fetchSales,
  addSales,
  removeSales,
} = require("../controllers/controllers");

inventoryRouter.get("/items", async (req, res) => {
  try {
    const items = await fetchItems();
    if (items) {
      res
        .status(201)
        .json({ message: "Items fetched successfully", data: items });
    } else {
      res.status(401).json({
        message: "Items fetching failed",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Items fetching failed",
    });
  }
});

inventoryRouter.post("/items", async (req, res) => {
  try {
    const itemDetails = req.body;
    const item = await addItems(itemDetails);
    if (item) {
      res.status(201).json({ message: "Item added successfully", item });
    } else {
      res.status(400).json({ message: "Item adding failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to add item" });
  }
});

inventoryRouter.post("/item/edit/:itemId", async (req, res) => {
  try {
    const { itemId } = req.params;
    const updatedDetails = req.body;
    const editedItem = await editItems(itemId, updatedDetails);
    if (editedItem) {
      res
        .status(200)
        .json({ message: "Item updated successfully", editedItem });
    } else {
      res.status(400).json({ message: "Item updating failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to update item" });
  }
});

inventoryRouter.delete("/items/:itemId", async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const item = await removeItems(itemId);
    if (item) {
      res.status(200).json({ message: "Item deleted successfully" });
    } else {
      res.status(400).json({ message: "Item removal failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to remove item" });
  }
});

inventoryRouter.get("/sales", async (req, res) => {
  try {
    const sales = await fetchSales();
    if (sales) {
      res.status(200).json({
        message: "Sales fetched successfully",
        data: sales,
      });
    } else {
      res.status(400).json({
        message: "Sales fetching failed",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Sales fetching failed",
    });
  }
});

inventoryRouter.post("/sales", async (req, res) => {
  try {
    const saleDetails = req.body;
    const sale = await addSales(saleDetails);
    if (sale) {
      res.status(201).json({ message: "Sales added successfully", sale });
    } else {
      res.status(400).json({ message: "Sales adding failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to add sales" });
  }
});

inventoryRouter.delete("/sales/:salesId", async (req, res) => {
  try {
    const saleId = req.params.salesId;
    const sale = await removeSales(saleId);
    if (sale) {
      res.status(200).json({ message: "Sale deleted successfully" });
    } else {
      res.status(400).json({ message: "Sale item removal failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to remove sale item" });
  }
});

module.exports = inventoryRouter;
