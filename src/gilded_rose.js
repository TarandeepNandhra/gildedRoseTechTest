// Do not alter Item class!
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
    this.specialItems = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros']
  }
  // Make a reduce item quality method -> only reduce if > 0 
  // Make an increase item quality method -> increase if < 50
  // Rather than calling items array specialItems, (should be items be something like - items that don't degrade daily?)
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      // If quality > 0 and is not a special item (use specialItems)
      if (this.specialItems.includes(this.items[i].name)) {
        this.increaseQuality(i);
        this.updateBackstagePass(i);
      } else {
        // All items not in specialItems array
        this.decreaseQuality(i);
      }
      
      // All items apart from Sulfuras cards decrease sellIn by 1 per day
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (this.items[i].sellIn < 0) {
        switch(this.items[i].name) {
          case 'Aged Brie':
            this.increaseQuality(i);
            break;
          case 'Backstage passes to a TAFKAL80ETC concert':
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
            break;
          default:
            this.decreaseQuality(i);
        }
      }
    }
    return this.items;
  }

  updateBackstagePass(i) {
    if (this.items[i].sellIn < 11) {
      this.increaseQuality(i);
    }
    if (this.items[i].sellIn < 6) {
      this.increaseQuality(i);
    }
  }

  // Sulfuras handled in both quality methods
  increaseQuality(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
  }

  decreaseQuality(i) {
    if (this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].quality = this.items[i].quality - 1;
    }
  }

}
module.exports = {
  Item,
  Shop
}
