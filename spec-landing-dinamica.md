# Spec de landing dinámica — Zerocode

## ⚠️ ALCANCE — LEER PRIMERO

**El resto de la landing debe quedar EXACTAMENTE como está hoy.** No modificar estilos, layout, otras secciones, componentes, animaciones, ni ningún elemento que no esté explícitamente listado en este documento como "dinámico". Esta landing ya está funcionando y generando resultados — el objetivo es agregar personalización quirúrgica en 3 puntos puntuales, sin tocar nada más. Si algo no está mencionado abajo como "cambia", significa que se queda idéntico a como está hoy.

Los únicos 3 elementos que cambian según el nicho:
1. Headline
2. Un pain point adicional (o dos, en el caso de fintech)
3. El orden del portafolio en "Ver plataformas"

Todo lo demás — estilos, botones, logos, subheadline, los 4 pain points base, footer, formulario, animaciones — permanece intacto.

---

## Lógica general

Una sola landing (sin subdominios). El contenido cambia según un parámetro en la URL (`?nicho=`) que cada ad de Meta pasa automáticamente. Si no hay parámetro, se muestra la versión general (la landing actual).

```
Ad Fintech   → https://studio.zerocode.la/?nicho=fintech
Ad Salud     → https://studio.zerocode.la/?nicho=salud
Tráfico normal / sin parámetro → https://studio.zerocode.la/ (versión general, default)
```

---

## 1. Elementos FIJOS (no cambian con ningún nicho)

| Elemento | Contenido |
|---|---|
| **Subheadline** | "Lo validamos antes de que comprometas tu inversión y nos quedamos hasta que el negocio funcione." |
| **Badge de garantía** *(nuevo elemento)* | "100% funcional o te devolvemos tu inversión" — pill con check, debajo del subheadline (Opción 1 del mockup) |
| **CTAs** | "Agenda tu llamada" / "Ver plataformas" |
| **Sección "Empresas que confían en nosotros"** | Logos — se queda igual |
| **4 de los 5 pain points actuales** | Ver detalle abajo — son transversales, no repiten el copy del ad, y funcionan para cualquier industria |

### Los 4 pain points que se quedan fijos (ya son transversales):

1. Empezaste un proyecto digital que falló, y no puedes permitirte equivocarte otra vez.
2. Invertiste en un proveedor y lo que te entregó no te servía o simplemente desapareció.
3. Te entregaron el producto, pero el código quedó en sus manos y no en las tuyas.
4. Pediste referencias y demos, pero nadie te demostró que de verdad podía con lo tuyo.

*(El pain point de "inversionistas" ya no es fijo — pasa a ser dinámico, exclusivo de fintech. Ver sección 2.)*

---

## 2. Elementos DINÁMICOS (cambian según `?nicho=`)

Solo tres bloques cambian — no toca ningún otro elemento de la landing:

### A. Headline

| `nicho=` | Headline |
|---|---|
| `fintech` | "Tu plataforma fintech funcionando en tu negocio, no solo en una demo." |
| `salud` | "Tu plataforma de salud funcionando en tu negocio, no solo en una demo." |
| `general` (default) | "Tu producto digital funcionando en tu negocio, no solo en una demo." *(la actual, sin cambios)* |

### B. Pain points adicionales (se agregan DESPUÉS de los 4 fijos, no los reemplazan)

| `nicho=` | Pain points que se agregan |
|---|---|
| `fintech` | + "Tu plataforma actual no aguanta el volumen de usuarios que tienes, y cada falla te cuesta clientes." <br>+ "Tienes una fecha que cumplir e inversionistas y clientes esperando resultados, no promesas." |
| `salud` | + "Sigues gestionando pacientes y citas de forma manual, y eso te está costando pacientes." |
| `general` | + "No tienes la infraestructura necesaria para el volumen que ya manejas, y cada falla te cuesta clientes." |

*Nota: fintech queda con 6 pain points totales (4 fijos + 2 propios), salud y general quedan con 5 (4 fijos + 1 propio). Es intencional — no es necesario igualar la cantidad entre nichos.*

### C. Sección "Ver plataformas" — REORDENA, no filtra ni oculta nada

El portafolio completo se sigue mostrando siempre, en todos los nichos. Lo único que cambia es qué proyecto(s) aparecen primero en el orden.

| `nicho=` | Qué aparece primero | Resto del portafolio |
|---|---|---|
| `fintech` | Las 3 plataformas fintech | El resto, en el orden actual de la landing |
| `salud` | Portal de adulto mayor | El resto, en el orden actual de la landing |
| `general` | Sin cambios | Orden actual de la landing, sin alterar |

---

## 3. Estructura de datos para Claude Code

```javascript
const headlineDinamico = {
  fintech: "Tu plataforma fintech funcionando en tu negocio, no solo en una demo.",
  salud: "Tu plataforma de salud funcionando en tu negocio, no solo en una demo.",
  general: "Tu producto digital funcionando en tu negocio, no solo en una demo." // headline actual, sin cambios
};

const painPointsDinamicos = {
  fintech: [
    "Tu plataforma actual no aguanta el volumen de usuarios que tienes, y cada falla te cuesta clientes.",
    "Tienes una fecha que cumplir e inversionistas y clientes esperando resultados, no promesas."
  ],
  salud: [
    "Sigues gestionando pacientes y citas de forma manual, y eso te está costando pacientes."
  ],
  general: [
    "No tienes la infraestructura necesaria para el volumen que ya manejas, y cada falla te cuesta clientes."
  ]
};
// Estos pain points se AGREGAN al final de los 4 fijos existentes. No los reemplazan.

// Reordena el array de plataformas existente — no filtra ni oculta ninguna.
// idsDestacados van primero, el resto del portafolio mantiene su orden actual detrás.
const idsDestacadosPorNicho = {
  fintech: ["plataforma-fintech-1", "plataforma-fintech-2", "plataforma-fintech-3"],
  salud: ["portal-adulto-mayor"],
  general: [] // sin reordenar — se deja el array de plataformas tal cual está hoy
};

function reordenarPlataformas(plataformasActuales, idsDestacados) {
  if (idsDestacados.length === 0) return plataformasActuales; // no tocar el orden actual
  const destacadas = idsDestacados
    .map(id => plataformasActuales.find(p => p.id === id))
    .filter(Boolean);
  const resto = plataformasActuales.filter(p => !idsDestacados.includes(p.id));
  return [...destacadas, ...resto];
}

// Leer el parámetro de la URL
const nicho = searchParams.get('nicho') || 'general';
```

---

## 4. Configuración en Meta Ads Manager

En el campo de URL de destino de cada ad, agregar el parámetro correspondiente:

| Ad | URL de destino |
|---|---|
| Fintech A / Fintech B | `https://studio.zerocode.la/?nicho=fintech` |
| Salud | `https://studio.zerocode.la/?nicho=salud` |
| Remarketing | Mismo parámetro que el ad original que generó la visita |

---

## 5. Resumen — qué cambia y qué no

| Sección de la landing | ¿Cambia? |
|---|---|
| Headline | ✅ Dinámico |
| Subheadline | ❌ Fijo |
| Badge de garantía | ❌ Fijo (nuevo, igual para todos) |
| CTAs | ❌ Fijo |
| Pain points 1-4 | ❌ Fijo |
| Pain point(s) adicional(es) | ✅ Dinámico (1 para salud/general, 2 para fintech) |
| Sección "Ver plataformas" | ✅ Dinámico — solo se **reordena**, nunca se oculta ni filtra nada |
| Logos de empresas | ❌ Fijo |
| Todo lo demás (estilos, layout, formulario, footer, animaciones) | ❌ Fijo — **no tocar** |
