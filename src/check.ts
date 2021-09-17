/**
 * декоратор класса
 * @param constructor функция-конструктор класса
 */
function constructor(constructor: Function) {
  console.log('constructor: ', constructor);
}

/**
 * декоратор метода
 * @param target - прототип класса
 * @param propertyKey - название метода
 * @param descriptor - дескриптор метода
 */
function method(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  console.log('method: ', target, propertyKey, descriptor);
}

/**
 * декоратор параметров
 * @param target - прототип класса
 * @param method - название метода
 * @param parameterIndex - порядковый номер параметра
 */
function parameter(target: Object, method: string, parameterIndex: number) {
  console.log('parameter: ', target, method, parameterIndex);
}

// декоратор свойства и поля
function property(target: Object, propertyKey: string | symbol): any {
  console.log('property: ', target, propertyKey);
}

@constructor
class Decorator {

  @property 
  value: string = 'value';

  @property
  get getter() {
      return this.value;
  }

  constructor(private services: any[]) {}

  @method
  getServices(@parameter value: string) {}
}
