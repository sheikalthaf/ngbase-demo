# MEE UI Kit - Implementation Guide for LLMs

This guide provides universal principles for implementing layouts and applications using the MEE UI kit - an Angular component library following shadcn/ui design patterns.

## Core Principles

### 1. Modern Angular Standards
- Always use standalone components
- Implement signal-based inputs and outputs
- Use inject() for dependency injection
- Apply Angular's new control flow syntax (@if, @for, @switch)
- Leverage computed signals for derived state

### 2. Import Conventions
```typescript
// Always use path aliases for UI components
import { ComponentName } from '@/ui/component-name';

// Never use relative paths
import { ComponentName } from '../../../ui/component-name';
```

### 3. Component API Patterns
```typescript
// Signal-based inputs
readonly propertyName = input<Type>(defaultValue);
readonly requiredProperty = input.required<Type>();

// Signal-based outputs
readonly eventName = output<Type>();

// Two-way binding with model
readonly value = model<Type>(defaultValue);
```

### 4. Control Flow Syntax
```typescript
// Use new Angular syntax
@if (condition()) {
  <content />
} @else {
  <alternative />
}

@for (item of items(); track item.id) {
  <item-content />
}

// Avoid structural directives
*ngIf, *ngFor, *ngSwitch
```

## General Implementation Guidelines

### 1. Check Component Documentation
Each UI component has its own usage instructions documented in the component's `-llm.md` file. Always refer to these files for:
- Available inputs and outputs
- Usage examples
- Export names for template references
- Special directives or features

### 2. Component Composition
- Prefer composition over customization
- Use components as intended in their documentation
- Combine multiple components to create complex UI
- Don't recreate functionality that already exists

### 3. Styling Approach
```typescript
// Use host bindings for component-level styles
@Component({
  host: {
    class: 'your-tailwind-classes'
  }
})

// Apply Tailwind utilities consistently
// Follow the design system's spacing, colors, and sizing
```

### 4. State Management
```typescript
// Use signals for reactive state
readonly state = signal<Type>(initialValue);

// Use computed for derived values
readonly derivedValue = computed(() => {
  return this.state() * 2;
});

// Use effects sparingly for side effects
constructor() {
  effect(() => {
    console.log('State changed:', this.state());
  });
}
```

## Component Categories and Usage

### Layout Components
Components like Sidenav, Card, Grid systems
- Used for page structure and layout
- Often contain other components
- Handle responsive behavior

### Form Components
Input, Select, Checkbox, DatePicker, etc.
- Always use within FormField when appropriate
- Support value binding and validation
- Emit standardized events

### Display Components
Table, Avatar, Badge, etc.
- Focus on presenting data
- Support various display states
- Often work with collections of data

### Interactive Components
Button, Menu, Dialog, etc.
- Handle user interactions
- Manage their own state
- Emit action events

### Feedback Components
Alert, Toast, Progress, etc.
- Provide user feedback
- Support different states/variants
- Handle animations and transitions

## Best Practices

### 1. Component Selection
- Always check if a MEE component exists for your need
- Use the most specific component available
- Combine components rather than extending them

### 2. Data Flow
- Pass data down through inputs
- Emit events up through outputs
- Use services for cross-component communication
- Leverage signals for reactive updates

### 3. Accessibility
- Components include ARIA attributes
- Maintain keyboard navigation
- Support screen readers
- Use semantic HTML

### 4. Performance
- Use trackBy functions in loops
- Implement OnPush change detection
- Lazy load when appropriate
- Minimize computed complexity

## Common Patterns

### 1. Form Handling
```typescript
// Use FormField wrapper
<mee-form-field>
  <label meeLabel>Label</label>
  <input meeInput [(value)]="inputValue" />
  <p meeError="condition">Error message</p>
</mee-form-field>
```

### 2. List/Table Implementation
```typescript
// Check for built-in features
// - Sorting
// - Selection
// - Pagination
// - Empty states
// - Loading states
```

### 3. Modal/Dialog Patterns
```typescript
// Use portal services when available
const dialog = dialogPortal();
dialog.open(ComponentOrTemplate, options);
```

### 4. Navigation Patterns
```typescript
// Use navigation components
// - Breadcrumbs for hierarchy
// - Tabs for sections
// - Menu for actions
// - Sidenav for app navigation
```

## Implementation Checklist

When implementing with MEE UI kit:

1. ✓ Check component documentation first
2. ✓ Use modern Angular syntax
3. ✓ Follow import conventions
4. ✓ Apply consistent styling approach
5. ✓ Leverage built-in component features
6. ✓ Use appropriate component combinations
7. ✓ Follow accessibility guidelines
8. ✓ Implement proper state management
9. ✓ Handle errors and edge cases
10. ✓ Test responsive behavior

## Anti-Patterns to Avoid

1. ❌ Don't recreate existing component functionality
2. ❌ Don't use outdated Angular syntax
3. ❌ Don't ignore component documentation
4. ❌ Don't apply inline styles when classes exist
5. ❌ Don't break component encapsulation
6. ❌ Don't ignore TypeScript types
7. ❌ Don't create unnecessary wrappers
8. ❌ Don't mix different state management approaches

## Component Discovery

To find the right component:
1. Check the component category (form, display, layout, etc.)
2. Review the component's `-llm.md` documentation
3. Look at usage examples
4. Consider component combinations
5. Check for related components

## Integration Guidelines

When integrating MEE components:
1. Start with layout components
2. Add navigation structure
3. Implement forms and inputs
4. Add display components
5. Include feedback mechanisms
6. Test responsive behavior
7. Verify accessibility

Remember: Each component has specific documentation. This guide provides general principles that apply across all MEE UI kit components. Always refer to individual component documentation for specific usage instructions.