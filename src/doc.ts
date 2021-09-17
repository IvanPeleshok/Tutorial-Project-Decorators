/** 
 * Интерфейс дескриптора
*/
interface TypedPropertyDescriptor<T> {
    // Перечисляемость
    enumerable?: boolean;
    // Манипуляция с объектом свойства
    configurable?: boolean;
    // Изменяемость
    writable?: boolean;
    value?: T;
    get?: () => T;
    set?: (value: T) => void;
}

/** 
 * Небольшой пример работы с дескриптором
 */
const object = Object.create({}, {
    prop: {
        value: 'prop',
        writable: true,
        configurable: false,
        enumerable: true,
    },
    setup: {
        get() {
            return this.prop 
        },
        set(value: boolean) {
            this.prop = value;
        }
    }
});

/** 
 * обёртка для декоратора с входными параметрами (() => decorator) на примере декоратора класса
 * @param arg входной параметр
*/
function wrapperDecoratorForClasses(arg: any) {
    return decoratorClass(arg);
}

/**
 * декоратор класса
 * @param constructor функция-конструктор класса
 */
function decoratorClass(constructor: Function) {}

/**
 * декоратор метода
 * @param target - прототип класса
 * @param propertyKey - название метода
 * @param descriptor - дескриптор метода
 */
function decoratorMethod(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {}

/**
 * декоратор параметров
 * @param target - прототип класса
 * @param method - название метода
 * @param parameterIndex - порядковый номер параметра
 */
function parameterDecorator(target: Object, method: string, parameterIndex: number) {}

// декоратор свойства и поля
function decoratorProperty(target: Object, propertyKey: string | symbol): any {
 let descriptor: PropertyDescriptor = {
     value: null,
     configurable: true,
     enumerable: true,
     get: () => {},
     set: (value: any) => value,
 }
 
 Object.defineProperty(target, propertyKey, descriptor);
 return descriptor;
}