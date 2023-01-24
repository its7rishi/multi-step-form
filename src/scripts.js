// Form Traversal
let currentForm = 1
let form1 = document.getElementById('form1')
let form2 = document.getElementById('form2')
let form3 = document.getElementById('form3')
let form4 = document.getElementById('form4')
let form5 = document.getElementById('form5')
let goBack = document.getElementById('goBack')
let confirm = document.getElementById('confirm')
let nxt = document.getElementById('nxt')

// Form1 Validation
let usrname = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let nameErr = document.getElementById('name-error')
let emailErr = document.getElementById('email-error')
let phoneErr = document.getElementById('phone-error')

// Steps

let step1 = document.getElementById('step-1')
let step2 = document.getElementById('step-2')
let step3 = document.getElementById('step-3')
let step4 = document.getElementById('step-4')

function validateuserInfo() {
  if (usrname.value && email.value && phone.value) {
    usrname.classList.add('border-lightGray')
    usrname.classList.remove('border-strawberryRed')
    nameErr.classList.add('hidden')
    email.classList.add('border-lightGray')
    email.classList.remove('border-strawberryRed')
    emailErr.classList.add('hidden')
    phone.classList.add('border-lightGray')
    phone.classList.remove('border-strawberryRed')
    phoneErr.classList.add('hidden')

    changeForm('forward')
  } else if (!usrname.value) {
    usrname.classList.remove('border-lightGray')
    usrname.classList.add('border-strawberryRed')
    nameErr.classList.remove('hidden')
  } else if (!email.value) {
    email.classList.remove('border-lightGray')
    email.classList.add('border-strawberryRed')
    emailErr.classList.remove('hidden')
  } else if (!phone.value) {
    phone.classList.remove('border-lightGray')
    phone.classList.add('border-strawberryRed')
    phoneErr.classList.remove('hidden')
  }
}

function changeForm(direction) {
  if (direction === 'forward') {
    currentForm < 5 ? (currentForm += 1) : (currentForm = 5)
    toggleForm(currentForm)
  } else {
    currentForm > 1 ? (currentForm -= 1) : (currentForm = 1)
    toggleForm(currentForm)
  }
}

function toggleForm(currentForm) {
  switch (currentForm) {
    case 2:
      form1.classList.add('hidden')
      form2.classList.remove('hidden')
      form3.classList.add('hidden')
      form4.classList.add('hidden')
      form5.classList.remove('flex')
      form5.classList.add('hidden')
      goBack.classList.remove('hidden')
      confirm.classList.add('hidden')
      nxt.classList.remove('hidden')
      // Step 1 Style Change
      step1.classList.remove('bg-pastelBlue')
      step1.classList.add('text-customWhite')
      step2.classList.remove('text-customWhite')
      // Step 2 Style Change
      step2.classList.add('bg-pastelBlue')
      step2.classList.add('text-marineBlue')
      step2.classList.add('border-pastelBlue')
      step3.classList.add('text-customWhite')
      // Step 3 Style Change in case of moving back
      step3.classList.remove('bg-pastelBlue')
      step3.classList.remove('text-marineBlue')
      step3.classList.remove('border-pastelBlue')

      break
    case 3:
      form1.classList.add('hidden')
      form2.classList.add('hidden')
      form3.classList.remove('hidden')
      form4.classList.add('hidden')
      form5.classList.remove('flex')
      form5.classList.add('hidden')
      goBack.classList.remove('hidden')
      confirm.classList.add('hidden')
      nxt.classList.remove('hidden')
      // Step 2 style change
      step2.classList.remove('bg-pastelBlue')
      step2.classList.add('text-customWhite')
      // Step 3 style Change
      step3.classList.remove('text-customWhite')
      step3.classList.add('bg-pastelBlue')
      step3.classList.add('text-marineBlue')
      step3.classList.add('border-pastelBlue')
      // Step 4 Style Change in case of moving back
      step4.classList.add('text-customWhite')
      step4.classList.remove('bg-pastelBlue')
      step4.classList.remove('text-marineBlue')
      step4.classList.remove('border-pastelBlue')
      break
    case 4:
      form1.classList.add('hidden')
      form2.classList.add('hidden')
      form3.classList.add('hidden')
      form4.classList.remove('hidden')
      form5.classList.remove('flex')
      form5.classList.add('hidden')
      goBack.classList.remove('hidden')
      confirm.classList.remove('hidden')
      nxt.classList.add('hidden')
      // Step 3 style change
      step3.classList.remove('bg-pastelBlue')
      step3.classList.add('text-customWhite')
      // Step 4 style change
      step4.classList.remove('text-customWhite')
      step4.classList.add('bg-pastelBlue')
      step4.classList.add('text-marineBlue')
      step4.classList.add('border-pastelBlue')
      break
    case 5:
      form1.classList.add('hidden')
      form2.classList.add('hidden')
      form3.classList.add('hidden')
      form4.classList.add('hidden')
      form5.classList.remove('hidden')
      form5.classList.add('flex')
      goBack.classList.add('hidden')
      confirm.classList.add('hidden')
      nxt.classList.add('hidden')
      break
    default:
      form1.classList.remove('hidden')
      form2.classList.add('hidden')
      form3.classList.add('hidden')
      form4.classList.add('hidden')
      form5.classList.remove('flex')
      form5.classList.add('hidden')
      goBack.classList.add('hidden')
      confirm.classList.add('hidden')
      nxt.classList.remove('hidden')
      // Step 1 style change
      step1.classList.add('bg-pastelBlue')
      step1.classList.remove('text-customWhite')
      step1.classList.add('text-marineBlue')
      step1.classList.add('border-pastelBlue')
      // Step 2 style change
      step2.classList.add('text-customWhite')
      step2.classList.remove('bg-pastelBlue')
      step2.classList.remove('text-marineBlue')
      step2.classList.remove('border-pastelBlue')
  }
}

// Form 2 Toggle Logic

const chkBox = document.getElementById('checkbox')
const toggle = document.getElementById('toggler')
const slider = document.getElementById('slider')

//Pricing
let arcade = document.getElementById('arcade')
let advanced = document.getElementById('advanced')
let pro = document.getElementById('pro')
let plan = 'monthly'
let charges = document.querySelectorAll('.charges')
let offer = document.querySelectorAll('.offer')
let term = document.querySelectorAll('.term')
let totalPlan = document.getElementById('total-plan') // for final form

toggle.addEventListener('click', () => {
  chkBox.checked = !chkBox.checked

  if (chkBox.checked) {
    slider.style.transform = 'translateX(1.8rem)'
    plan = 'yearly'
    setPlan(plan)
  } else {
    slider.style.transform = 'translateX(0)'
    plan = 'monthly'
    setPlan(plan)
  }
})

// Plan Calculation

const setPlan = (plan) => {
  if (plan === 'yearly') {
    totalPlan.innerText = 'year'
    charges.forEach(
      (charge) => (charge.innerText = parseInt(charge.innerText) * 10)
    )
    offer.forEach((item) => item.classList.remove('opacity-0'))
    term.forEach((item) => (item.innerText = 'yr'))
    updateTotalPrice()
  } else {
    totalPlan.innerText = 'month'
    charges.forEach(
      (charge) => (charge.innerText = parseInt(charge.innerText) / 10)
    )
    offer.forEach((item) => item.classList.add('opacity-0'))
    term.forEach((item) => (item.innerText = 'mo'))
    updateTotalPrice()
  }
  billingPeriod.innerText = plan
}

// Form 2
let selectedPlan = 'Arcade'
let finalPlan = document.getElementById('finalPlan') // for final form
let finalCharge = document.getElementById('final-charge') // for final form
let arcadeCard = document.getElementById('arcade-card')
let advCard = document.getElementById('adv-card')
let proCard = document.getElementById('pro-card')
let planPrice = parseInt(arcade.innerText)

function updateSelectedPlan(plan) {
  selectedPlan = plan

  if (selectedPlan === 'Arcade') {
    planPrice = parseInt(arcade.innerText)
    finalCharge.innerText = planPrice
    updateTotalPrice()
    // Arcade Card
    arcadeCard.classList.remove('border-lightGray')
    arcadeCard.classList.add('bg-mangolia')
    arcadeCard.classList.add('border-purplishBlue')

    // Advanced Card
    advCard.classList.remove('border-purplishBlue')
    advCard.classList.add('border-lightGray')
    advCard.classList.remove('bg-mangolia')

    //Pro Card
    proCard.classList.remove('border-purplishBlue')
    proCard.classList.add('border-lightGray')
    proCard.classList.remove('bg-mangolia')
  } else if (selectedPlan === 'Advanced') {
    planPrice = parseInt(advanced.innerText)
    finalCharge.innerText = planPrice
    updateTotalPrice()
    // Arcade Card
    arcadeCard.classList.add('border-lightGray')
    arcadeCard.classList.remove('bg-mangolia')
    arcadeCard.classList.remove('border-purplishBlue')

    // Avanced Card
    advCard.classList.remove('border-lightGray')
    advCard.classList.add('bg-mangolia')
    advCard.classList.add('border-purplishBlue')

    //Pro Card
    proCard.classList.remove('border-purplishBlue')
    proCard.classList.add('border-lightGray')
    proCard.classList.remove('bg-mangolia')
  } else if (selectedPlan === 'Pro') {
    planPrice = parseInt(pro.innerText)
    finalCharge.innerText = planPrice
    updateTotalPrice()
    // Arcade Card
    arcadeCard.classList.add('border-lightGray')
    arcadeCard.classList.remove('bg-mangolia')
    arcadeCard.classList.remove('border-purplishBlue')

    // Advanced Card
    advCard.classList.add('border-lightGray')
    advCard.classList.remove('bg-mangolia')
    advCard.classList.remove('border-purplishBlue')

    // Pro Card
    proCard.classList.remove('border-lightGray')
    proCard.classList.add('bg-mangolia')
    proCard.classList.add('border-purplishBlue')
  }
  finalPlan.innerText = selectedPlan
}

// Form 3: Add Ons Form

let onlineService = document.querySelector('#online-service')
let largerStorage = document.querySelector('#larger-storage')
let customProfile = document.querySelector('#custom-profile')
let addOnPrice = 0
let onlinePrice = document.getElementById('online-price').innerText
let storagePrice = document.getElementById('storage-price').innerText
let profilePrice = document.getElementById('profile-price').innerText

onlineService.addEventListener('click', (event) => {
  let isChecked = event.currentTarget.childNodes[1].checked
  if (isChecked === false) {
    event.currentTarget.childNodes[1].checked = true
    event.currentTarget.classList.remove('border-lightGray')
    event.currentTarget.classList.add('border-purplishBlue')
    finalOnline.classList.remove('hidden')
    finalOnline.classList.add('flex')
    // Pricing

    addOnPrice += parseInt(onlinePrice)
  } else {
    event.currentTarget.childNodes[1].checked = false
    event.currentTarget.classList.add('border-lightGray')
    event.currentTarget.classList.remove('border-purplishBlue')
    finalOnline.classList.remove('flex')
    finalOnline.classList.add('hidden')
    // Pricing
    addOnPrice -= parseInt(onlinePrice)
  }
  updateTotalPrice()
})

largerStorage.addEventListener('click', (event) => {
  let isChecked = event.currentTarget.childNodes[1].checked
  if (isChecked === false) {
    event.currentTarget.childNodes[1].checked = true
    event.currentTarget.classList.remove('border-lightGray')
    event.currentTarget.classList.add('border-purplishBlue')
    finalStorage.classList.remove('hidden')
    finalStorage.classList.add('flex')
    // Pricing
    addOnPrice += parseInt(storagePrice)
  } else {
    event.currentTarget.childNodes[1].checked = false
    event.currentTarget.classList.add('border-lightGray')
    event.currentTarget.classList.remove('border-purplishBlue')
    finalStorage.classList.remove('flex')
    finalStorage.classList.add('hidden')
    // Pricing
    addOnPrice -= parseInt(storagePrice)
  }
  updateTotalPrice()
})

customProfile.addEventListener('click', (event) => {
  let isChecked = event.currentTarget.childNodes[1].checked
  if (isChecked === false) {
    event.currentTarget.childNodes[1].checked = true
    event.currentTarget.classList.remove('border-lightGray')
    event.currentTarget.classList.add('border-purplishBlue')
    finalProfile.classList.remove('hidden')
    finalProfile.classList.add('flex')
    // Pricing
    addOnPrice += parseInt(profilePrice)
    // updateTotalPrice()
  } else {
    event.currentTarget.childNodes[1].checked = false
    event.currentTarget.classList.add('border-lightGray')
    event.currentTarget.classList.remove('border-purplishBlue')
    finalProfile.classList.remove('flex')
    finalProfile.classList.add('hidden')
    addOnPrice -= parseInt(profilePrice)
    // updateTotalPrice()
  }
  updateTotalPrice()
})

// Final Form

let billingPeriod = document.getElementById('billingPeriod')
let finalOnline = document.getElementById('final-online')
let finalStorage = document.getElementById('final-storage')
let finalProfile = document.getElementById('final-profile')
let totalPrice = document.getElementById('total-price')

function changePlan() {
  currentForm = 2
  toggleForm(currentForm)
}

function updateTotalPrice() {
  let total = 0
  if (plan === 'yearly') {
    total = parseInt(planPrice) * 10 + parseInt(addOnPrice) * 10
  } else {
    total = planPrice + addOnPrice
  }

  totalPrice.innerText = total
}
