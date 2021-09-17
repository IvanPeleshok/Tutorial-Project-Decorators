type ValidatorType = 'required' | 'email';

interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType;
    }
}

const validators: ValidatorConfig = {}

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required'
    };
}

function validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name];
    if (!objConfig) {
        return true
    }
    
    let isValid = true;
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}

class Form {
    @Required
    public email: string | void;

    constructor(email?: string) {
        this.email = email;
    }
}

const form = new Form('email');
if (validate(form)) {
    console.log('Valid: ', form);
} else {
    console.log('validation error');
}