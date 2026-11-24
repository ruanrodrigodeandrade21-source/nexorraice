import { describe, expect, it } from 'vitest';
import { plans } from '@/lib/site-content';
describe('Estimated plans from business plan', () => {
  it('keeps Essential at R$700 monthly and R$2500 implementation', () => { expect(plans[0]?.monthly).toBe(700); expect(plans[0]?.setup).toBe(2500); });
  it('keeps Professional at R$1500 monthly and R$5000 implementation', () => { expect(plans[1]?.monthly).toBe(1500); expect(plans[1]?.setup).toBe(5000); });
  it('keeps Advanced at R$3000 monthly and R$12000 implementation', () => { expect(plans[2]?.monthly).toBe(3000); expect(plans[2]?.setup).toBe(12000); });
});