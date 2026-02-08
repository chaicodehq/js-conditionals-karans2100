/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
    if (
        hours <= 0 ||
        (vehicleType !== "car" &&
            vehicleType !== "motorcycle" &&
            vehicleType !== "bus")
    ) {
        return -1;
    }

    let parkingFee = 0;
    const roundedHours = Math.ceil(hours);
    if (vehicleType === "car") {
        if (roundedHours == 1) {
            parkingFee = 5;
        } else {
            parkingFee = 5 + 3 * (roundedHours - 1);
        }

        if (parkingFee > 30) {
            parkingFee = 30;
        }
        return parkingFee;
    } else if (vehicleType === "motorcycle") {
        if (roundedHours == 1) {
            parkingFee = 3;
        } else {
            parkingFee = 3 + 2 * (roundedHours - 1);
        }

        if (parkingFee > 18) {
            parkingFee = 18;
        }
        return parkingFee;
    } else if (vehicleType === "bus") {
        if (roundedHours == 1) {
            parkingFee = 10;
        } else {
            parkingFee = 10 + 7 * (roundedHours - 1);
        }

        if (parkingFee > 60) {
            parkingFee = 60;
        }
        return parkingFee;
    }
}
