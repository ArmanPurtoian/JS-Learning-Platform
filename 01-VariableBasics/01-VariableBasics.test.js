const { remainingBudget, MONTHLY_BUDGET } = require('./01-VariableBasics');

test('MONTHLY_BUDGET should be set to 1000', () => {
    expect(MONTHLY_BUDGET).toBe(1000);
});

test('remainingBudget should have 200 subtracted from MONTHLY_BUDGET', () => {
    expect(remainingBudget).toBe(800);
});
