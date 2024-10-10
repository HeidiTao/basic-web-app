import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return no andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "I don't have one :sob:"
        ));
    })

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Hiii;D"
        ));
    })

    test('should perform addition', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    })

    test('should find max', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 10, 79, 32?")).toEqual("79");
        expect(QueryProcessor("Which of the following numbers is the largest: 31, 9, 83?")).toEqual("83");
    })

    test('should find sq and cube', () => {
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 4096, 521, 4955, 4487, 3121, 27, 1024?")).toBe("4096");
    })

    test('should perform multiplication', () => {
        expect(QueryProcessor("What is 96 multiplied by 35?")).toEqual("3360");
    })

    test('should perform subtracion', () => {
        expect(QueryProcessor("What is 10 minus 89?")).toEqual("-79");
        expect(QueryProcessor("What is 97 minus 48?")).toEqual("49");
    })
    
    test('should find prime', () => {
        expect(QueryProcessor("Which of the following numbers are primes: 33, 91, 19, 43, 77?")).toEqual("43");
    })

    test('should find power', () => {
        expect(QueryProcessor("What is 36 to the power of 3?")).toEqual("46656");
    })
});