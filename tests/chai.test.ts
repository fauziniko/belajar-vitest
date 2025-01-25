import {assert, describe, expect, it} from "vitest";

function sayHello(name: string): string {
    return `Hello ${name}!`;
}

describe('sayHello', () => {
    it('should return with name', () => {
        expect(sayHello("fauzi")).to.be.a('string', 'fauzi niko!');
        assert.equal(sayHello('fauzi'), 'fauzi!');
    });
});