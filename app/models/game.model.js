System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GameDefinition;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by LeonardoAlmeida on 02/05/16.
             */
            GameDefinition = (function () {
                function GameDefinition(id, name, imgLink, routeLink, boardSize, difficult) {
                    this.id = id;
                    this.name = name;
                    this.imgLink = imgLink;
                    this.routeLink = routeLink;
                    this.boardSize = boardSize;
                    this.difficult = difficult;
                }
                GameDefinition.prototype.filter = function (list, filterOption) {
                    return list;
                };
                return GameDefinition;
            }());
            exports_1("GameDefinition", GameDefinition);
        }
    }
});

//# sourceMappingURL=game.model.js.map
