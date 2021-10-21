export class Expense {
  // Its like a model in laravel and Spring
  // Specify the backend db fields here, these fields will be fetched individually during for loops
  // It will be called in the observables and subscriptions

  id: number | undefined;
  expense: string | undefined;
  amount: number | undefined;
  description: string | undefined;
}
