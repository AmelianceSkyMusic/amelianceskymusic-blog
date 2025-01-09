declare type GlobalError<T extends string> = {
	ok: false; //* Indicates the operation resulted in an error
	error: {
		status: number; //* HTTP status code of the error
		message: string; //* Error message
	};
	data: {
		code: T; //* Specific error code
	} & Record<string, unknown>; //* Additional data related to the error
};
