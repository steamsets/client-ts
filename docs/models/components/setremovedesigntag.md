# SetRemoveDesignTag

## Example Usage

```typescript
import { SetRemoveDesignTag } from "@steamsets/client-ts/models/components";

let value: SetRemoveDesignTag = {
  id: "bdg_des_2r3yFWjSJzH89FKbYgpkJxF24ZL",
  name: "cat",
  remove: true,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `id`                                | *string*                            | :heavy_minus_sign:                  | The id of the design/color          | bdg_des_2r3yFWjSJzH89FKbYgpkJxF24ZL |
| `name`                              | *string*                            | :heavy_minus_sign:                  | The tag to add to the database      | cat                                 |
| `remove`                            | *boolean*                           | :heavy_minus_sign:                  | Whether to remove the tag or not    | true                                |