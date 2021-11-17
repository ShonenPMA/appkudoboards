# vuedockerize

## Importante

Copiar .env.example para generar tu archivo .env y asignar tus variables de entorno

```dotenv
VUE_APP_API_URL=
VUE_APP_WEBSOCKET_APP_KEY=
VUE_APP_WEBSOCKET_APP_CLUSTER=
```
El resto ed variables solo las deberias modificar si usaras el paquete [laravel web-sockets](https://beyondco.de/docs/laravel-websockets/getting-started/introduction) en vez de pusher

## Instalación del proyecto
```
npm install
```

### Compilar y habilitar hot-reload para desarrollo
```
npm run serve
```

### Compilar y minificar para prod
```
npm run build
```

### Personaliza tu configuración
Lee la [referencia de configuración](https://cli.vuejs.org/config/).
