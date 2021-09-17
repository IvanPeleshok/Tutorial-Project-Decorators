"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Component(config) {
    return function (Constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                var $el = document.querySelector(config.selector);
                $el.innerHTML = config.template;
                return _this;
            }
            return class_1;
        }(Constructor));
    };
}
function Bind(target, name, descriptor) {
    var original = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get: function () {
            return original.bind(this);
        }
    };
}
var MyComponent = /** @class */ (function () {
    function MyComponent(name) {
        this.name = name;
    }
    MyComponent.prototype.getNameComponent = function () {
        console.log('Name Component: ' + this.name);
    };
    __decorate([
        Bind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyComponent.prototype, "getNameComponent", null);
    MyComponent = __decorate([
        Component({
            selector: '#component',
            template: "\n        <div style=\"font-size: 2rem; text-align: center;\">\n            Component\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [String])
    ], MyComponent);
    return MyComponent;
}());
var card = new MyComponent("MyComponent");
document.addEventListener('click', card.getNameComponent);
