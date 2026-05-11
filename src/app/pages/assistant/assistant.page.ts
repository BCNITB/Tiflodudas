import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.page.html',
  styleUrls: ['./assistant.page.scss'],
})
export class AssistantPage implements OnInit {

  selectedIA: string = '';
  selectedOption: any = null;

  iaOptions = [
    { 
      label: 'Anotadores', 
      value: 'anotadores', 
      url: 'https://notebooklm.google.com/notebook/6a843cd6-b6f3-4dae-8ba4-04e56c41140b',
      icon: 'journal-outline',
      description: 'Accede al cuaderno especializado en anotadores y dispositivos de toma de notas para personas con discapacidad visual.'
    },
    { 
      label: 'Impresoras', 
      value: 'impresoras', 
      url: 'https://notebooklm.google.com/notebook/placeholder-impresoras',
      icon: 'print-outline',
      description: 'Consulta información sobre impresoras Braille y sistemas de relieve.'
    },
    { 
      label: 'Lectores de pantalla', 
      value: 'lectores', 
      url: 'https://notebooklm.google.com/notebook/435726d9-1a6d-4b4c-9a54-7f8e4c530816',
      icon: 'megaphone-outline',
      description: 'Toda la información sobre JAWS, NVDA, VoiceOver y otros lectores de pantalla.'
    },
    { 
      label: 'Líneas braille', 
      value: 'braille', 
      url: 'https://notebooklm.google.com/notebook/placeholder-braille',
      icon: 'ellipsis-horizontal-outline',
      description: 'Explora los diferentes modelos y configuraciones de líneas y terminales Braille.'
    },
    { 
      label: 'Magnificadores de pantalla', 
      value: 'magnificadores', 
      url: 'https://notebooklm.google.com/notebook/placeholder-magnificadores',
      icon: 'search-outline',
      description: 'Información sobre software y hardware para la ampliación de imagen y mejora de contraste.'
    },
    { 
      label: 'Teléfonos adaptados', 
      value: 'telefonos', 
      url: 'https://notebooklm.google.com/notebook/placeholder-telefonos',
      icon: 'phone-portrait-outline',
      description: 'Dispositivos móviles y configuraciones de accesibilidad para telefonía.'
    },
    { 
      label: 'Reproductores Daisy', 
      value: 'daisy', 
      url: 'https://notebooklm.google.com/notebook/placeholder-daisy',
      icon: 'play-circle-outline',
      description: 'Libros hablados digitales y reproductores compatibles con el estándar DAISY.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onIAChange() {
    this.selectedOption = this.iaOptions.find(opt => opt.value === this.selectedIA) || null;
  }

  openNotebook() {
    if (this.selectedOption) {
      window.open(this.selectedOption.url, '_blank');
    }
  }

}
