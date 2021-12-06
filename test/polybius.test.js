const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius error-handling", () => {
    const input = [
        "3242",
        "Hi Jack",
        "CANDY",
        "3242 42113152"    
    ];

    it("should ignore caps", () => {
        const actual = polybius(input[2], encode = true);
        const expected = "3111334145";
        expect(actual).to.equal(expected);
    })
    it("should preserve spaces when encoding", () => {
        const actual = polybius(input[1], encode = true);
        expect(actual).to.eql("3242 42113152");
    });
    it("should preserve spaces when decoding", () => {
        const actual = polybius(input[3], encode = false);
        expect(actual).to.eql("hi/j i/jack");
    });
    describe("i/j handling", () => {
        it("should translate 42 to 'i/j' when decoding", () => {
            const actual = polybius(input[0], encode = false);
            expect(actual).to.eql("hi/j");
        });
        it("should translate i or j to 42 when encoding", () => {
            const actual = polybius(input[1], encode = true);
            expect(actual).to.eql("3242 42113152");
        });
    });
})