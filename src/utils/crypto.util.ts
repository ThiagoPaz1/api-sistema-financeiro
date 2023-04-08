import { createHash } from 'node:crypto';

export const hashPassword = (password: string ) => {
  return createHash('sha256').update(password).digest('base64');
};

export const compareHashPassword = (password: string, hashedPassword: string) => {
  if (hashPassword(password) === hashedPassword) {
    return { success: true, message: 'Password matched' };
  }
  return { success: false, message: 'Password not matched' };
};
