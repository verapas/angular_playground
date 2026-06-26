import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-template-forms',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-forms.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './template-forms.scss',
})
export class TemplateForms {
  protected name = '';
  protected email = '';
  protected result = signal<{ name: string; email: string } | null>(null);

  protected onSubmit(form: NgForm): void {
    if (form.valid) {
      this.result.set({ name: this.name, email: this.email });
    }
  }

  protected reset(form: NgForm): void {
    form.resetForm();
    this.result.set(null);
  }
}
