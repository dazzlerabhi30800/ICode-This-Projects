const planContainer = document.querySelector('.plan');


const planData = [
    {
        planName: "Email Distribution Analysis",
        Amount: 12,
    },

    {
        planName: "Review Tracker",
        Amount: 8,
    },

    {
        planName: "Similarity Matching",
        Amount: 12,
    },

    {
        planName: "Saving Pack",
        Amount: 25,
    },
]





planContainer.innerHTML = planData.map((plan) => {
    return (
        `
        <div class="plan-info">
        <p>${plan.planName}</p>
        <div class="price-container">
        <h2>$${plan.Amount} <span>/mo</span></h2>
        <button class="add-cart-btn">Add to Cart</button>
        </div>
        </div>
        `
    )
}).join('')




const a = {
    num: 1,
    [Symbol.toPrimitive]() {
        return this.num++;
    }
}



if (a == 1 && a == 2 && a == 3) {
    console.log("true");
}
else {
    console.log('false');
}


console.log(Number(a));
console.log(a);