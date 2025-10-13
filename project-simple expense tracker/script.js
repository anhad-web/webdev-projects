const amountInput = document.querySelector("#amount");
const list = document.querySelector("#history");
const totalAmount = document.querySelector("#total");
let total = 0;


const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const desc = document.querySelector("#description").value;
  const amount = parseFloat(amountInput.value);
  if (desc === "" || isNaN(amount) || amount <= 0) {
    alert("Please Enter a valid value");
    return;
  }
  total = total + amount;
  totalAmount.innerHTML = total.toFixed(2);
  const listItem = document.createElement("li");
  listItem.innerHTML = `${desc} - ${amount.toFixed(
    2
  )} <button class="remove"> Remove </button>`;

  listItem.querySelector(".remove").addEventListener("click", () => {
    console.log("removed");
    list.removeChild(listItem);
    total = total - amount;
    totalAmount.innerHTML = total.toFixed(2);
  });

  list.appendChild(listItem);
});