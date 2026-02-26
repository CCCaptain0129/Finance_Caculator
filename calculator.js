// calculator.js

/**
 * Calculate Net Present Value (NPV)
 * @param {number} rate - The discount rate.
 * @param {Array<number>} cashFlows - The cash flows over time.
 * @returns {number} - The NPV value.
 */
function calculateNPV(rate, cashFlows) {
    return cashFlows.reduce((acc, cashFlow, index) => {
        return acc + cashFlow / Math.pow(1 + rate, index);
    }, 0);
}

/**
 * Calculate Internal Rate of Return (IRR)
 * @param {Array<number>} cashFlows - The cash flows over time.
 * @returns {number} - The IRR value.
 */
function calculateIRR(cashFlows) {
    let irr = 0.1; // Initial guess
    let iterations = 100;
    while (iterations--) {
        let npv = calculateNPV(irr, cashFlows);
        let derivative = cashFlows.reduce((acc, cashFlow, index) => {
            return acc + (-index * cashFlow) / Math.pow(1 + irr, index + 1);
        }, 0);
        irr -= npv / derivative;
    }
    return irr;
}

/**
 * Calculate Present Value (PV)
 * @param {number} futureValue - The future value.
 * @param {number} rate - The interest rate.
 * @param {number} n - The number of periods.
 * @returns {number} - The present value.
 */
function calculatePV(futureValue, rate, n) {
    return futureValue / Math.pow(1 + rate, n);
}

/**
 * Calculate Future Value (FV)
 * @param {number} presentValue - The present value.
 * @param {number} rate - The interest rate.
 * @param {number} n - The number of periods.
 * @returns {number} - The future value.
 */
function calculateFV(presentValue, rate, n) {
    return presentValue * Math.pow(1 + rate, n);
}

/**
 * Calculate Effective Annual Rate (EAR)
 * @param {number} nominalRate - The nominal interest rate.
 * @param {number} compoundingPeriods - The number of compounding periods per year.
 * @returns {number} - The effective annual rate.
 */
function calculateEAR(nominalRate, compoundingPeriods) {
    return Math.pow(1 + nominalRate / compoundingPeriods, compoundingPeriods) - 1;
}

// Exporting the functions for external use
module.exports = { calculateNPV, calculateIRR, calculatePV, calculateFV, calculateEAR };