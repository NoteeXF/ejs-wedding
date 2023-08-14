// controllers/listController.js

// Sample initial list
let lists = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];

exports.checkUserByName = (name) => {
  const results = lists.find((list) => list.name == name);

  return typeof results != "undefined";
};

// Read the entire list
exports.getListItems = (req, res) => {
  res.render("lists", { lists });
};

// Create a new item in the list
exports.createListItem = (req, res) => {
  const newItem = req.body;
  newItem.id = lists.length + 1;
  lists.push(newItem);
  res.redirect("/lists"); // Redirect back to the list view
};

// Delete a specific item from the list
exports.deleteListItem = (req, res) => {
  const id = parseInt(req.params.id);
  const index = lists.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deletedItem = lists.splice(index, 1)[0];
    res.redirect("/lists"); // Redirect back to the list view
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};