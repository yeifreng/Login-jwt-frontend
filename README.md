# Inventory Front

## Descripción

Inventory Front es una aplicación frontend desarrollada en Angular para la gestión de inventarios. Permite a los usuarios autenticarse, gestionar categorías, productos y proveedores, y visualizar un dashboard con información relevante del inventario.

## Características

- **Autenticación de usuarios**: Inicio de sesión, registro y recuperación de contraseña.
- **Dashboard**: Vista general del estado del inventario.
- **Gestión de categorías**: Crear, editar y eliminar categorías de productos.
- **Gestión de productos**: Administrar el catálogo de productos.
- **Gestión de proveedores**: Mantener información de proveedores.
- **Interfaz responsiva**: Diseñada con Tailwind CSS y Flowbite para una experiencia de usuario moderna.

## Tecnologías Utilizadas

- **Angular**: Framework principal para el desarrollo de la aplicación.
- **TypeScript**: Lenguaje de programación.
- **Tailwind CSS**: Framework de CSS para estilos.
- **Flowbite**: Componentes UI basados en Tailwind CSS.
- **RxJS**: Para manejo de operaciones asíncronas.
- **Angular CLI**: Herramienta para desarrollo y construcción.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd inventory-front
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno si es necesario (ver `environments/`).

## Uso

### Servidor de Desarrollo

Ejecuta `npm start` para iniciar el servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo fuente.

### Construcción

Ejecuta `npm run build` para construir el proyecto. Los archivos de construcción se almacenarán en el directorio `dist/`.

### Pruebas

Ejecuta `npm test` para ejecutar las pruebas unitarias a través de Karma.

### Vigilancia de Cambios

Ejecuta `npm run watch` para construir el proyecto en modo de vigilancia, reconstruyendo automáticamente al detectar cambios.

## Estructura del Proyecto

```
src/
├── app/
│   ├── auth/                 # Módulo de autenticación
│   │   ├── components/       # Componentes de autenticación
│   │   ├── models/           # Interfaces de modelos
│   │   ├── pages/            # Páginas de auth (login, signup, forgot-password)
│   │   ├── services/         # Servicios de autenticación
│   │   ├── shell/            # Shell de rutas de auth
│   │   └── utils/            # Utilidades
│   ├── categories/           # Módulo de categorías
│   ├── dashboard/            # Módulo de dashboard
│   ├── products/             # Módulo de productos
│   ├── suppliers/            # Módulo de proveedores
│   ├── shared/               # Componentes y servicios compartidos
│   │   ├── components/       # Componentes compartidos
│   │   ├── guards/           # Guards de autenticación
│   │   ├── interceptors/     # Interceptores HTTP
│   │   ├── models/           # Modelos compartidos
│   │   └── services/         # Servicios compartidos
│   └── utils/                # Utilidades generales
├── assets/                   # Recursos estáticos
├── environments/             # Configuraciones de entorno
└── ...
```

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run watch`: Construye en modo de vigilancia.
- `npm test`: Ejecuta las pruebas unitarias.

## Contribución

1. Haz un fork del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
