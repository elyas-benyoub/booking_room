export type SignupData = {
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    address: string;
    postal: string;
}

export type SigninData = {
    email: string;
    password: string;
}

export type TypeRules = [string, string, () => boolean];

export interface Errors {
    status: "string";
    errors: {
        message: string;
        fields: string[];
    }
}