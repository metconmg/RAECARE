import { describe, expect, it } from 'vitest';
import { nodeDatabase } from '../src/core/data';

describe('RAECARE topology', () => {
  it('preserves the known serialized node sequence', () => {
    expect(nodeDatabase.map((node) => node.id)).toEqual(['A001', 'A002', 'B001', 'B002']);
  });

  it('keeps every node attached to an invariant', () => {
    for (const node of nodeDatabase) {
      expect(node.invariant.length).toBeGreaterThan(0);
    }
  });
});
