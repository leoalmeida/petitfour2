"use strict";
/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
var GameDefinition = (function () {
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
    GameDefinition.newGame = function () {
        return new GameDefinition(1, "Def", "", "", 18, 1);
    };
    return GameDefinition;
}());
exports.GameDefinition = GameDefinition;
//# sourceMappingURL=game.model.js.map