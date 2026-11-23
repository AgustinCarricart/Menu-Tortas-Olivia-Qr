import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  imagenUrl: string;
    categoria: 'Tortas' | 'Shots' | 'Profiteroles' | 'Budines' | 'Alfajores';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  readonly NUMERO_WHATSAPP = '5492235847498';
  readonly USUARIO_INSTAGRAM = 'olivia.tortas';

  readonly linkWhatsAppDirecto = `https://wa.me/${this.NUMERO_WHATSAPP}`;
  readonly linkInstagramDirecto = `https://instagram.com/${this.USUARIO_INSTAGRAM}`;
  readonly linkGoogleMaps = 'https://www.google.com/maps/place/Tortas+olivia/@-38.0137297,-57.5418419,17z/data=!3m1!4b1!4m6!3m5!1s0x9584de844c43b5dd:0x2534ff35e1436777!8m2!3d-38.013734!4d-57.539267!16s%2Fg%2F1vyk3p9d?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D';

  categoriaSeleccionada: 'Tortas' | 'Shots' | 'Profiteroles' | 'Alfajores' = 'Tortas';
  busqueda: string = '';

  // Imagen actualmente ampliada (null = modal cerrado)
  imagenAmpliada: string | null = null;
  nombreImagenAmpliada: string = '';

  readonly estadoHorario = this.calcularEstadoHorario();
  readonly diaActual = this.obtenerDiaActual();

  catalogo: Producto[] = [
    // --- SECCIÓN TORTAS ---
    {
    id: 1,
    nombre: 'Torta Olivia',
    descripcion: 'Torta de vainilla, con dos cortes. Un corte de dulce de leche y un corte de frutillas con crema, con cubierta de merengue.',
    imagenUrl: 'tortas/Olivia nuevo.jpeg',
    categoria: 'Tortas'
  },
   {
    id: 7,
    nombre: 'Rogel',
    descripcion: 'milhojas con dulce de leche y cubierta en merengue.',
    imagenUrl: 'tortas/Rogel nuevo.jpeg',
    categoria: 'Tortas'
  },
    {
    id: 11,
    nombre: 'Años locos',
    descripcion: 'Base fina de torta de chocolate, dulce de leche, mucha mousse de chocolate, fina capa de crema de leche y cubierta en merengue.',
    imagenUrl: 'tortas/Años locos nueva.jpeg',
    categoria: 'Tortas'
  },
  {
    id: 2,
    nombre: 'Torta de Manzana',
    descripcion: 'Biscochuelo de vainilla con manzana , nueces, crema e hilos de caramelo.',
    imagenUrl: 'tortas/Manzana nueva.jpg',
    categoria: 'Tortas'
  },
  {
    id: 3,
    nombre: 'Lemon cheese',
    descripcion: 'Torta de vainilla con dos cortes de mousse de limón, bañada en merengue.',
    imagenUrl: 'tortas/lemonchesse.jpeg',
    categoria: 'Tortas'
  },
  {
    id: 4,
    nombre: 'Brownie con dulce de leche y mousse de chocolate',
    descripcion: 'Base húmeda de brownie cargada con dulce de leche repostero y una suave capa de mousse de chocolate.',
    imagenUrl: 'tortas/Brownie M nueva.jpg',
    categoria: 'Tortas'
  },
  {
    id: 5,
    nombre: 'Brownie con dulce de leche y merengue italiano',
    descripcion: ' base de brownie acompañada con abundantes capas de dulce de leche y copos de merengue italiano.',
    imagenUrl: 'tortas/Brownie nueva.jpg',
    categoria: 'Tortas'
  },
  {
    id: 6,
    nombre: 'Merengada',
    descripcion: 'Torta de vainilla, con dulce de leche, crema y merengue seco.',
    imagenUrl: 'tortas/Merengadanueva.png',
    categoria: 'Tortas'
  },
 
  {
    id: 8,
    nombre: 'Tarta de frutillas',
    descripcion: 'Masa sablé  con abundante crema de leche y frutillas.',
    imagenUrl: 'tortas/Tarta de frutillas nueva.jpeg',
    categoria: 'Tortas'
  },
  {
    id: 9,
    nombre: 'Lemon pie',
    descripcion: 'Masa sablé suave, crema curd casera de limón y merengue italiano dorado.',
    imagenUrl: 'tortas/Lemon nueva.jpg',
    categoria: 'Tortas'
  },
  {
    id: 10,
    nombre: 'Africano',
    descripcion: 'Torta de chocolate con un corte de dulce de leche y otro de mousse de chocolate. Cubierta en mousse de chocolate.',
    imagenUrl: 'tortas/Africano nueva.jpg',
    categoria: 'Tortas'
  },

  {
    id: 12,
    nombre: 'Gustavo',
    descripcion: 'Torta de chocolate, un corte de crema de chocolate, y otro de salsa de frutos rojos, y bañada en merengue.',
    imagenUrl: 'tortas/gustavo.jpeg',
    categoria: 'Tortas'
  },
  {
    id: 13,
    nombre: 'Marquise',
    descripcion: 'Base de brownie con crema de chocolate, salsa de frutos rojos y merengue.',
    imagenUrl: 'tortas/Maquise nueva.jpg',
    categoria: 'Tortas'
  },
  {
    id: 14,
    nombre: 'Merengada con frutillas',
    descripcion: 'Torta de vainilla rellena con dulce de leche, crema y frutillas frescas, cubierta con delicado merengue seco.',
    imagenUrl: 'tortas/Merengada con frutillas.PNG',
    categoria: 'Tortas'
  },
  {
    id: 15,
    nombre: 'Delicia',
    descripcion: 'Base de brownie, dulce de leche, mucha mousse de chocolate y cubierta en merengue con cacao y nueces.',
    imagenUrl: 'tortas/Delicia nueva.jpg',
    categoria: 'Tortas'
  },
  {
    id: 16,
    nombre: 'Quemado',
    descripcion: 'Brownie con dulce de leche, mousse de chocolate y merengue.',
    imagenUrl: 'tortas/Quemado nueva.jpeg',
    categoria: 'Tortas'
  },

    {
    id: 33,
    nombre: 'Tarta de Dulce de leche',
    descripcion: 'Base sable con dulce de leche, trozos de chocolate y merengue',
    imagenUrl: 'tortas/Tarta de dulce de leche.jfif',
    categoria: 'Tortas'
  },

    // --- SECCIÓN SHOTS ---
   {
    id: 17,
    nombre: 'Olivia',
    descripcion: '',
    imagenUrl: 'shots/Shots olivia nuevo.jpeg',
    categoria: 'Shots'
  },
  {
    id: 18,
    nombre: 'Años locos',
    descripcion: '',
    imagenUrl: 'shots/Shot años locos.jpeg',
    categoria: 'Shots'
  },
  {
    id: 19,
    nombre: 'Lemon pie',
    descripcion: '',
    imagenUrl: 'shots/Shots lemon.jpeg',
    categoria: 'Shots'
  },
  {
    id: 20,
    nombre: 'Merengada',
    descripcion: '',
    imagenUrl: 'shots/Shots merengada nuevo.jpeg',
    categoria: 'Shots'
  },
  {
    id: 21,
    nombre: 'Brownie con frutos rojos',
    descripcion: '',
    imagenUrl: 'shots/Shot marquise.jpeg',
    categoria: 'Shots'
  },
  {
    id: 22,
    nombre: 'Tarta de frutillas',
    descripcion: '',
    imagenUrl: 'shots/Shot tarta frutilla.jpeg',
    categoria: 'Shots'
  },

    // --- SECCIÓN PROFITEROLES ---
    {
    id: 23,
    nombre: 'Crema Chantilli',
    descripcion: '',
    imagenUrl: 'profiteroles/chantilli.jpg',
    categoria: 'Profiteroles'
  },
  {
    id: 24,
    nombre: 'Crema pastelera',
    descripcion: '',
    imagenUrl: 'profiteroles/pastelera.jpg',
    categoria: 'Profiteroles'
  },
  {
    id: 25,
    nombre: 'Tiramisu',
    descripcion: '',
    imagenUrl: 'profiteroles/tiramisu.jpg',
    categoria: 'Profiteroles'
  },
  {
    id: 26,
    nombre: 'Mousse de chocolate',
    descripcion: '',
    imagenUrl: 'profiteroles/mousse.jpg',
    categoria: 'Profiteroles'
  },

    {
    id: 26,
    nombre: 'Dulce de leche',
    descripcion: '',
    imagenUrl: 'profiteroles/Profi dulce.jpg',
    categoria: 'Profiteroles'
  },

    // --- SECCIÓN BUDINES --- (Dejar para un futuro neeeaaaauu)
    

    // --- SECCIÓN ALFAJORES ---
    {
    id: 30,
    nombre: 'Alfajor de dulce de leche',
    descripcion: 'Tapas de manteca rellenas con abundante dulce de leche repostero, bañado en chocolate.',
    imagenUrl: 'alfajores/manteca.jpeg',
    categoria: 'Alfajores'
  },
  {
    id: 31,
    nombre: 'Alfajor de maicena',
    descripcion: 'Tapas suaves de maicena rellenas con dulce de leche y cubiertas con coco rallado.',
    imagenUrl: 'alfajores/maicena.jpeg',
    categoria: 'Alfajores'
  },
  {
    id: 32,
    nombre: 'Alfajor de chocolate',
    descripcion: 'Tapas de chocolate rellenas con dulce de leche, bañado en chocolate negro.',
    imagenUrl: 'alfajores/chocolate.jpeg',
    categoria: 'Alfajores'
  },
   {
    id: 34,
    nombre: 'Alfajor con almendras',
    descripcion: 'Masa sable con almendras y dulce de leche',
    imagenUrl: 'alfajores/almendras.jpg',
    categoria: 'Alfajores'
  },
   {
    id: 35,
    nombre: 'Rogelito',
    descripcion: 'Tapas de masa con dulce de leche y cubierto en merengue',
    imagenUrl: "tortas/rogelito2.jpeg",
    categoria: 'Alfajores'
  },
  
  ];

  private normalizar(texto: string): string {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  get productosFiltrados(): Producto[] {
    const q = this.normalizar(this.busqueda.trim());
    if (!q) {
      return this.catalogo.filter(p => p.categoria === this.categoriaSeleccionada);
    }
    return this.catalogo.filter(p =>
      this.normalizar(`${p.nombre} ${p.descripcion} ${p.categoria}`).includes(q)
    );
  }

  actualizarBusqueda(valor: string): void {
    this.busqueda = valor;
  }

  limpiarBusqueda(): void {
    this.busqueda = '';
  }

  linkWhatsAppProducto(producto: Producto): string {
    const msg = `Hola Olivia! Quería consultar / pedir: ${producto.nombre} (${producto.categoria}).`;
    return `${this.linkWhatsAppDirecto}?text=${encodeURIComponent(msg)}`;
  }

  abrirWhatsApp(producto?: Producto): void {
    const url = producto ? this.linkWhatsAppProducto(producto) : this.linkWhatsAppDirecto;
    window.open(url, '_blank', 'noopener');
  }

  // Abre el modal con la imagen ampliada
  ampliarImagen(producto: Producto): void {
    this.imagenAmpliada = producto.imagenUrl;
    this.nombreImagenAmpliada = producto.nombre;
  }

  // Cierra el modal
  cerrarImagenAmpliada(): void {
    this.imagenAmpliada = null;
  }

  private obtenerFechaArgentina(): { dia: number; minutos: number } {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Argentina/Buenos_Aires',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const map: Record<string, string> = {};
    parts.forEach(p => { map[p.type] = p.value; });
    const dayMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return {
      dia: dayMap[map['weekday']] ?? 0,
      minutos: parseInt(map['hour'] || '0', 10) * 60 + parseInt(map['minute'] || '0', 10)
    };
  }

  private obtenerDiaActual(): number {
    return this.obtenerFechaArgentina().dia;
  }

  private calcularEstadoHorario(): { abierto: boolean; texto: string } {
    const { dia, minutos } = this.obtenerFechaArgentina();
    if (dia >= 2 && dia <= 6) {
      if ((minutos >= 600 && minutos < 780) || (minutos >= 1020 && minutos < 1200)) {
        return { abierto: true, texto: 'Abierto ahora' };
      }
      if (minutos < 600) return { abierto: false, texto: 'Abre hoy 10:00' };
      if (minutos >= 780 && minutos < 1020) return { abierto: false, texto: 'Abre hoy 17:00' };
      return { abierto: false, texto: dia === 6 ? 'Abre dom 10:30' : 'Abre mañana 10:00' };
    }
    if (dia === 0) {
      if (minutos >= 630 && minutos < 780) return { abierto: true, texto: 'Abierto ahora' };
      if (minutos < 630) return { abierto: false, texto: 'Abre hoy 10:30' };
      return { abierto: false, texto: 'Cerrado · Abre mar 10:00' };
    }
    return { abierto: false, texto: 'Cerrado · Abre mar 10:00' };
  }
}