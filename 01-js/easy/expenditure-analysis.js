/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    let categories = {};
    for (let i = 0; i < transactions.length; i++) {
        if (categories[transactions[i].category]) {
            categories[transactions[i].category] += transactions[i].price;
        } else {
            categories[transactions[i].category] = transactions[i].price;
        }
    }
    let result = [];
    for (let category in categories) {
        result.push({ category: category, totalSpent: categories[category] });
    }
    return result;
}

module.exports = calculateTotalSpentByCategory;
