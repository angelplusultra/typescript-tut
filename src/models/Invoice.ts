export class Invoicee {
    readonly client: string;
    readonly details: string;
    readonly amount: number;
    protected readonly creditCard: string
        constructor(c: string, d: string, a: number, cc: string) {
          this.client = c;
          this.details = d;
          this.amount = a;
          this.creditCard = cc
        }
        protected format(): string {
          return `${this.client} owes $${this.amount} for ${this.details} `;
        }
      }