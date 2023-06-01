import moize from "moize"

export const memoized = moize(async (item, callback) => await callback, {
	isPromise: true,
	maxAge: 1000 * 60 * 4,
	transformArgs: (item) => {
		return item[0]
	},
})
export const memoizedArticle = moize(async (item, callback) => await callback, {
	isPromise: true,
	maxAge: 1000 * 60 * 1,
	transformArgs(item) {
		return item[0]
	},
})
export const memoizedLive = moize(async (item, callback) => await callback, {
	isPromise: true,
	maxAge: 1000 * 30,
	transformArgs(item) {
		return item[0]
	},
})