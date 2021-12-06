const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution error-handling", () => {
    const input = [
      "message",
      "Chowder Hands"     
    ];
    
    it("correctly translates the message", () => {
        const actual = substitution(input[0], "plmoknijbuhvygctfxrdzeswaq", encode = true);
        expect(actual).to.eql("ykrrpik");
    });
    it("should preserve spaces when encoding and ignores caps", () => {
        const actual = substitution(input[1], "qwertyuiopasdfghjklzxcvbnm", encode = true);
        expect(actual).to.eql("igvrtk qfrl");
    });
    it("should preserve spaces when decoding and ignores caps", () => {
        const actual = substitution(input[1], "qwertyuiopasdfghjklzxcvbnm", encode = false);
        expect(actual).to.eql("pibmcd kyml");
    });
    describe("alphabet errors", () => {
        it("should return false if alphabet.length !== 26", () => {
            const actual = substitution(input[0], "ancdhk", encode = true);
            expect(actual).to.be.false;
        })
        it("should return false if the alphabet has duplicate characters", () => {
            const actual = substitution(input[0], "ababababababababababababab", encode = true);
            expect(actual).to.be.false;
        });
    });
})