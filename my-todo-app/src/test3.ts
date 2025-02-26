function gcdOfStrings(str1: string, str2: string): string {
	function chunkArray<T>(array: T[], size: number): T[][] {
		const chunkedArr: T[][] = [];
		for (let i = 0; i < array.length; i += size) {
			chunkedArr.push(array.slice(i, i + size));
		}
		return chunkedArr;
	}

	function findPossibleT(str) {
		let l = Math.round(str.length / 2);
		let result = [str];
		while (l  > 0) {
			if (str.length % l === 0) {
				const chunk = Array.from({length: str.length / l}, (_, i) => str.slice(i * l, (i + 1) * l));
				if (chunk.every(val => val === chunk[0])) {
					result.push(chunk[0]);
				}
			}
			l--;
		}
		return result;
	}
	const tStr1 = findPossibleT(str1);
	const tStr2 = findPossibleT(str2);
	return tStr2.filter(item => tStr1.includes(item))[0] ?? '';
}
console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX",'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'));