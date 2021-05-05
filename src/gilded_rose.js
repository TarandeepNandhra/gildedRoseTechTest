class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
const nonDegradableItems = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros'];

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (nonDegradableItems.includes(this.items[i].name)) {
        // Currently both Aged and BP increase
        this.increaseQuality(i);
        this.updateIfBackstagePass(i);
      } else {
        // All items not in specialItems array
        this.decreaseQuality(i);
      }
      
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn -= 1;
      }

      if (this.items[i].sellIn < 0) {
        switch(this.items[i].name) {
          case 'Aged Brie':
            this.increaseQuality(i);
            break;
          case 'Backstage passes to a TAFKAL80ETC concert':
            this.items[i].quality = 0;
            break;
          default:
            this.decreaseQuality(i);
        }
      }
    }
    return this.items;
  }

  updateIfBackstagePass(i) {
    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.items[i].sellIn < 11) {
        this.increaseQuality(i);
      }
      if (this.items[i].sellIn < 6) {
        this.increaseQuality(i);
      }
    }
  }

  // Sulfuras handled in both quality methods
  increaseQuality(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality += 1;
    }
  }

  decreaseQuality(i) {
    if (this.items[i].quality > 0) {
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].quality -= 1;
      }

      if (this.items[i].name.toLowerCase().includes("conjured")) {
        this.items[i].quality -= 1;
      }
    }
  }

}
module.exports = {
  Item,
  Shop
}
