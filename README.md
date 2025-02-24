# Panel de Control para Microinversores Solares (GPOT)

Un panel de control en tiempo real para monitorear paneles de microinversores solares que recolecta, procesa y visualiza datos de múltiples dispositivos.

## Descripción General

Este proyecto proporciona una solución integral para monitorear sistemas de microinversores solares en tiempo real. Recolecta datos de dispositivos ACU (Unidad de Control Avanzado) y Circuitor, procesa esta información y la presenta a través de un panel de control interactivo con diversas visualizaciones que incluyen métricas de voltaje, corriente, potencia y diagramas de fasores.

## Características

- **Monitoreo en Tiempo Real**: Visualización de datos en vivo de los microinversores solares a medida que se generan
- **Soporte Multi-dispositivo**: Monitoreo de dispositivos ACU y Circuitor desde una única interfaz
- **Métricas Completas**: Seguimiento de voltaje, corriente, potencia, importación/exportación de energía y ángulos de fase
- **Visualizaciones Interactivas**: Visualización de datos a través de varios tipos de gráficos, incluyendo gráficos de líneas y diagramas de fasores
- **Datos Históricos**: Acceso a datos previamente recolectados para análisis de tendencias

## Arquitectura del Sistema

El sistema consta de tres componentes principales:

### 1. Conexión IoT
- Clientes MQTT basados en Python que se conectan a AWS IoT Core
- Scripts de publicación que recolectan datos de los dispositivos y los publican en tópicos MQTT
- Scripts de suscripción que reciben datos y los almacenan en MongoDB

### 2. Servidor Backend
- Servidor Node.js/Express construido con TypeScript
- Se conecta a AWS IoT Core para recibir datos en tiempo real
- Almacena datos en MongoDB para persistencia
- Proporciona endpoints de API REST para datos históricos
- Utiliza Socket.io para enviar actualizaciones en tiempo real al frontend

### 3. Panel de Control Frontend
- Aplicación React construida con TypeScript y Vite
- Componentes de Material UI para un diseño consistente
- Recharts para visualización de datos
- Cliente Socket.io para actualizaciones de datos en tiempo real
- React Router para navegación entre diferentes vistas del panel de control

## Vistas del Panel de Control

- **Panel Principal**: Resumen de métricas clave
- **Monitoreo ACU**:
  - Métricas de Voltaje, Corriente y Potencia (VCP)
  - Métricas de Energía (importada, exportada, neta, total)
- **Monitoreo Circuitor**:
  - Métricas VCP para las tres líneas
  - Diagramas de fasores que muestran relaciones de fase
  - Métricas de potencia para líneas individuales

## Tecnologías Utilizadas

### Frontend
- React 18
- TypeScript
- Material UI
- Recharts
- Socket.io Client
- Redux Toolkit
- Vite

### Backend
- Node.js
- Express
- TypeScript
- MongoDB con Mongoose
- Socket.io
- AWS IoT Device SDK

### Conexión IoT
- Python
- AWS IoT Core
- Protocolo MQTT
- MongoDB para almacenamiento de datos

## Primeros Pasos

1. Clonar el repositorio
2. Configurar AWS IoT Core y obtener los certificados necesarios
3. Configurar la conexión a MongoDB
4. Instalar dependencias para todos los componentes:
   ```
   # Servidor
   cd server
   npm install
   
   # Cliente
   cd client
   npm install
   
   # Conexión IoT (requiere Python)
   cd IoTConection
   pip install -r requirements.txt  # (si está disponible)
   ```
5. Iniciar los componentes:
   ```
   # Servidor
   cd server
   npm run dev
   
   # Cliente
   cd client
   npm run dev
   
   # Suscriptor IoT
   cd IoTConection/Subscriber
   python subscribe.py
   
   # Publicador IoT (para pruebas)
   cd IoTConection/Publisher
   python publish.py 1.0  # 1.0 es el intervalo de publicación en segundos
   ```

## Seguridad

Este proyecto utiliza la autenticación basada en certificados de AWS IoT Core para una comunicación MQTT segura. **Los certificados que estan en este repositorio ya no son de ninguna manera validos**

## Mejoras Futuras

- Agregar autenticación y autorización de usuarios
- Implementar alertas para lecturas anormales
- Desarrollar aplicación móvil para monitoreo en movimiento
- Añadir análisis predictivo para programación de mantenimiento
- Ampliar el soporte para modelos adicionales de inversores solares