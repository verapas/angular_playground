import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Field, form, minLength, required, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  imports: [Field, JsonPipe],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.scss',
})
export class SignalForms {
  protected readonly signalFormsModel = signal({ name: '', email: '' });

  protected readonly myForm = form(this.signalFormsModel, (path) => {
    required(path.name, { message: 'Name ist erforderlich.' });
    minLength(path.name, 2, { message: 'Name muss mindestens 2 Zeichen lang sein.' });
    required(path.email, { message: 'E-Mail ist erforderlich.' });
  });

  protected result = signal<{ name: string; email: string } | null>(null);

  protected async onSubmit(): Promise<void> {
    await submit(this.myForm, async (f) => {
      this.result.set({ ...f().value() });
      return undefined as any;
    });
  }

  protected reset(): void {
    this.signalFormsModel.set({ name: '', email: '' });
    this.result.set(null);
  }
}
