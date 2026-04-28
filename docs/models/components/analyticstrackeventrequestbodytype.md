# AnalyticsTrackEventRequestBodyType

Event class. profile_view is normally emitted server-side; this lets the frontend top it up for client-only flows. search captures account/app searches that bypass the backend.

## Example Usage

```typescript
import { AnalyticsTrackEventRequestBodyType } from "@steamsets/client-ts/models/components";

let value: AnalyticsTrackEventRequestBodyType = "profile_view";
```

## Values

```typescript
"profile_view" | "search"
```