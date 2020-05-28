function solution(A) {
    A = new Set(A.sort((a,b) => a - b));
    for (let i = 1; i <= A.size; i++) {
        if (!A.has(i)) {
            return i;
        }
    }
    return Math.max(...A) + 1;
}

//console.log(solution([-7, -7, -2,-2,-3,-4]));


