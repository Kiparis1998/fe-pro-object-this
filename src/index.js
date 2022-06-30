export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {},

  getLength() {
    return Object.keys(this.guests).length;
  },

  getActualFreePlace() {
    return this.quantityOfPlaces - this.getLength();
  },

  paidPerPlace() {
    this.bankAccount += this.priceByPlace;
  },

  checkInGuest(firstName, lastName, money) {
    if (this.getActualFreePlace() === 0) {
      return "Sorry, we haven't free spaces";
    } else if (money < this.priceByPlace) {
      return "Sorry, you haven't enough money";
    } else {
      this.paidPerPlace();
      return (this.guests[this.getLength()] = {
        firstName,
        lastName,
        money: money - this.priceByPlace,
      });
    }
  },
};
