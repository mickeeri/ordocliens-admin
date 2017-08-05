import { schema } from 'normalizr';

export const user = new schema.Entity('users');
export const arrayOfUsers = new schema.Array(user);

export const firm = new schema.Entity('firms');
export const arrayOfFirms = new schema.Array(firm);
