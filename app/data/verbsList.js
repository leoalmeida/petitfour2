System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var VerbsData;
    return {
        setters:[],
        execute: function() {
            VerbsData = (function () {
                function VerbsData() {
                }
                VerbsData.prototype.createDb = function () {
                    var verbs = [
                        {
                            infinitive: "avoir",
                            family: "ir",
                            tense: {
                                present: {
                                    je: "ai",
                                    tu: "as",
                                    il: "a",
                                    nous: "avons",
                                    vous: "avez",
                                    ils: "ont",
                                    irregular: true
                                },
                                imparfait: {
                                    je: "avais",
                                    tu: "avais",
                                    il: "avait",
                                    nous: "avions",
                                    vous: "aviez",
                                    ils: "avaient",
                                    irregular: true
                                }
                            }
                        },
                        {
                            infinitive: "faire",
                            family: "re",
                            tense: {
                                present: {
                                    je: "fais",
                                    tu: "fais",
                                    il: "fait",
                                    nous: "faisons",
                                    vous: "faites",
                                    ils: "font",
                                    irregular: true
                                },
                                imparfait: {
                                    je: "faisais",
                                    tu: "faisais",
                                    il: "faisait",
                                    nous: "faisions",
                                    vous: "faisiez",
                                    ils: "faisaient",
                                    irregular: true
                                }
                            }
                        },
                        {
                            infinitive: "aimer",
                            family: "er",
                            tense: {
                                present: {
                                    je: "aime",
                                    tu: "aimes",
                                    il: "aime",
                                    nous: "aimons",
                                    vous: "aimez",
                                    ils: "aiment",
                                    irregular: false
                                },
                                imparfait: {
                                    je: "aimais",
                                    tu: "aimais",
                                    il: "aimait",
                                    nous: "aimions",
                                    vous: "aimiez",
                                    ils: "aimaient",
                                    irregular: false
                                }
                            }
                        }
                    ];
                    return verbs;
                };
                return VerbsData;
            }());
            exports_1("VerbsData", VerbsData);
        }
    }
});

//# sourceMappingURL=verbsList.js.map
