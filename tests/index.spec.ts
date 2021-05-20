import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index';

describe('Add function test', () => {
  it('add 2 and 3 returns 5', () => {
    expect(add(2, 3)).to.be.equal(5);
  });
});
