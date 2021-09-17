"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * декоратор класса
 * @param constructor функция-конструктор класса
 */
function constructor(constructor) {
    console.log('constructor: ', constructor);
}
/**
 * декоратор метода
 * @param target - прототип класса
 * @param propertyKey - название метода
 * @param descriptor - дескриптор метода
 */
function method(target, propertyKey, descriptor) {
    console.log('method: ', target, propertyKey, descriptor);
}
/**
 * декоратор параметров
 * @param target - прототип класса
 * @param method - название метода
 * @param parameterIndex - порядковый номер параметра
 */
function parameter(target, method, parameterIndex) {
    console.log('parameter: ', target, method, parameterIndex);
}
// декоратор свойства и поля
function property(target, propertyKey) {
    console.log('property: ', target, propertyKey);
}
var Decorator = /** @class */ (function () {
    function Decorator(services) {
        this.services = services;
        this.value = 'value';
    }
    Object.defineProperty(Decorator.prototype, "getter", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Decorator.prototype.getServices = function (value) { };
    __decorate([
        property,
        __metadata("design:type", String)
    ], Decorator.prototype, "value", void 0);
    __decorate([
        property,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Decorator.prototype, "getter", null);
    __decorate([
        method,
        __param(0, parameter),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Decorator.prototype, "getServices", null);
    Decorator = __decorate([
        constructor,
        __metadata("design:paramtypes", [Array])
    ], Decorator);
    return Decorator;
}());
