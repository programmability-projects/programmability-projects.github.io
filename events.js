
var leaderboardTiers = [
	{"start" :     1, "name" : "Intern",     "color" : "#bfffff"},
	{"start" :   100, "name" : "Technician", "color" : "#00ffff"},
	{"start" :   250, "name" : "Analyst",    "color" : "#00ff00"},
	{"start" :   500, "name" : "Coder",      "color" : "#aaff00"},
	{"start" :  1000, "name" : "Researcher", "color" : "#ffae00"},
	{"start" :  2000, "name" : "Scientist",  "color" : "#ff6000"},
	{"start" :  3000, "name" : "Manager",    "color" : "#ff0004"},
	{"start" :  5000, "name" : "VP",         "color" : "#ff006f"},
	{"start" :  7000, "name" : "EVP",        "color" : "#ff00e6"},
	{"start" : 10000, "name" : "Codirector", "color" : "#b700ff"},
];

var badgeList = {
	"ldb0" : { "caption" : "ARMS Labs Intern", "style" : "light" },
	"ldb1" : { "caption" : "ARMS Labs Technician", "style" : "light" },
	"ldb2" : { "caption" : "ARMS Labs Analyst", "style" : "light" },
	"ldb3" : { "caption" : "ARMS Labs Coder", "style" : "light" },
	"ldb4" : { "caption" : "ARMS Labs Researcher", "style" : "light" },
	"ldb5" : { "caption" : "ARMS Labs Scientist", "style" : "light" },
	"ldb6" : { "caption" : "ARMS Labs Manager", "style" : "light" },
	"ldb7" : { "caption" : "ARMS Labs VP", "style" : "light" },
	"ldb8" : { "caption" : "ARMS Labs EVP", "style" : "light" },
	"ldb9" : { "caption" : "ARMS Labs Codirector", "style" : "light" },
};

var eventStages = {
	 0 : "Spring Stadium",
	 1 : "Ribbon Ring",
	 2 : "Ninja College",
	 3 : "Mausoleum",
	 4 : "Ramen Bowl",
	 5 : "Scrapyard",
	 6 : "Cinema Deux",
	 7 : "Buster Beach",
	 8 : "Snake Park",
	 9 : "DNA Lab",
	10 : "Sky Arena",
	11 : "Via Dolce",
	12 : "Temple Grounds",
	13 : "Sparring Ring",
	14 : "[NAME REDACTED]"
};

var eventThemes = [
	{
		"key"             : "everything",
		"name"            : "Anything Goes",
		"description"     : "",
		"solo-fight"      : [2, 3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [2],
		"skillshot"       : [2, 4],
		"v-ball"          : [2, 4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
	},
	{
		"key"             : "breakable-bits",
		"name"            : "Breakable Bits",
		"description"     : "",
		"solo-fight"      : [2],
		"team-fight"      : [4],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [],
		"skillshot"       : [2, 4],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [1, 3, 5, 9, 11, 12, 14],
	},
	{
		"key"             : "teambuilding",
		"name"            : "Teambuilding",
		"description"     : "",
		"solo-fight"      : [],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [4],
		"v-ball"          : [4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 3, 4, 8, 9, 10, 12],
	},
	{
		"key"             : "bane-of-ranked",
		"name"            : "Bane of Ranked",
		"description"     : "",
		"solo-fight"      : [3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [3, 4],
		"hoops"           : [2],
		"skillshot"       : [2, 4],
		"v-ball"          : [2, 4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [2, 4, 6, 8, 14],
	},
	{
		"key"             : "teambuilding-near-far",
		"name"            : "Teambuilding: Near & Far",
		"description"     : "",
		"solo-fight"      : [],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [4],
		"v-ball"          : [4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 2, 4, 8, 11, 13],
	},
	{
		"key"             : "barrier-bonanza",
		"name"            : "Barrier Bonanza",
		"description"     : "",
		"solo-fight"      : [2, 3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [2, 4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [1, 5, 6, 7, 8, 9, 12, 14],
	},
	{
		"key"             : "corner-chaos",
		"name"            : "Corner Chaos",
		"description"     : "",
		"solo-fight"      : [2],
		"team-fight"      : [4],
		"vs-hedlok"       : [3],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 7, 10, 11, 13, 14],
	},
	{
		"key"             : "hedlok-havok",
		"name"            : "Hedlok Havok",
		"description"     : "",
		"solo-fight"      : [],
		"team-fight"      : [],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
	},
	{
		"key"             : "fights-only",
		"name"            : "Fights Only",
		"description"     : "All standard fight modes and no minigames, on all stages! Hedlok is welcome, though.",
		"solo-fight"      : [2, 3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
	},
	{
		"key"             : "mlm",
		"name"            : "Restricted Competitive (MLM style)",
		"description"     : "This theme is used for the Mega League Mondays warmup lobbies.",
		"solo-fight"      : [2],
		"team-fight"      : [],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [3, 7, 9, 12, 13],
	},
	{
		"key"             : "cote",
		"name"            : "Extended Competitive (Era style)",
		"description"     : "This theme is used for the Champions of the Era warmup lobbies.",
		"solo-fight"      : [2],
		"team-fight"      : [],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 3, 5, 7, 9, 11, 12, 13],
	},
];
