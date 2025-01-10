import { ERROR } from '~constants/error';
import type { ServerErrorCode } from '~types/server-error-code';

export type GenerateActionError = {
	status?: number;
	message?: string;
	code?: ServerErrorCode;
	data?: Record<string, unknown>;
};

export function generateActionError({
	message,
	status,
	code,
	data,
}: GenerateActionError): GlobalError<ServerErrorCode> {
	const error = {} as GlobalError<ServerErrorCode>['error'];
	error.status = status || ERROR.unknownStatus;
	error.message = message || ERROR.unknownMessage;

	const errorData = {
		...data,
		code: code || ERROR.unknownCode,
	} as GlobalError<ServerErrorCode>['data'];

	return { ok: false, error, data: errorData };
}
