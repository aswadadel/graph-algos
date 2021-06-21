export const Data = {
	White: 0,
	Black: 1,
	Yellow: 2,
	Orange: 3,
	Source: 4,
	Target: 5,
}
export function isObj(d){
	return d===Data.Source || d===Data.Target
}