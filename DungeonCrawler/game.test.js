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

//Boss done by Samuel Fox
describe('Testing Boss', () => {
    it('Boss(2,7).health should return 300', () => {
        expect(new game.Boss(2, 7).health).toBe(300);
    });

    it('Boss(2,7).isDead should return false', () => {
        expect(new game.Boss(2, 7).isDead).toBe(false);
    });

    it('Boss(2,7).type should return Enemy', () => {
        expect(new game.Boss(2, 7).type).toBe('Enemy');
    });

    it('Boss(2,7).damage should return 10', () => {
        expect(new game.Boss(2, 7).damage).toBe(10);
    });

    it('Boss(2,7).phase2 should return false', () => {
        expect(new game.Boss(2, 7).phase2).toBe(false);
    });

});

//Player done by Samuel Fox
describe('Testing Player', () => {
    it('Player().health should return 100', () => {
        expect(new game.Player().health).toBe(100);
    });

    it('Player().speed should return 0.1', () => {
        expect(new game.Player().speed).toBe(0.1);
    });

    it('Player().type should return player', () => {
        expect(new game.Player().type).toBe('Player');
    });

    it('Player().invuln should return false', () => {
        expect(new game.Player().invuln).toBe(false);
    });

    it('Player().img should return the right element', () => {
        expect(new game.Player().img).toBe(document.getElementById("characters"));
    });
});