# WebsitePushResponseIssue

## Example Usage

```typescript
import { WebsitePushResponseIssue } from "@steamsets/client-ts/models/components";

let value: WebsitePushResponseIssue = {
  code: "fieldIgnored",
  message: "<value>",
  path: "commands",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `code`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | What kind of issue it is, as in bot.push. New codes can appear, so treat an unknown one as a warning. | fieldIgnored                                                                                          |
| `message`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | What is wrong and what to do about it, in English.                                                    |                                                                                                       |
| `path`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | The field the issue is about, as a path into the request body.                                        | commands                                                                                              |