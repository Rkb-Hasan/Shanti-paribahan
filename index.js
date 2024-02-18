// select the chairs
let totalSeat = 40;
let count = 0;
const chairs = document.getElementsByClassName("chair");

// loop through the collection
for (let chair of chairs) {
  chair.addEventListener("click", function (e) {
    count++;
    totalSeat--;

    if (count > 0 && count <= 4) {
      // add-background
      addBackground(e.target);

      //   disabled selected
      e.target.setAttribute("disabled", "true");

      // validating number field
      const phnNumber = document.getElementById("phn-number");
      const nextBtn = document.getElementById("next");
      phnNumber.addEventListener("keyup", function () {
        if (!isNaN(phnNumber.value) && String(phnNumber.value.length) > 0) {
          nextBtn.removeAttribute("disabled");
        }
      });

      //   append chair details
      const chairDetailsContainer = document.getElementById(
        "chair-details-container"
      );

      const chairP = document.createElement("p");
      chairP.classList.add("chair-details");

      const span1 = document.createElement("span");
      span1.innerText = e.target.innerText;
      span1.classList.add("inter");
      const span2 = document.createElement("span");
      span2.innerText = "Economy";
      span2.classList.add("inter");

      const span3 = document.createElement("span");
      span3.innerText = "550";
      span3.classList.add("inter");

      chairP.append(span1, span2, span3);
      chairDetailsContainer.appendChild(chairP);
      //   append chair details

      //   decrease available seat
      let totalSeatEl = document.getElementById("totalSeat");
      totalSeatEl.innerText = totalSeat;

      //   increase selected seat
      let selectedEl = document.getElementById("selected");
      selectedEl.innerText = count;

      //   total-price
      let totalPrice = document.getElementById("total-price");
      const grandTotalEl = document.getElementById("grand-total");

      totalPrice.innerText = 550 * count;
      grandTotalEl.innerText = 550 * count;

      //   coupon
      if (count == 4) {
        const new15 = document.getElementById("new15").innerText;
        const couple20 = document.getElementById("couple-20").innerText;
        const couponContainer = document.getElementById("coupon-container");
        const couponEl = document.getElementById("coupon");
        couponEl.removeAttribute("disabled");

        const applyCupoun = document.getElementById("apply-cupoun");
        applyCupoun.removeAttribute("disabled");

        const discountContainer = document.getElementById("discount-container");
        const discountEl = document.getElementById("discount");

        applyCupoun.addEventListener("click", function () {
          if (couponEl.value === new15) {
            grandTotalEl.innerText =
              parseInt(totalPrice.innerText) -
              parseInt(totalPrice.innerText) * 0.15;
            discountEl.innerHTML = parseInt(totalPrice.innerText) * 0.15;
            discountContainer.classList.remove("hidden");
            couponContainer.classList.add("hidden");
          } else if (couponEl.value === couple20) {
            grandTotalEl.innerText =
              parseInt(totalPrice.innerText) -
              parseInt(totalPrice.innerText) * 0.2;
            discountEl.innerHTML = parseInt(totalPrice.innerText) * 0.2;
            discountContainer.classList.remove("hidden");
            couponContainer.classList.add("hidden");
          } else {
            alert("Invalid Coupon !!!");
          }
        });
      }
    } else {
      alert("Sorry! Can not buy more than 4 tickets!");
    }
  });
}
