'use server';

import { cookies } from 'next/headers';

import type { LoginSchema } from '~/schemas/login-schema';

import { generateActionError } from './helpers/generate-action-error';
import { generateActionSuccess } from './helpers/generate-action-success';
import { handleActionError } from './helpers/handle-action-error';
import type { ActionReturn } from './types/action-return';

export async function login(values: LoginSchema): Promise<ActionReturn> {
	try {
		const { username, password } = values;

		const isValidUsername = process.env.AUTH_USERNAME_MATCH === username;

		const isValidPassword = process.env.AUTH_PASSWORD_MATCH === password;

		if (!isValidUsername || !isValidPassword) {
			return generateActionError({
				status: 401,
				message: 'Invalid username, email or password',
				code: 'INVALID_CREDENTIALS',
			});
		}

		cookies().set('amelianceskymusic blog session', process.env.AUTH_CODE || '', {
			path: '/',
			httpOnly: true,
		});

		return generateActionSuccess();
	} catch (error) {
		return handleActionError(error);
	}
}
