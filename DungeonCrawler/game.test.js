const game = require('./game')

//Skeleton was worked on by Thomas Tonini
describe('Testing Skeleton', () => {
    it('Skeleton(3,4).health should return 100', () => {
        expect(new game.Skeleton(3, 4).health).toBe(100);
        });

        it("Skeleton(3,4).drawHealth should return true", () => {
        expect(new game.Skeleton(3, 4).drawHealth).toBe(true);
        });

        it("Skeleton(3,4).active should return false", () => {
        expect(new game.Skeleton(3, 4).active).toBe(false);
        });

        it("Skeleton(3,4).knockBack should return false", () => {
        expect(new game.Skeleton(3, 4).knockBack).toBe(false);
        });

        it("Skeleton(3,4).damage should return 10", () => {
        expect(new game.Skeleton(3, 4).damage).toBe(10);
        });

});

//*********************************************************** */
//Slime was worked on by Thomas Tonini
describe('Testing Slime', () => {
    it('Slime(5,9).type should be Enemy', () => {
        expect(new game.Slime(5,9).type).toBe('Enemy');
    });

    it("Slime(5,9).isDead should be false", () => {
      expect(new game.Slime(5, 9).isDead).toBe(false);
    });

    it("Slime(5,9).facing should be 0", () => {
      expect(new game.Slime(5, 9).facing).toBe(0);
    });

    it("Slime(5,9).transform.position.x should be 5", () => {
      expect(new game.Slime(5, 9).transform.position.x).toBe(5);
    });
    
    it("Slime(5,9).layer should be 1", () => {
      expect(new game.Slime(5, 9).layer).toBe(1);
    });
});