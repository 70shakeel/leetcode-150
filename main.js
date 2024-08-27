// Max Points on a Line
// Hard
// Topics
// Companies
// Given an array of points where points[i] = [xi, yi] represents a point on the X - Y plane, return the maximum number of points that lie on the same straight line.



//     Example 1:


// Input: points = [[1, 1], [2, 2], [3, 3]]
// Output: 3
// Example 2:


// Input: points = [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]
// Output: 4
function maxPoints(points) {
    if (points.length <= 2) return points.length;

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    let maxPointsOnLine = 1;

    for (let i = 0; i < points.length; i++) {
        const slopes = new Map();
        let duplicate = 0;
        let vertical = 0;
        let currentMax = 0;

        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];

            if (x1 === x2 && y1 === y2) {
                duplicate++;
            } else if (x1 === x2) {
                vertical++;
            } else {
                let dx = x2 - x1;
                let dy = y2 - y1;
                const slopeGCD = gcd(dx, dy);

                dx /= slopeGCD;
                dy /= slopeGCD;

                const slope = `${dy}/${dx}`;
                slopes.set(slope, (slopes.get(slope) || 0) + 1);
                currentMax = Math.max(currentMax, slopes.get(slope));
            }
        }

        maxPointsOnLine = Math.max(maxPointsOnLine, currentMax + duplicate + 1, vertical + duplicate + 1);
    }

    return maxPointsOnLine;
}