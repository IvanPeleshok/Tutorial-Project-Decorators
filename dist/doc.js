"use strict";
/**
 * Небольшой пример работы с дескриптором
 */
var object = Object.create({}, {
    prop: {
        value: 'prop',
        writable: true,
        configurable: false,
        enumerable: true,
    },
    setup: {
        get: function () {
            return this.prop;
        },
        set: function (value) {
            this.prop = value;
        }
    }
});
/**
 * обёртка для декоратора с входными параметрами (() => decorator) на примере декоратора класса
 * @param arg входной параметр
*/
function wrapperDecoratorForClasses(arg) {
    return decoratorClass(arg);
}
/**
 * декоратор класса
 * @param constructor функция-конструктор класса
 */
function decoratorClass(constructor) { }
/**
 * декоратор метода
 * @param target - прототип класса
 * @param propertyKey - название метода
 * @param descriptor - дескриптор метода
 */
function decoratorMethod(target, propertyKey, descriptor) { }
/**
 * декоратор параметров
 * @param target - прототип класса
 * @param method - название метода
 * @param parameterIndex - порядковый номер параметра
 */
function parameterDecorator(target, method, parameterIndex) { }
// декоратор свойства и поля
function decoratorProperty(target, propertyKey) {
    var descriptor = {
        value: null,
        configurable: true,
        enumerable: true,
        get: function () { },
        set: function (value) { return value; },
    };
    Object.defineProperty(target, propertyKey, descriptor);
    return descriptor;
}
