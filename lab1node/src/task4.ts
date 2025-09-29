import promptSync = require("prompt-sync");
const prompt = promptSync();

function calculatePrice(): void {
    const sizeInput = prompt("choose size (small / large): ").toLowerCase();
    let price = 0;

    if (sizeInput === "small") {
        price += 10;
    } else if (sizeInput === "large") {
        price += 25;
    } else {
        console.log("invalid size");
        return;
    }

    console.log("Toppings\nchocolate - 5$\ncaramel - 6$\nberries - 10$\n type \"enough\" to stop");
    let topCount = 0;
    while (true) {
        const topping = prompt("enter toppings: ");
        if (topping === "chocolate") {
            price += 5;
            topCount++;
        } else if (topping === "caramel") {
            price += 6;
            topCount++;
        } else if (topping === "berries") {
            price += 10;
            topCount++;
        } else if (topping === "enough") {
            if (topCount === 0) {
                console.log("at least one topping required");
            } else {
                break;
            }
        } else {
            console.log(`there's no such topping`);
        }
    }


    const extraInput = prompt("add marshmallow? (y/n): ").toLowerCase();
    if (extraInput === "y") {
        price += 5;
    }

    console.log(`total price: ${price}\$`);
}

calculatePrice();
