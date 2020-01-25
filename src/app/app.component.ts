import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumber = false;
  includesymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parseValue = parseInt(value);

    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumber = !this.includeNumber;
  }

  onChangeUseSymbols() {
    this.includesymbols = !this.includesymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumber) {
      validChars += numbers;
    }

    if (this.includesymbols) {
      validChars += numbers;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
