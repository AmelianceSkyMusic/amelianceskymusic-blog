import type { ServerErrorCode } from '~types/server-error-code';

import type { ActionSuccessReturn } from '../helpers/generate-action-success';

export type ActionReturn = ActionSuccessReturn | GlobalError<ServerErrorCode>;
