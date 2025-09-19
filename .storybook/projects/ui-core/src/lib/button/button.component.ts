import { Component, Input } from '@angular/core';

/**
 * Componente de botón sencillo utilizado en la prueba de concepto.  Acepta una etiqueta y
 * una variante mediante inputs.  En un sistema de diseño completo podrías extender este
 * componente para soportar diferentes tamaños, variantes y estados.  Las variables de CSS
 * referenciadas en los estilos se generan a partir de tus tokens de Figma.
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  /** Texto mostrado dentro del botón */
  @Input() label = 'Botón';

  /** Variante visual del botón (por ejemplo, primary, secondary) */
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
