# Gilded rose tech test

This is a well known kata developed by [Terry Hughes](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/). This is commonly used as a tech test to assess a candidate's ability to read, refactor and extend legacy code.

Here is the text of the kata:

*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a `SellIn` value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s `SellIn` value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
- Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.

We have recently signed a supplier of conjured items. This requires an update to our system:

* “Conjured” items degrade in Quality twice as fast as normal items

Feel free to make any changes to the `UpdateQuality` method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the `UpdateQuality` method and Items property static if you like, we’ll cover for you)."*

## The brief:

Choose [legacy code](https://github.com/emilybache/GildedRose-Refactoring-Kata) (translated by Emily Bache) in the language of your choice. The aim is to practice good design in the language of your choice. Refactor the code in such a way that adding the new "conjured" functionality is easy.

HINT: Test first FTW!

## Instructions

- Clone the repo
- run `npm i` to install dependencies
- To run a demo for x days run `node texttest_fixture.js x`, where x is the number of days from 0 to x - 1.
- run `npm test` to run tests

## Specifications

- Each Item has name, sellIn and quality
- Shop contains an array of items and an updateQuality method which updates quality of each item for each day in shop.

#### General conditions

- At the end of each day our system lowers both values for every item (sellIn and quality)
- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative (works - but sellIn can be, which does not seem to be useful but fits specs?)
- The Quality of an item is never more than 50 -> (does not work - in texttest_fixture.js Sulfuras has quality of 80)

#### Special items

- “Aged Brie” actually increases in Quality the older it gets (does not work)
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality (works - Implies any item with the name Sulfuras?)
- “Backstage passes” Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert 
  - Quality does drop to 0 the day after sellIn hits 0
  - Quality fits the description above, and does not exceed 50.
- “Conjured” items degrade in Quality twice as fast as normal items (does not work)

## implementation

- First broke down the specs and manually tested using texttest_fixture.js with different days
- Checked which specs are implemented and which are currently not working
- Decided it's better to write tests first, then refactor -> more confidence in refactoring is done correctly.
