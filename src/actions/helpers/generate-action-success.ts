type GenerateActionSuccess = Record<string, unknown>;
export type ActionSuccessReturn = { ok: true; data?: GenerateActionSuccess };

export function generateActionSuccess(data?: GenerateActionSuccess): ActionSuccessReturn {
	return { ok: true, data };
}
