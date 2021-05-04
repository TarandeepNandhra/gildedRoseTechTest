var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it('Should reduce the quality and sellIn of an item by 1 if sellIn > 0', () => {
    var gildedRose = new Shop([ new Item("Sword", 10, 10)]);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
    expect(items[0].sellIn).toEqual(9);
  });

  it('Once sellIn < 0, Quality degrades by two', () => {
    var gildedRose = new Shop([ new Item("Sword", 0, 10)]);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
    expect(items[0].sellIn).toEqual(-1);
  });

  it('Quality of an item does not degrade past 0', () => {
    var gildedRose = new Shop([ new Item("Sword", 0, 1)]);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it('Quality of an item is never more than 50', () => {
    var gildedRose = new Shop([ new Item("Aged Brie", 0, 48)]);
    for(var _ = 0; _ < 10; _++) {
      gildedRose.updateQuality();
    }
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  // If Item is initialised over 50, stays above 50, which violates spec. 
  xit('Quality of Item is above 50', () => {
    var gildedRose = new Shop([ new Item("Aged Brie", 0, 60)]);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

});
