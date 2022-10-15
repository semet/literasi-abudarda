import { extendType, objectType } from "nexus";

export const Team = objectType({
	name: "Team",
	definition(t) {
		t.string("id");
		t.string("name");
		t.string("email");
		t.string("phone");
		t.string("position");
		t.string("image");
	},
});

export const TeamQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("teams", {
			type: Team,
			resolve: async (_parent, _arg, ctx) => {
				return ctx.prisma.team.findMany();
			},
		});
	},
});
