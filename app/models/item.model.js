System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ItemDefinition;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by LeonardoAlmeida on 02/05/16.
             */
            ItemDefinition = (function () {
                function ItemDefinition(id, name, imgLink, routeLink, isExternal) {
                    this.id = id;
                    this.name = name;
                    this.imgLink = imgLink;
                    this.routeLink = routeLink;
                    this.isExternal = isExternal;
                }
                ItemDefinition.prototype.filter = function (list, filterOption) {
                    return list;
                };
                ItemDefinition.qtItens = 0;
                return ItemDefinition;
            }());
            exports_1("ItemDefinition", ItemDefinition);
        }
    }
});

//# sourceMappingURL=item.model.js.map
