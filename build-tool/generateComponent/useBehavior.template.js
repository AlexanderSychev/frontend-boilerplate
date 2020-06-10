'use strict';

const useBehavior = () => `import { useState } from 'react';

import { Behavior } from './types';

/** Component's behavior hook */
const useBehavior = (): Behavior => {
    const [state, setState] = useState<string>('');
    return { state, setState };
};

export default useBehavior;
`;

module.exports = useBehavior;
