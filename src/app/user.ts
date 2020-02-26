import { Token } from '@angular/compiler';

export default class User {
    id?: string;
    roleId: string;
    name: string;
    email: string;
    avatar: string;
    email_verified_at: Date;
    user_pass: string;
    remenebr_token: Token;
    settings: string;
    created_at: Date;
    updated_at: Date;
}