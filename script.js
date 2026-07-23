// const input = document.querySelector("#phone");

// window.intlTelInput(input, {
//     initialCountry: "pk",
// });

// new TomSelect("#location")



const phoneInput = document.querySelector("#phone");

window.intlTelInput(phoneInput, {
    initialCountry: "pk",
    separateDialCode: true,
    nationalMode: false,
});

new TomSelect("#location", {
    create: false,
    sortField: {
        field: "text",
        direction: "asc"
    }
});

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());

await fetch("https://moeedflows.app.n8n.cloud/webhook-test/new-lead", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});

});
