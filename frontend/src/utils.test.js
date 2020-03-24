import {checkDeuce, playerWonGame, playerWonMatch, playerWonSet} from "./utils";

describe('utils methods', () => {
    it("Checks correctly if a player won a match ", () => {
        expect(playerWonGame(3, 0)).toBe(true)

    });

    it("Checks correctly if a player did not win a match yet", () => {
        expect(playerWonGame(2, 0)).toBe(false)
    });

    it("Checks correctly if a player in deuce won the match", () => {
        expect(playerWonGame(4, 3)).toBe(true)
    });

    it("Checks correctly if a player has won a set", () => {
        expect(playerWonSet(6, 3)).toBe(true);
        expect(playerWonSet(6, 4)).toBe(true);
        expect(playerWonSet(7, 5)).toBe(true);
    });

    it("Checks correctly if a player has not won a set yet", () => {
        expect(playerWonSet(5, 3)).toBe(false);
        expect(playerWonSet(5, 4)).toBe(false);
        expect(playerWonSet(6, 5)).toBe(false);
    });

    it("Checks correctly if a player has won the match", () => {
        expect(playerWonMatch(2, 1, 3)).toBe(true);
        expect(playerWonMatch(2, 0, 3)).toBe(true);
        expect(playerWonMatch(3, 0, 5)).toBe(true);
        expect(playerWonMatch(4, 1, 5)).toBe(true);
        expect(playerWonMatch(3, 2, 5)).toBe(true);
    });
    it("Checks correctly if a player has not won the match", () => {
        expect(playerWonMatch(2, 1, 3)).toBe(true);
        expect(playerWonMatch(2, 0, 3)).toBe(true);
        expect(playerWonMatch(3, 0, 5)).toBe(true);
        expect(playerWonMatch(4, 1, 5)).toBe(true);
        expect(playerWonMatch(3, 2, 5)).toBe(true);
    });

});
