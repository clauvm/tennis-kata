import {checkDeuce, getPlayersWonSets, playerWonGame, playerWonMatch, playerWonSet} from "./utils";

describe('utils methods', () => {
    it("Checks correctly if a player won a match ", () => {
        expect(playerWonGame(3, 0, false)).toBe(true)

    });

    it("Checks correctly if a player did not win a match yet", () => {
        expect(playerWonGame(2, 0, false)).toBe(false)
    });

    it("Checks correctly if a player in deuce won the match", () => {
        expect(playerWonGame(4, 3, false)).toBe(true)
    });

    it("Checks correctly if a player won a game in tie break", () => {
        expect(playerWonGame(7, 0, true)).toBe(true)
    });

    it("Checks correctly if a player did not win a game in tie break yet", () => {
        expect(playerWonGame(4, 0, true)).toBe(false);
        expect(playerWonGame(7, 6, true)).toBe(false);
        expect(playerWonGame(6, 6, true)).toBe(false);
    });

    it("Checks correctly if a player won a tie break after opponent won more than six points", () => {
        expect(playerWonGame(9, 7, true)).toBe(true);
        expect(playerWonGame(15, 13, true)).toBe(true)
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

    it("Gets correct number of won sets by player", () => {
        expect(getPlayersWonSets([6,5], [2,3], 2).setsWonP1).toEqual(2);
        expect(getPlayersWonSets([0,6,5], [6,4,3], 3).setsWonP1).toEqual(2);
        expect(getPlayersWonSets([7,6,6], [6,7,6], 3).setsWonP1).toEqual(2);
    });

});
