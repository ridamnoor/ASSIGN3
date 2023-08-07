class Smoothie {
  constructor(flavor, milk, sweetener) {
    this.flavor = flavor;
    this.milk = milk;
    this.sweetener = sweetener;
  }

  getDescription() {
    return `A delicious ${this.flavor} smoothie with ${this.milk} milk and sweetened with ${this.sweetener.join(', ')}.`;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const smoothieForm = document.getElementById('smoothieForm');
  const orderBtn = document.getElementById('orderBtn');
  const smoothieDescription = document.getElementById('smoothieDescription');
  const descriptionText = document.getElementById('descriptionText');

  orderBtn.addEventListener('click', function () {
    const flavor = smoothieForm.flavor.value;
    const milk = smoothieForm.milk.value;
    const sweetener = Array.from(smoothieForm.sweetener)
      .filter(input => input.checked)
      .map(input => input.value);

    const smoothie = new Smoothie(flavor, milk, sweetener);
    const smoothieText = smoothie.getDescription();
    descriptionText.textContent = smoothieText;
    smoothieDescription.classList.remove('hidden');
  });
});
