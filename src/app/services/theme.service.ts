import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme: string;
  private fontMultiplier: number;
  private fontFamily: string;
  private lineHeight: number;
  private textAlign: string;
  private customBackgroundColor: string;
  private customTextColor: string;
  private mediaQueryListener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | undefined;

  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'system';
    this.fontMultiplier = +(localStorage.getItem('fontMultiplier') || 1);
    this.fontFamily = localStorage.getItem('fontFamily') || 'system-ui';
    this.lineHeight = +(localStorage.getItem('lineHeight') || 1.5);
    this.textAlign = localStorage.getItem('textAlign') || 'left';
    this.customBackgroundColor = localStorage.getItem('customBackgroundColor') || '#FFFFFF';
    this.customTextColor = localStorage.getItem('customTextColor') || '#000000';
    this.setTheme(this.currentTheme, this.customBackgroundColor, this.customTextColor);
    this.setFontMultiplier(this.fontMultiplier);
    this.setFontFamily(this.fontFamily);
    this.setLineHeight(this.lineHeight);
    this.setTextAlign(this.textAlign);
  }

  setTheme(theme: string, customBgColor?: string, customTextColor?: string) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);

    // Remove previous listener if it exists
    if (this.mediaQueryListener) {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.mediaQueryListener);
      this.mediaQueryListener = undefined;
    }

    if (theme === 'custom') {
      document.documentElement.setAttribute('color-theme', 'custom');
      // Set custom colors as CSS variables on the root element
      document.documentElement.style.setProperty('--custom-background-color', customBgColor || '');
      document.documentElement.style.setProperty('--custom-text-color', customTextColor || '');
      localStorage.setItem('customBackgroundColor', customBgColor || '');
      localStorage.setItem('customTextColor', customTextColor || '');

    } else if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.mediaQueryListener = (e) => this.updateTheme(e.matches);
      prefersDark.addEventListener('change', this.mediaQueryListener);
      this.updateTheme(prefersDark.matches);
      // Clear custom colors if switching away from custom theme
      document.documentElement.style.removeProperty('--custom-background-color');
      document.documentElement.style.removeProperty('--custom-text-color');
      localStorage.removeItem('customBackgroundColor');
      localStorage.removeItem('customTextColor');
    } else {
      document.documentElement.setAttribute('color-theme', theme);
      // Clear custom colors if switching away from custom theme
      document.documentElement.style.removeProperty('--custom-background-color');
      document.documentElement.style.removeProperty('--custom-text-color');
      localStorage.removeItem('customBackgroundColor');
      localStorage.removeItem('customTextColor');
    }
  }

  updateTheme(isDark: boolean) {
    document.documentElement.setAttribute('color-theme', isDark ? 'dark' : 'light');
  }

  setFontMultiplier(multiplier: number) {
    this.fontMultiplier = multiplier;
    localStorage.setItem('fontMultiplier', multiplier.toString());
    document.documentElement.style.fontSize = `${multiplier}rem`;
  }

  getTheme() {
    return this.currentTheme;
  }

  getFontMultiplier() {
    return this.fontMultiplier;
  }

  setFontFamily(fontFamily: string) {
    this.fontFamily = fontFamily;
    localStorage.setItem('fontFamily', fontFamily);

    if (fontFamily === 'bold-font') {
      document.documentElement.style.fontWeight = 'bold';
      document.documentElement.style.setProperty('--ion-font-family', 'system-ui'); // Keep a default font family
    } else {
      document.documentElement.style.fontWeight = 'normal';
      document.documentElement.style.setProperty('--ion-font-family', fontFamily);
    }
  }

  getFontFamily() {
    return this.fontFamily;
  }

  setLineHeight(lineHeight: number) {
    this.lineHeight = lineHeight;
    localStorage.setItem('lineHeight', lineHeight.toString());
    document.documentElement.style.setProperty('--ion-line-height', lineHeight.toString());
  }

  getLineHeight() {
    return this.lineHeight;
  }

  setTextAlign(textAlign: string) {
    this.textAlign = textAlign;
    localStorage.setItem('textAlign', textAlign);
    document.body.style.textAlign = textAlign;
  }

  getTextAlign() {
    return this.textAlign;
  }

  resetAllSettings() {
    this.setTheme('system');
    localStorage.removeItem('theme');
    localStorage.removeItem('customBackgroundColor');
    localStorage.removeItem('customTextColor');

    this.setFontMultiplier(1);
    localStorage.removeItem('fontMultiplier');

    this.setFontFamily('system-ui');
    localStorage.removeItem('fontFamily');
    document.documentElement.style.fontWeight = 'normal';

    this.setLineHeight(1.5);
    localStorage.removeItem('lineHeight');

    this.setTextAlign('left');
    localStorage.removeItem('textAlign');
  }
}