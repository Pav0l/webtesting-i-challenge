const enhancer = require('./enhancer.js');
// test away!
const { succeed, fail, repair, get } = enhancer;

const defaultItem = {
  name: 'Rusty Sword',
  durability: 50,
  enhancement: 5,
};

const maxEnhancedItem = {
  name: 'Mega Sword',
  durability: 50,
  enhancement: 20,
};

describe('enhancers', () => {
  describe('repair item', () => {
    it('returns new item with 100 durability', () => {
      expect(repair(defaultItem)).toHaveProperty('durability', 100);
    });
  });

  describe('succesfully enhance item', () => {
    it('increases enhancement level by 1', () => {
      const increasedEnhancement = defaultItem.enhancement + 1;
      expect(succeed(defaultItem)).toHaveProperty(
        'enhancement',
        increasedEnhancement
      );
    });

    it('should not enhance above 20', () => {
      expect(succeed(maxEnhancedItem)).toHaveProperty('enhancement', 20);
    });
  });

  describe('failed item enhancement', () => {
    it('decrease durability by 5', () => {
      const decreasedDurability = defaultItem.durability - 5;
      expect(fail(defaultItem)).toHaveProperty(
        'durability',
        decreasedDurability
      );
    });

    it('decrease durability by 10', () => {
      const decreasedDurability = maxEnhancedItem.durability - 10;
      expect(fail(maxEnhancedItem)).toHaveProperty(
        'durability',
        decreasedDurability
      );
    });

    it('decrease enhancement by 1', () => {
      const decreasedEnhancement = maxEnhancedItem.enhancement - 1;
      expect(fail(maxEnhancedItem)).toHaveProperty(
        'enhancement',
        decreasedEnhancement
      );
    });
  });
});
