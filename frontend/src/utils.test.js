import {checkDeuce, playerWonGame} from "./utils";

describe('utils methods', () => {
    it("Checks correctly if a player won a match ", () => {
        expect(playerWonGame(3, 0)).toBe(true)

    });

    it("Checks correctly if a player did not win a match yet", () => {
        expect(playerWonGame(2, 0)).toBe(false)
    });

    it("Checks correctly if a player in deuce won the match", () => {
        expect(playerWonGame(4, 3)).toBe(true)
    })

});
