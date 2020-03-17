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

//*********************************************************** */
//Arrow was worked on by Brenden Smith
describe('Testing Arrow', () => {
    it("Arrow damage should be same as Enemy's stat", () => {
       expect(new game.Arrow((new game.Skeleton(0,0)), 2, (0,0), 12, (new game.Slime(1,0))).damage);
    });

    it("Arrow parent should be skeleton",() => {
           expect(new game.Arrow((new game.Skeleton(0,0)), 2, (0,0), 12, (new game.Slime(1,0))).parent);
    });

    it("Given Enemy should be hit by arrow",() => {
           expect(new game.Arrow((new game.Skeleton(0,0)), 2, (0,0), 100, (new game.Slime(2,0))).tPos.x).toBe(2);
    });

    it("Direction of the arrow should be East",() => {
           expect(new game.Arrow((new game.Skeleton(0,0)), 1, (0,0), 12, (new game.Slime(1,0))).tPos.x).toBe(1);
        });

    it("Ending position of arrow should be at (6,0)",() => {
           expect(new game.Arrow((new game.Skeleton(0,0)), 2, (0,0), 12, (new game.Slime(6,0))).tPos.x).toBe(6);
	         expect(new game.Arrow((new game.Skeleton(0,0)), 2, (0,0), 12, (new game.Slime(6,0))).tPos.y).toBe(0);
     });
});

//*********************************************************** */
//Slash was worked on by Brenden Smith
describe('Testing Slash', () => {
    it("Slash connected with another valid box collider", () => {
    	expect(new game.Slash((new game.Skeleton(0,0)), 2, (0,0), 12, (new game.Slime(1,0))).noTarget).toBe(false);
    });

    it("Slash is in the East direction", () => {
        expect(new game.Slash((new game.Skeleton(0,0)), 1, (0,0), 100, (new game.Slime(1,0))).tPos.x).toBe(1);
    });

    it("Slash should miss out-of-range target", () => {
        expect(new game.Slash((new game.Skeleton(0,0)), 1, (0,0), 12, (new game.Slime(5,5))).isDead).toBe(false);
    });

    it("Slash damage is equal to wielder's stats", () => {
        expect(new game.Slash((new game.Skeleton(0,0)), 1, (0,0), 12, (new game.Slime(1,0))).damage).toBe(12);
    });

    it("Slash box position is adjacent to origin; Expect (1,0)", () => {
        expect(new game.Slash((new game.Skeleton(0,0)), 1, (0,0), 12, (new game.Slime(1,0))).tPos.x).toBe(1);
	      expect(new game.Slash((new game.Skeleton(0,0)), 1, (0,0), 12, (new game.Slime(1,0))).tPos.y).toBe(0);
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

//*********************************************************** */
//Chest was worked on by Fan Yu
describe('Testing Chest', () => {
    it('Chest(9, 10).type should be Chest', () => {
        expect(new game.Chest(9, 10).type).toBe('Chest');
    });
    it('Chest(9, 10).transform.position.x should be 9', () => {
        expect(new game.Chest(9, 10).transform.position.x).toBe(9);
    });
    it('Chest(9, 10).transform.position.y should be 10', () => {
        expect(new game.Chest(9, 10).transform.position.y).toBe(10);
    });
    it('Chest(9, 10).isOpen should be 0', () => {
        expect(new game.Chest(9, 10).isOpen).toBe(0);
    });
    it('Chest(9, 10).boxCollider.width should be 16', () => {
        expect(new game.Chest(9, 10).boxCollider.width).toBe(16);
    });
    it('Chest(9, 10).Inventory.length should be 16', () => {
        expect(new game.Chest(9, 10).Inventory.length).toBe(0);
    });
})

//*********************************************************** */
//Camera was worked on by Fan Yu
describe('Testing Camera', () => {
    it('Camera().offset.x should be 160', () => {
        expect(new game.Camera().offset.x).toBe(160);
    })
    it('Camera().offset.y should be 120', () => {
        expect(new game.Camera().offset.y).toBe(120);
    })
    it('Camera().transform.position.x should be 0', () => {
        expect(new game.Camera().transform.position.x).toBe(0);
    })
    it('Camera().transform.position.y should be 0', () => {
        expect(new game.Camera().transform.position.y).toBe(0);
    })
    it('Camera().transform.rotation.x should be 0', () => {
        expect(new game.Camera().transform.rotation.x).toBe(0);
    })
    it('Camera().transform.rotation.y should be 0', () => {
        expect(new game.Camera().transform.rotation.y).toBe(0);
    })
    it('Camera().transform.scale.x should be 0', () => {
        expect(new game.Camera().transform.scale.x).toBe(0);
    })
    it('Camera().transform.scale.y should be 0', () => {
        expect(new game.Camera().transform.scale.y).toBe(0);
    })
})
