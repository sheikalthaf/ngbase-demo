# MEE Chip

```typescript
import { Chip, ChipGroup } from '@/ui/chip';
```

## Components

### `<mee-chip-group>`

### `<mee-chip>, [meeChip]`

- **Inputs:**

  - `removable`: boolean - Whether the chip is removable
  - `value`: any - The value of the chip

- **Outputs:**

  - `close`: void - Emits when the chip is closed

## Usage

```html
<mee-chip-group>
  <mee-chip [value]="item" [removable]="true">Text</mee-chip>
  <button meeChip [value]="item" [removable]="true">Text</button>
</mee-chip-group>
```
