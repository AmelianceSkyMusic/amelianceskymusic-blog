import type { GenerateActionError } from './generate-action-error';
import { generateActionError } from './generate-action-error';

export function handleActionError(error: unknown) {
	const err: GenerateActionError = { message: JSON.stringify(error) };

	if (error instanceof Error) {
		err.message = error.message;
		err.data = { code: error.name };
	}
	return generateActionError(err);
}
