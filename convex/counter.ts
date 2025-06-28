import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
	args: {},
	handler: async (ctx): Promise<number> => {
		const counterDoc = await ctx.db.query("counter_table").first();
		if (counterDoc === null || !Number.isInteger(counterDoc.counter)) {
			return 0;
		}
		return counterDoc.counter;
	},
});

export const increment = mutation({
	args: {
		increment: v.optional(v.number()),
	},
	handler: async (ctx, args) => {
		if (args.increment === undefined) {
			args.increment = 1;
		}
    let counterDoc = await ctx.db.query("counter_table").first();
		if (counterDoc === null) {
			counterDoc = { counter: args.increment };
			await ctx.db.insert("counter_table", counterDoc);
		} else {
			await ctx.db.patch(counterDoc._id, {
				counter: Number.isInteger(counterDoc.counter) ? counterDoc.counter + args.increment : 1,
			});
		}
	},
});
