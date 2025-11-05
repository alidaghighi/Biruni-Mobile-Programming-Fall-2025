// Vending Machine Project - Milestone 1
// Setting Up the Machine's Inventory

// 1. Create the Inventory
const inventory = [
    {
        id: 1,
        name: "Cola",
        price: 1.50,
        stock: 5
    },
    {
        id: 2,
        name: "Chips",
        price: 2.25,
        stock: 3
    },
    {
        id: 3,
        name: "Chocolate Bar",
        price: 1.75,
        stock: 8
    },
    {
        id: 4,
        name: "Water",
        price: 1.00,
        stock: 10
    },
    {
        id: 5,
        name: "Energy Drink",
        price: 3.00,
        stock: 2
    }
];

// 2. Create the User's Wallet
let userWallet = 10;

// 3. Initial Display Function
function displayInventory() {
    console.log("=== VENDING MACHINE INVENTORY ===");
    console.log("Your wallet: $" + userWallet.toFixed(2));
    console.log("Available items:");
    console.log("-----------------------------------");
    
    for (let i = 0; i < inventory.length; i++) {
        const item = inventory[i];
        console.log(`ID: ${item.id} | Name: ${item.name} | Price: $${item.price.toFixed(2)} | Stock: ${item.stock}`);
    }
    console.log("===================================");
}

// 4. Test the display function
displayInventory();

// Vending Machine Project - Milestone 2
// The Vending Logic

// 1. Create the Vending Function
function vend(itemId, moneyInserted) {
    console.log(`\n--- PROCESSING TRANSACTION ---`);
    console.log(`Attempting to buy item ID: ${itemId} with $${moneyInserted.toFixed(2)}`);
    
    // 2. Find the Item
    const selectedItem = inventory.find(item => item.id === itemId);
    
    // 3. Implement Checks (Control Flow)
    
    // Check if item exists
    if (selectedItem === undefined) {
        console.log("Invalid selection. Please choose a valid ID.");
        return;
    }
    
    // Check if item is in stock
    if (selectedItem.stock === 0) {
        console.log("Sorry, this item is out of stock.");
        return;
    }
    
    // Check if user has enough money
    if (moneyInserted < selectedItem.price) {
        console.log(`Insufficient funds. You inserted $${moneyInserted.toFixed(2)}, but the item costs $${selectedItem.price.toFixed(2)}.`);
        return;
    }
    
    // 4. Successful Purchase Logic
    let change = moneyInserted - selectedItem.price;
    selectedItem.stock--;
    userWallet = userWallet - moneyInserted + change;
    
    console.log("Vending... You got a " + selectedItem.name + "!");
    console.log("Here is your change: $" + change.toFixed(2));
    console.log(`Your wallet now has: $${userWallet.toFixed(2)}`);
}

// 5. Test the vending function
console.log("\n=== TESTING VENDING FUNCTION ===");

console.log("\n1. Testing successful purchase:");
vend(1, 2.00); // Should succeed - buying Cola for $1.50 with $2.00

console.log("\n2. Testing insufficient funds:");
vend(5, 1.00); // Should fail - Energy Drink costs $3.00, only have $1.00

console.log("\n3. Testing invalid ID:");
vend(99, 5.00); // Should fail - ID 99 doesn't exist

console.log("\n4. Testing out of stock (trying to buy more Colas):");
// Let's reduce Cola stock to 0 first by buying all remaining ones
const colaItem = inventory.find(item => item.id === 1);
const originalColaStock = colaItem.stock;
colaItem.stock = 0; // Temporarily set to 0 for testing
vend(1, 2.00); // Should fail - out of stock
colaItem.stock = originalColaStock - 1; // Restore to original minus the one we bought earlier

console.log("\n=== FINAL STATE ===");
displayInventory();
console.log(`Final wallet amount: $${userWallet.toFixed(2)}`);


// Vending Machine Project - Milestone 3
// Handling Asynchronicity with Callbacks

// 1. Refactor the vend function to accept a callback
function vendAsync(itemId, moneyInserted, callback) {
    console.log(`\n--- PROCESSING ASYNC TRANSACTION ---`);
    console.log(`Attempting to buy item ID: ${itemId} with $${moneyInserted.toFixed(2)}`);
    console.log("Machine is working...");
    
    // Wrap the entire logic in setTimeout to simulate machine delay
    setTimeout(() => {
        // 2. Find the Item
        const selectedItem = inventory.find(item => item.id === itemId);
        
        // 3. Implement Checks with Error-First Callback Pattern
        
        // Check if item exists
        if (selectedItem === undefined) {
            callback(new Error("Invalid selection. Please choose a valid ID."), null);
            return;
        }
        
        // Check if item is in stock
        if (selectedItem.stock === 0) {
            callback(new Error("Sorry, this item is out of stock."), null);
            return;
        }
        
        // Check if user has enough money
        if (moneyInserted < selectedItem.price) {
            callback(new Error(`Insufficient funds. You inserted $${moneyInserted.toFixed(2)}, but the item costs $${selectedItem.price.toFixed(2)}.`), null);
            return;
        }
        
        // 4. Successful Purchase Logic
        let change = moneyInserted - selectedItem.price;
        selectedItem.stock--;
        userWallet = userWallet - moneyInserted + change;
        
        // Call callback with success result
        callback(null, { 
            item: selectedItem, 
            change: change,
            walletBalance: userWallet
        });
        
    }, 1000); // 1-second delay to simulate machine working
}

// 2. Create a Callback Handler
function handleVendResult(error, result) {
    if (error !== null) {
        console.error("VENDING ERROR: " + error.message);
    } else {
        console.log("Vending... You got a " + result.item.name + "!");
        console.log("Here is your change: $" + result.change.toFixed(2));
        console.log(`Your wallet now has: $${result.walletBalance.toFixed(2)}`);
    }
}

// 3. Test the Asynchronous Flow
console.log("\n\n=== TESTING ASYNCHRONOUS VENDING ===");

console.log("--- Starting a new transaction ---");
vendAsync(2, 5.00, handleVendResult);
console.log("...waiting for the machine...");

// Test multiple async transactions to show non-blocking behavior
setTimeout(() => {
    console.log("\n--- Starting another transaction ---");
    vendAsync(3, 2.00, handleVendResult);
    console.log("...waiting for the machine again...");
}, 500);

// Test error scenarios asynchronously
setTimeout(() => {
    console.log("\n--- Testing async error: insufficient funds ---");
    vendAsync(5, 1.00, handleVendResult);
    console.log("...processing error case...");
}, 2500);

setTimeout(() => {
    console.log("\n--- Testing async error: invalid ID ---");
    vendAsync(99, 5.00, handleVendResult);
    console.log("...processing another error case...");
}, 4000);

// Show final state after all async operations complete
setTimeout(() => {
    console.log("\n\n=== FINAL ASYNC STATE ===");
    displayInventory();
    console.log(`Final wallet amount: $${userWallet.toFixed(2)}`);
}, 6000);


// Vending Machine Project - Challenge Tasks

// 1. Restock Function
function restockItem(itemId, quantity, callback) {
    console.log(`\n--- RESTOCKING ITEM ${itemId} ---`);
    console.log(`Adding ${quantity} units to inventory...`);
    console.log("Restocking in progress...");
    
    // Simulate delayed restocking process
    setTimeout(() => {
        // Find the item to restock
        const itemToRestock = inventory.find(item => item.id === itemId);
        
        // Error-first callback pattern
        if (itemToRestock === undefined) {
            callback(new Error(`Item with ID ${itemId} not found for restocking.`), null);
            return;
        }
        
        if (quantity <= 0) {
            callback(new Error("Quantity must be greater than 0."), null);
            return;
        }
        
        // Successful restocking
        const oldStock = itemToRestock.stock;
        itemToRestock.stock += quantity;
        
        callback(null, {
            item: itemToRestock,
            addedQuantity: quantity,
            oldStock: oldStock,
            newStock: itemToRestock.stock
        });
        
    }, 1500); // 1.5-second delay for restocking
}

// Callback handler for restocking
function handleRestockResult(error, result) {
    if (error !== null) {
        console.error("RESTOCKING ERROR: " + error.message);
    } else {
        console.log(`Successfully restocked ${result.item.name}!`);
        console.log(`Stock updated: ${result.oldStock} → ${result.newStock} (+${result.addedQuantity})`);
    }
}

// 2. Bulk Purchase Function
function buyMultiple(itemsArray, callback) {
    console.log(`\n--- BULK PURCHASE ---`);
    console.log(`Items to purchase: [${itemsArray.join(', ')}]`);
    console.log("Calculating total cost...");
    
    setTimeout(() => {
        // Use reduce to calculate total cost
        const totalCost = itemsArray.reduce((total, itemId) => {
            const item = inventory.find(inv => inv.id === itemId);
            if (item === undefined) {
                return total; // Skip invalid items for now, we'll handle errors later
            }
            return total + item.price;
        }, 0);
        
        console.log(`Total cost calculated: $${totalCost.toFixed(2)}`);
        
        // Check if all items exist and are in stock
        const itemCounts = {};
        for (let itemId of itemsArray) {
            itemCounts[itemId] = (itemCounts[itemId] || 0) + 1;
        }
        
        // Validate all items
        for (let itemId in itemCounts) {
            const item = inventory.find(inv => inv.id === parseInt(itemId));
            const requestedQuantity = itemCounts[itemId];
            
            if (item === undefined) {
                callback(new Error(`Item with ID ${itemId} not found.`), null);
                return;
            }
            
            if (item.stock < requestedQuantity) {
                callback(new Error(`Insufficient stock for ${item.name}. Requested: ${requestedQuantity}, Available: ${item.stock}`), null);
                return;
            }
        }
        
        // Check if user has enough money
        if (userWallet < totalCost) {
            callback(new Error(`Insufficient funds. Total cost: $${totalCost.toFixed(2)}, Your wallet: $${userWallet.toFixed(2)}`), null);
            return;
        }
        
        // Process successful bulk purchase
        userWallet -= totalCost;
        const purchasedItems = [];
        
        // Update stock for each item
        for (let itemId in itemCounts) {
            const item = inventory.find(inv => inv.id === parseInt(itemId));
            const quantity = itemCounts[itemId];
            item.stock -= quantity;
            purchasedItems.push({
                name: item.name,
                quantity: quantity,
                unitPrice: item.price,
                subtotal: item.price * quantity
            });
        }
        
        callback(null, {
            purchasedItems: purchasedItems,
            totalCost: totalCost,
            remainingWallet: userWallet
        });
        
    }, 1200); // 1.2-second delay for bulk processing
}

// Callback handler for bulk purchase
function handleBulkPurchaseResult(error, result) {
    if (error !== null) {
        console.error("BULK PURCHASE ERROR: " + error.message);
    } else {
        console.log("Bulk purchase successful!");
        console.log("Items purchased:");
        result.purchasedItems.forEach(item => {
            console.log(`  • ${item.quantity}x ${item.name} @ $${item.unitPrice.toFixed(2)} = $${item.subtotal.toFixed(2)}`);
        });
        console.log(`Total paid: $${result.totalCost.toFixed(2)}`);
        console.log(`Remaining wallet: $${result.remainingWallet.toFixed(2)}`);
    }
}

// 3. Dynamic Pricing Function
function applyDiscount(discountPercentage) {
    console.log(`\n--- APPLYING ${discountPercentage}% DISCOUNT ---`);
    
    // Use map to create a new array with discounted prices
    const discountedInventory = inventory.map(item => {
        const discountAmount = item.price * (discountPercentage / 100);
        const newPrice = item.price - discountAmount;
        
        return {
            id: item.id,
            name: item.name,
            price: Math.max(0.01, newPrice), // Ensure price doesn't go below $0.01
            stock: item.stock,
            originalPrice: item.price,
            discount: discountAmount
        };
    });
    
    console.log("Discounted inventory created (original inventory unchanged):");
    console.log("=== DISCOUNTED PRICES ===");
    discountedInventory.forEach(item => {
        console.log(`ID: ${item.id} | ${item.name} | Original: $${item.originalPrice.toFixed(2)} | Discounted: $${item.price.toFixed(2)} | Saved: $${item.discount.toFixed(2)}`);
    });
    console.log("========================");
    
    return discountedInventory;
}

// Testing Challenge Tasks
setTimeout(() => {
    console.log("\n\n === TESTING CHALLENGE TASKS ===");
    
    // Test 1: Restock Function
    console.log("\n1. Testing Restock Function:");
    restockItem(1, 5, handleRestockResult); // Restock Cola
    
    setTimeout(() => {
        restockItem(99, 3, handleRestockResult); // Test error case
    }, 2000);
    
    // Test 2: Bulk Purchase Function  
    setTimeout(() => {
        console.log("\n2. Testing Bulk Purchase Function:");
        buyMultiple([1, 3, 3, 4], handleBulkPurchaseResult); // Buy Cola, 2x Chocolate Bar, Water
    }, 4000);
    
    setTimeout(() => {
        console.log("\n2. Testing Bulk Purchase Error:");
        buyMultiple([1, 1, 1, 1, 1, 1], handleBulkPurchaseResult); // Try to buy too many Colas
    }, 6000);
    
    // Test 3: Dynamic Pricing Function
    setTimeout(() => {
        console.log("\n3. Testing Dynamic Pricing Function:");
        const discountedItems = applyDiscount(20); // 20% discount
        
        console.log("\nOriginal inventory (unchanged):");
        inventory.forEach(item => {
            console.log(`${item.name}: $${item.price.toFixed(2)}`);
        });
        
        console.log("\nTesting with 50% discount:");
        applyDiscount(50);
        
    }, 8000);
    
    // Final state after all challenge tasks
    setTimeout(() => {
        console.log("\n === FINAL STATE AFTER CHALLENGES ===");
        displayInventory();
    }, 12000);
    
}, 8000); // Start challenge tasks after main async tests complete