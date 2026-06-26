import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {
  protected readonly name = new FormControl('', [Validators.required, Validators.minLength(2)]);
  protected readonly email = new FormControl('', [Validators.required, Validators.email]);

  protected readonly form = new FormGroup({ name: this.name, email: this.email });

  protected result = signal<{ name: string | null; email: string | null } | null>(null);

  protected onSubmit(): void {
    if (this.form.valid) {
      this.result.set({ name: this.name.value, email: this.email.value });
    } else {
      this.form.markAllAsTouched();
    }
  }

  protected reset(): void {
    this.form.reset();
    this.result.set(null);
  }
}
