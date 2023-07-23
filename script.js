const phoneInput = document.querySelector("#phone");
const mailError = document.querySelector("#mailError");
const nameError = document.querySelector("#nameError");
const phoneError = document.querySelector("#phoneError");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const buttonSubmit = document.querySelector("#submit-btn");
const step1Span = document.querySelector("#step-1-span");
const step2Span = document.querySelector("#step-2-span");
const step3Span = document.querySelector("#step-3-span");
const step4Span = document.querySelector("#step-4-span");
const infoDiv = document.querySelector(".info");
const form1 = document.querySelector("#form-1");
const form2 = document.querySelector("#form-2");
const goBack1 = document.querySelector("#goBack-1");
const totalAmount = document.querySelector("#total-amount");
const storageInput = document.querySelector('#storage');
const onlineInput = document.querySelector('#online')
const profileInput = document.querySelector('#profile')

buttonSubmit.addEventListener("click", (e) => {
  const person = {
    name: nameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
  };
  e.preventDefault();
  if (
    emailInput.value.length !== 0 &&
    nameInput.value.length !== 0 &&
    phoneInput.value.length !== 0
  ) {
    if (emailInput.value.split("").includes("@")) {
      form1.classList.add("hidden");
      step1Span.classList.remove("bg-slate-300");
      step1Span.classList.add("text-white");
      step2Span.classList.add("bg-slate-300");
      step2Span.classList.remove("text-slate-100");
      form2.classList.remove("hidden");
    } else {
      mailError.innerHTML = "Invalid e-mail address";
      emailInput.classList.add("border-2");
      emailInput.classList.add("border-red");
    }
  } else {
    if (!emailInput.value.split("").includes("@")) {
      mailError.innerHTML = "Invalid e-mail address";
      emailInput.classList.add("border-2");
      emailInput.classList.add("border-red");

      if (emailInput.value.length === 0) {
        mailError.innerHTML = "This field is required";
      }
    }
    if (phoneInput.value.length === 0) {
      phoneError.innerHTML = "This field is required";
      phoneInput.classList.add("border-2");
      phoneInput.classList.add("border-red");
    }
    if (nameInput.value.length === 0) {
      nameError.innerHTML = "This field is required";
      nameInput.classList.add("border-2");
      nameInput.classList.add("border-red");
    }
  }

  setTimeout(() => {
    mailError.innerHTML = "";
    phoneError.innerHTML = "";
    nameError.innerHTML = "";
    nameInput.classList.remove("border-red");
    phoneInput.classList.remove("border-red");
    emailInput.classList.remove("border-red");
  }, 3000);
});

goBack1.addEventListener("click", (e) => {
  e.preventDefault();
  form2.classList.add("hidden");
  form1.classList.remove("hidden");
  step1Span.classList.add("bg-slate-300");
  step1Span.classList.remove("text-white");
  step2Span.classList.remove("bg-slate-300");
  step2Span.classList.add("text-slate-100");
});

const advanceButton = document.querySelector("#advanced");
const proButton = document.querySelector("#pro");
const arcadeButton = document.querySelector("#arcade");
const proSpan = document.querySelector("#pro-span");
const arcadeSpan = document.querySelector("#arcade-span");
const advancedSpan = document.querySelector("#advanced-span");

let plan = {
  plan: "",
  cost: "",
};

let interval;

arcadeButton.addEventListener("click", (e) => {
  e.preventDefault();
  arcadeButton.classList.add("border-2");
  arcadeButton.classList.add("border-purpleBlue");
  arcadeButton.classList.add("rounded-lg");
  proButton.classList.remove("border-purpleBlue");
  advanceButton.classList.remove("border-purpleBlue");
  plan.plan = e.target.id;
  plan.cost = arcadeSpan.innerHTML;
  interval = plan.cost
    .split("")
    .slice(plan.cost.length - 2, plan.cost.length)
    .join("");
});
proButton.addEventListener("click", (e) => {
  e.preventDefault();
  proButton.classList.add("border-2");
  proButton.classList.add("border-purpleBlue");
  proButton.classList.add("rounded-lg");
  arcadeButton.classList.remove("border-purpleBlue");
  advanceButton.classList.remove("border-purpleBlue");
  plan.plan = e.target.id;
  plan.cost = proSpan.innerHTML;
  interval = plan.cost
    .split("")
    .slice(plan.cost.length - 2, plan.cost.length)
    .join("");
});
advanceButton.addEventListener("click", (e) => {
  e.preventDefault();
  advanceButton.classList.add("border-2");
  advanceButton.classList.add("border-purpleBlue");
  advanceButton.classList.add("rounded-lg");
  proButton.classList.remove("border-purpleBlue");
  arcadeButton.classList.remove("border-purpleBlue");
  plan.plan = e.target.id;
  plan.cost = advancedSpan.innerHTML;
  interval = plan.cost
    .split("")
    .slice(plan.cost.length - 2, plan.cost.length)
    .join("");
});

const monthly = document.querySelector("#btn-monthly");
const yearly = document.querySelector("#btn-yearly");
const slider = document.querySelector("#ball");
const spanFree = document.querySelectorAll("#free");

yearly.addEventListener("click", (e) => {
  e.preventDefault();
  slider.classList.add("translate-x-9");
  slider.classList.add("mm:translate-x-7");
  arcadeSpan.innerHTML = "$90/yr";
  advancedSpan.innerHTML = "$120/yr";
  proSpan.innerHTML = "$150/yr";
  yearly.classList.add('text-marine')
  monthly.classList.remove('text-marine')
  monthly.classList.add('text-coolGray')
  spanFree.forEach((el) => {
    el.classList.remove("hidden");
  });

  proButton.classList.remove("border-purpleBlue");
  arcadeButton.classList.remove("border-purpleBlue");
  advanceButton.classList.remove("border-purpleBlue");
  plan.plan = "";
  plan.cost = "";
  adds = []
  storageInput.checked = false
  onlineInput.checked = false
  profileInput.checked = false
});

monthly.addEventListener("click", (e) => {
  e.preventDefault();
  slider.classList.remove("translate-x-9");
  slider.classList.remove("mm:translate-x-7");
  monthly.classList.add('text-marine')
  yearly.classList.remove('text-marine')
  yearly.classList.add('text-coolGray')
  arcadeSpan.innerHTML = "$9/mo";
  advancedSpan.innerHTML = "$12/mo";
  proSpan.innerHTML = "$15/mo";
  spanFree.forEach((el) => {
    el.classList.add("hidden");
  });
  proButton.classList.remove("border-purpleBlue");
  arcadeButton.classList.remove("border-purpleBlue");
  advanceButton.classList.remove("border-purpleBlue");
  plan.plan = "";
  plan.cost = "";
  adds = []
  storageInput.checked = false
  onlineInput.checked = false
  profileInput.checked = false
});

const planError = document.querySelector(".plan-error");
const submitPlanBtn = document.querySelector("#submit-btn2");
const form3 = document.querySelector("#form-3");
const sumPlan = document.querySelector("#sum-plan");
const sumCost = document.querySelector("#sum-cost");
const totalSpan = document.querySelector("#total-span");

submitPlanBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (plan.plan.length !== 0) {
    form2.classList.add("hidden");
    form3.classList.remove("hidden");
    step2Span.classList.remove("bg-slate-300");
    step2Span.classList.add("text-white");
    step3Span.classList.add("bg-slate-300");
    step3Span.classList.remove("text-slate-100");
    sumPlan.innerHTML =
      plan.plan +
      `${
        plan.cost
          .split("")
          .slice(plan.cost.length - 2, plan.cost.length)
          .join("") === "mo"
          ? " (Monthly)"
          : " (Yearly)"
      }`;
    sumCost.innerHTML = plan.cost;
    totalSpan.innerHTML =
      "Total" +
      `${
        plan.cost
          .split("")
          .slice(plan.cost.length - 2, plan.cost.length)
          .join("") === "mo"
          ? " (per month)"
          : " (per year)"
      }`;
    if (interval === "yr") {
      onlineAdd.innerHTML = "+$10/yr";
      storageAdd.innerHTML = "+$20/yr";
      profAdd.innerHTML = "+$20/yr";
    } else if (interval === "mo") {
      onlineAdd.innerHTML = "+$1/mo";
      storageAdd.innerHTML = "+$2/mo";
      profAdd.innerHTML = "+$2/mo";
    }
  } else {
    planError.classList.remove("hidden");
    planError.innerHTML = "Please choose a plan";
  }

  setTimeout(() => {
    planError.classList.add("hidden");
  }, 3000);
});

const onlineAdd = document.querySelector("#online-add");
const profAdd = document.querySelector("#prof-add");
const storageAdd = document.querySelector("#storage-add");
const onlineSpan = document.querySelector("#add-online");
const profSpan = document.querySelector("#add-prof");
const storageSpan = document.querySelector("#add-storage");
const labelAdd = document.querySelectorAll(".labeladd");
const submitAdds = document.querySelector("#submit-btn3");
const goBack2 = document.querySelector("#goBack-2");

let adds = [];
const line = document.querySelector(".line");
const addsDiv = document.querySelector(".adds-div");

labelAdd.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.id === "online") {
      const condition = adds.filter((el) => {
        return el.id === 1;
      });
      if (condition.length === 0) {
        adds = [
          ...adds,
          { add: onlineSpan.innerHTML, price: onlineAdd.innerHTML, id: 1 },
        ];
      } else {
        const newState = adds.filter((el) => {
          if (el.id === 1) {
            return false;
          } else {
            return true;
          }
        });
        adds = newState;
      }
    }
    if (e.target.id === "storage") {
      const condition2 = adds.filter((el) => {
        return el.id === 2;
      });
      if (condition2.length === 0) {
        adds = [
          ...adds,
          { add: storageSpan.innerHTML, price: storageAdd.innerHTML, id: 2 },
        ];
      } else {
        const newState = adds.filter((el) => {
          if (el.id === 2) {
            return false;
          } else {
            return true;
          }
        });
        adds = newState;
      }
    }
    if (e.target.id === "profile") {
      const condition3 = adds.filter((el) => {
        return el.id === 3;
      });
      if (condition3.length === 0) {
        adds = [
          ...adds,
          { add: profSpan.innerHTML, price: profAdd.innerHTML, id: 3 },
        ];
      } else {
        const newState = adds.filter((el) => {
          if (el.id === 3) {
            return false;
          } else {
            return true;
          }
        });
        adds = newState;
      }
    }
  });
});

goBack2.addEventListener("click", (e) => {
  e.preventDefault();
  form2.classList.remove("hidden");
  form3.classList.add("hidden");
  step2Span.classList.add("bg-slate-300");
  step2Span.classList.remove("text-white");
  step3Span.classList.remove("bg-slate-300");
  step3Span.classList.add("text-slate-100");
});

const form4 = document.querySelector("#form-4");

submitAdds.addEventListener("click", (e) => {
  e.preventDefault();
  const ifMonthly =
    plan.cost
      .split("")
      .slice(plan.cost.length - 2, plan.cost.length)
      .join("") === "mo";
  form3.classList.add("hidden");
  form4.classList.remove("hidden");
  step3Span.classList.remove("bg-slate-300");
  step3Span.classList.add("text-white");
  step4Span.classList.add("bg-slate-300");
  step4Span.classList.remove("text-slate-100");
  setTimeout(() => {
    console.log(adds);
  }, 3000);

  let noAdds = `
    <div class='text-coolGray font-semibold'>No any extra adds-on</div>
  
  `;

  let addsHtml = adds.map((el) => {
    return ` <div class="flex flex-row items-center gap-24 l:gap-12 mm:gap-2">
      <div class='w-44 l:w-36 mr-12 mm:w-24 mm:text-xs'><span class="text-coolGray font-semibold">${el.add}</span></div>
      <div><span class="text-marine mm:text-xs">${el.price}</span></div>
    </div>`;
  });

  addsDiv.innerHTML = adds.length !== 0 ? addsHtml.join("") : noAdds;

  const getTotal = adds.map((el) => {
    return Number(
      plan.cost
        .split("")
        .slice(plan.cost.length - 2, plan.cost.length)
        .join("") === "mo"
        ? el.price.slice(2, 3)
        : el.price.slice(2, 4)
    );
  });
  const totalPrice = getTotal.reduce((a, b) => a + b, 0);
  const planPrice =
    plan.plan === "arcade"
      ? Number(
          plan.cost
            .split("")
            .slice(plan.cost.length - 2, plan.cost.length)
            .join("") === "mo"
            ? plan.cost.slice(1, 2)
            : plan.cost.slice(1, 3)
        )
      : Number(
          plan.cost
            .split("")
            .slice(plan.cost.length - 2, plan.cost.length)
            .join("") === "mo"
            ? plan.cost.slice(1, 3)
            : plan.cost.slice(1, 4)
        );

  totalAmount.innerHTML = `$${Number(totalPrice + planPrice)}/${
    ifMonthly ? "mo" : "yr"
  }`;
});

const goBack3 = document.querySelector("#goBack-3");

goBack3.addEventListener("click", (e) => {
  e.preventDefault();
  form3.classList.remove("hidden");
  form4.classList.add("hidden");
  step3Span.classList.add("bg-slate-300");
  step3Span.classList.remove("text-white");
  step4Span.classList.remove("bg-slate-300");
  step4Span.classList.add("text-slate-100");
});


const confirmBtn = document.querySelector('#confirm-btn');
const resultDiv = document.querySelector('#result-div')

confirmBtn.addEventListener('click', (e) => {
  e.preventDefault();
  form4.classList.add('hidden');

  let resultHtml = `
    <div class="flex items-center justify-center w-thanks m:w-res-thanks s:w-52 s:mt-10 s:pb-6 mt-24">
      <div class="flex flex-col items-center justify-center gap-6">
          <img src="./assets/images/icon-thank-you.svg" alt="">
          <span class="text-3xl text-marine font-semibold l:text-3xl s:text-2xl">Thank You!</span>
          <p class="text-center text-coolGray font-semibold l:text-sm s:text-xs">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </div>
  `
  resultDiv.insertAdjacentHTML('afterbegin', resultHtml);
})

const changeBtn = document.querySelector('#change')

changeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  form4.classList.add('hidden')
  form2.classList.remove('hidden');
  step2Span.classList.add("bg-slate-300");
  step2Span.classList.remove("text-white");
  step4Span.classList.remove("bg-slate-300");
  step4Span.classList.add("text-slate-100");
})
