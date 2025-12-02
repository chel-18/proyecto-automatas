# 🤖 Visualizador de Autómatas Finitos Deterministas (AFD)

![Estado del Proyecto](https://img.shields.io/badge/Estado-Finalizado-success)
![Curso](https://img.shields.io/badge/Curso-Teoría_de_la_Computación-blue)

Una herramienta web interactiva diseñada para simular y visualizar el comportamiento de **Autómatas Finitos Deterministas**. Este proyecto permite a los usuarios probar cadenas de entrada en tiempo real y observar la lógica de aceptación o rechazo definida por el autómata.

---

## 🚀 Demo en Vivo

Puedes probar el proyecto directamente aquí:
👉 **[Ver Proyecto Desplegado](https://chel-18.github.io/proyecto-automatas/)**

## 📋 Características Principales

El sistema cuenta con una interfaz amigable donde se resuelven problemas clásicos mediante modelos computacionales:

### 1. Validación de Correos Electrónicos 📧
Un autómata diseñado para verificar la sintaxis de direcciones de email.
- **Alfabeto:** `a-z`, `0-9`, `@`, `.`, `_`, `-`
- **Funcionalidad:** Detecta si una cadena cumple con el formato estándar (ej. `usuario@dominio.com`).

### 2. Detección de Múltiplos de 3 🔢
Implementación lógica basada en residuos (módulo 3).
- **Alfabeto:** `{1, 2, 3}`
- **Funcionalidad:** Acepta únicamente cadenas numéricas cuya suma de dígitos sea divisible por 3.

---

## 🛠️ Tecnologías Utilizadas

El proyecto ha sido construido utilizando estándares web modernos sin dependencias externas pesadas:

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **Estructura semántica**.
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **Estilos y diseño responsivo**.
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **Lógica de los autómatas y manipulación del DOM**.

---

## 📂 Estructura del Proyecto

```text
proyecto-automatas/
├── css/           # Hojas de estilo (diseño)
├── img/           # Diagramas y recursos gráficos
├── js/            # Scripts con la lógica de los AFD
├── pages/         # Vistas adicionales (si aplica)
├── index.html     # Página principal
└── README.md      # Documentación

## Autor
Navarro Valle Chelsea K. y Chávez Atencio Mayk C.