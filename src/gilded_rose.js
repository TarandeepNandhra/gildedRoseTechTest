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
    this.specialItems = [ 'Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros' ]
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      // If quality > 0 and is not a special item (use specialItems)
      if (this.specialItems.includes(this.items[i].name)) {
        if (this.items[i].quality < 50 && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            this.updateBackstagePass(i);
          }
        }
      } else {
        // All items not in specialItems array
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }
      }
      
      // All items apart from Sulfuras cards decrease sellIn by 1 per day
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            // decrease quality of normal items if quality > 0
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          // if it's a backstage pass and sellIn < 0 
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
      // if it's Aged Brie and sellin < 0 
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

  

    return this.items;
  }

  updateBackstagePass(i) {
    if (this.items[i].sellIn < 11) {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
      }
    }
    if (this.items[i].sellIn < 6) {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
      }
    }
  }

}
module.exports = {
  Item,
  Shop
}
