# jsondiffpatch-react

- Originally forked from archived https://github.com/hero-guo/jsondiffpatch-for-react
- Based on https://github.com/benjamine/jsondiffpatch

# 1. install

    npm install jsondiffpatch-react

# 2. usage

```jsx
import React from 'react';
import JsonDiffReact from 'jsondiffpatch-react';

<JsonDiffReact
    right: PropTypes.any,
    left: PropTypes.any,
    show: PropTypes.bool,
    annotated: PropTypes.bool,
    tips: PropTypes.string,
    objectHash: PropTypes.func,
/>
```

# 3. component props

- `left` (array, object, string)

- `right` (array, object, string)

- `show` (bool)

  you can show/hide unchanged values

- `annotated` (bool)

  This will render the original JSON delta in html, with annotations aside explaining the meaning of each part. This attempts to make the JSON delta format self-explained.

- `tips` (string)

  Message that will displayed in case both elements are identical.

- `objectHash` (function)

  Will be passed to _jsondiffpatch_ to improve array comparison performance, as described [here](https://github.com/benjamine/jsondiffpatch/blob/master/docs/arrays.md#an-example-using-objecthash).
  Example:

  ```jsx
  <JsonDiffReact
    left={left}
    right={right}
    objectHash={(obj: any) =>
      obj.id || obj._id || obj.name || JSON.stringify(obj)
    }
  />
  ```
