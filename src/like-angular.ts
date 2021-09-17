interface ComponentDecoratop {
    selector: string;
    template: string;
}

function Component(config: ComponentDecoratop) {
    return function<T extends {new(...args: any[]): Object}>(Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);

                const $el = document.querySelector(config.selector)!;
                $el.innerHTML = config.template;
            }
        }
    }
}

function Bind(target: Object, name: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
    const original = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this)
        }
    }
}

@Component({
    selector: '#component',
    template: `
        <div style="font-size: 2rem; text-align: center;">
            Component
        </div>
    `
})
class MyComponent {
    constructor(public name: string) {}

    @Bind
    getNameComponent() {
       console.log('Name Component: ' + this.name);
    }
}

const card = new MyComponent("MyComponent");
document.addEventListener('click', card.getNameComponent);