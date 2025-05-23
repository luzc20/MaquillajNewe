"use client";
import { useState, useEffect } from "react";

const productos = [
  {
    id: 1,
    nombre: "Base Líquida",
    precio: 20.99,
    imagen:
      "https://ohlalabeautybar.com/wp-content/uploads/2020/09/BASE_LIQUIDA_VOGUE.webp",
    variantes: [
      "Porcelana",
      "Beige Claro",
      "Beige Medio",
      "Beige Oscuro",
      "Caramelo",
      "Chocolate",
    ],
  },
  {
    id: 2,
    nombre: "Delineador",
    precio: 9.99,
    imagen:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWt1yvwRQTPLNLQOE7rUr9RzzfK7tmbqvyThOpB0iEwE6i2BFmC5nqhoFXRPBMP8nnhbxB8hF-evba_WxVGjeWXySMo-sKK57FxSTNiW54VBHDg7_e5ZH2pQ",
    variantes: ["Negro Intenso", "Marrón", "Azul Noche", "Verde Esmeralda"],
  },
  {
    id: 3,
    nombre: "Sombras de Ojos",
    precio: 15.5,
    imagen:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkZVJqRZLhcyXvgysmFV7DTG6wlH2rfstMPbt6ZqiDikxMP4O5z3spTH_ix3Qip8fPYTKJFrg4ealPdLgM0pGf6LjBoo9piDZx3VW4rarFHeZOw8DjLGVj",
    variantes: ["Neutros", "Ahumados", "Pasteles", "Metálicos", "Tierra"],
  },
  {
    id: 4,
    nombre: "Labiales",
    precio: 12.99,
    imagen:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/61/084/L_g0161208461_011.jpg",
    variantes: [
      "Rosa Pálido",
      "Rosa Chicle",
      "Rosa Frambuesa",
      "Rosa Coral",
      "Rosa Mate",
    ],
  },
  {
    id: 5,
    nombre: "Rímel Volumen",
    precio: 13.75,
    imagen:
      "https://sdmntpreastus.oaiusercontent.com/files/00000000-544c-61f9-8bdf-aedcc55a5330/raw?se=2025-05-19T00%3A38%3A42Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-18T23%3A36%3A22Z&ske=2025-05-19T23%3A36%3A22Z&sks=b&skv=2024-08-04&sig=9cxqavIRJ5ha1Wntlmeh6EfuFhN56X2cbD53ZFwNhHw%3D",
    variantes: ["Negro", "Marrón", "Azul", "Verde", "Resistente al Agua"],
  },
  {
    id: 6,
    nombre: "Corrector",
    precio: 11.2,
    imagen:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVzO-HmOFt2w0Lp05zm1JMxMYsQiz9t-RcueXQRTMIwH3osvo5j3rPTUuMI8omSIsNkVc3HystsKPYYU0dESyDqR0Pr8lCd_f7ww1F1JofueMeb92cO04J",
    variantes: [
      "Claro",
      "Medio",
      "Oscuro",
      "Neutralizador Verde",
      "Neutralizador Naranja",
    ],
  },
  {
    id: 7,
    nombre: "Polvo Compacto",
    precio: 14.5,
    imagen: "https://i.ebayimg.com/images/g/3lEAAOSwS5JnDrQ7/s-l225.jpg",
    variantes: [
      "Traslúcido",
      "Porcelana",
      "Beige Claro",
      "Beige Medio",
      "Beige Oscuro",
      "Caramelo",
    ],
  },
  {
    id: 8,
    nombre: "Iluminador",
    precio: 16.99,
    imagen:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzCQ8CP564OQyV4Wh4e4ONsH-RKvjqekXCq_QIC1Yx-EMYt8TLVymHi3HxCmUU05mmYbBg0-dGsVd7yGWvu4VCCo1KMUt1cw09Llr9vY3HvlP-TLhNgnWseg",
    variantes: ["Dorado", "Rosado", "Champagne", "Bronce", "Platino"],
  },
  {
    id: 9,
    nombre: "Rubores",
    precio: 10.5,
    imagen:
      "https://tumaquillajemexico.com/cdn/shop/files/PATRICKTAMajorHeadlinesDouble-TakeCreme_PowderBlushDuoNuevoTodosTonos-TuMaquillaje.webp?v=1736471838&width=1280",
    variantes: ["Coral", "Melocotón", "Rosa", "Frambuesa", "Terracota"],
  },
  {
    id: 10,
    nombre: "Brochas Set",
    precio: 18.0,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_941963-MLA83056495909_032025-O.webp",
    variantes: [
      "Básico 5 piezas",
      "Profesional 12 piezas",
      "Ojos 8 piezas",
      "Rostro 6 piezas",
    ],
  },
  {
    id: 11,
    nombre: "Primer",
    precio: 17.4,
    imagen:
      "https://sdmntprwestus3.oaiusercontent.com/files/00000000-cd5c-61fd-bf60-c37a51417527/raw?se=2025-05-19T00%3A37%3A41Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-18T23%3A31%3A53Z&ske=2025-05-19T23%3A31%3A53Z&sks=b&skv=2024-08-04&sig=QitWHqgGuJsFfIB%2BHtlJCxTdjduTfr%2BLroexlrhZf5Y%3D",
    variantes: ["Matificante", "Hidratante", "Iluminador", "Poros", "Párpados"],
  },
  {
    id: 12,
    nombre: "Spray Fijador",
    precio: 19.3,
    imagen:
      "https://m.media-amazon.com/images/I/71raNB0YVdL._AC_UF350,350_QL80_.jpg",
    variantes: [
      "Mate",
      "Luminoso",
      "Hidratante",
      "Larga Duración",
      "Refrescante",
    ],
  },
];

const productosPiel = [
  {
    id: 1,
    nombre: "Limpiador Facial",
    precio: 18.99,
    imagen:
      "https://www.primor.eu/blog/wp-content/uploads/2023/08/LIMPIADORES-FACIAL-1200x675.jpg",
    variantes: [
      "Piel Normal",
      "Piel Seca",
      "Piel Grasa",
      "Piel Mixta",
      "Piel Sensible",
    ],
    descripcion:
      "Limpia profundamente eliminando impurezas y exceso de grasa sin resecar la piel.",
  },
  {
    id: 2,
    nombre: "Exfoliante Suave",
    precio: 15.5,
    imagen:
      "https://cdn.static.escuelamakeup.com/imagenes/tipos-de-exfoliantes/tipos-de-exfoliantes-para-la-cara.jpg",
    variantes: ["Diario", "Semanal", "Enzimático", "Con Partículas"],
    descripcion:
      "Elimina células muertas y revela una piel más luminosa y suave al tacto.",
  },
  {
    id: 3,
    nombre: "Tónico Facial",
    precio: 12.99,
    imagen:
      "https://s3.abcstatics.com/abc/www/multimedia/estilo/2024/11/15/tonico-facial-f-RtwFpe0QhJa7VgnatIdG1YN-1200x840@diario_abc.jpg",
    variantes: [
      "Hidratante",
      "Calmante",
      "Purificante",
      "Iluminador",
      "Reafirmante",
    ],
    descripcion:
      "Equilibra el pH de la piel y prepara para una mejor absorción de los siguientes productos.",
  },
  {
    id: 4,
    nombre: "Sérum Hidratante",
    precio: 22.5,
    imagen:
      "data:image/jpeg;base64,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",
    variantes: [
      "Ácido Hialurónico",
      "Vitamina C",
      "Retinol",
      "Niacinamida",
      "Péptidos",
    ],
    descripcion:
      "Fórmula concentrada que penetra profundamente para hidratar y tratar problemas específicos.",
  },
  {
    id: 5,
    nombre: "Crema Hidratante",
    precio: 19.75,
    imagen:
      "https://nuestrosecreto.com.mx/cdn/shop/articles/Como_preparar_la_piel_antes_del_maquillaje_img_2.png?v=1684167451&width=2048",
    variantes: ["Ligera", "Rica", "Con SPF", "Noche", "Anti-edad"],
    descripcion:
      "Sella la hidratación y proporciona nutrientes esenciales para una piel saludable.",
  },
  {
    id: 6,
    nombre: "Mascarilla Facial",
    precio: 14.25,
    imagen:
      "https://belcorpmexico.vtexassets.com/arquivos/ids/916223-800-800?v=638242380547530000&width=800&height=800&aspect=true",
    variantes: [
      "Arcilla",
      "Hidratante",
      "Exfoliante",
      "Iluminadora",
      "Calmante",
    ],
    descripcion:
      "Tratamiento intensivo que proporciona resultados visibles en minutos.",
  },
];

const pasosPrepararPiel = [
  {
    numero: 1,
    titulo: "Limpieza",
    icono: "💧",
    descripcion:
      "Comienza con un limpiador facial adecuado para tu tipo de piel. Elimina impurezas, exceso de grasa y restos de maquillaje anterior.",
    consejo: "Usa agua tibia, nunca caliente, para evitar resecar la piel.",
  },
  {
    numero: 2,
    titulo: "Exfoliación",
    icono: "✨",
    descripcion:
      "Exfolia suavemente para eliminar células muertas y permitir que los productos penetren mejor.",
    consejo: "No exfolies más de 1-2 veces por semana para evitar irritación.",
  },
  {
    numero: 3,
    titulo: "Tónico",
    icono: "🌿",
    descripcion:
      "Aplica tónico para equilibrar el pH de la piel y prepararla para los siguientes pasos.",
    consejo: "Elige tónicos sin alcohol para evitar resecar la piel.",
  },
  {
    numero: 4,
    titulo: "Sérum",
    icono: "💎",
    descripcion:
      "Aplica un sérum específico para tus necesidades (hidratación, luminosidad, anti-edad).",
    consejo: "Los sérums son concentrados, solo necesitas unas gotas.",
  },
  {
    numero: 5,
    titulo: "Hidratación",
    icono: "💦",
    descripcion:
      "Aplica una crema hidratante adecuada para tu tipo de piel para sellar la humedad.",
    consejo: "Espera que se absorba completamente antes de aplicar maquillaje.",
  },
  {
    numero: 6,
    titulo: "Primer",
    icono: "🧴",
    descripcion:
      "Finaliza con un primer para crear una base perfecta para el maquillaje.",
    consejo:
      "Elige primers específicos para tus necesidades: matificante, hidratante, iluminador, etc.",
  },
];

export default function Catalago() {
  // Estados para la autenticación y navegación
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState(false);
  const [logeado, setLogeado] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [pagar, setPagar] = useState(false);
  const [pagoExitoso, setPagoExitoso] = useState(false);
  const [mostrarSeguimiento, setMostrarSeguimiento] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [varianteSeleccionada, setVarianteSeleccionada] = useState("");

  // Estados para el seguimiento de pedido mejorado
  const [etapaActual, setEtapaActual] = useState(0);
  const [progreso, setProgreso] = useState(0);
  const [numeroRastreo, setNumeroRastreo] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");

  // Añadir estos nuevos estados después de los estados existentes (línea ~30)
  const [mostrarGuiaPiel, setMostrarGuiaPiel] = useState(false);
  const [mostrarProductosPiel, setMostrarProductosPiel] = useState(false);
  const [categoriaActual, setCategoriaActual] = useState("maquillaje");
  const [cuponAplicado, setCuponAplicado] = useState(false);
  const [codigoCupon, setCodigoCupon] = useState("");
  const [mostrarAnimacionDescuento, setMostrarAnimacionDescuento] =
    useState(false);
  const [primerCompra, setPrimerCompra] = useState(true); // Asumimos que es la primera compra

  // Configuración para el sonido
  const [audioEnabled, setAudioEnabled] = useState(true);

  // Agregar un nuevo estado para mostrar los detalles del producto
  const [mostrarDetallesProducto, setMostrarDetallesProducto] = useState(false);

  // Función para reproducir sonido que funciona en todos los navegadores
  const reproducirSonido = () => {
    if (!audioEnabled) return;

    try {
      // Crear un contexto de audio (funciona en todos los navegadores modernos)
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContext();

      // Crear un oscilador para generar un sonido simple
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      // Configurar el sonido
      oscillator.type = "sine"; // tipo de onda: sine, square, sawtooth, triangle
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // frecuencia en Hz
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // volumen bajo

      // Conectar el oscilador al nodo de ganancia y luego a la salida
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      // Iniciar y detener el oscilador para crear un sonido corto
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1); // duración de 100ms

      // Opcional: registrar éxito
      console.log("Sonido reproducido correctamente");
    } catch (error) {
      console.error("Error al reproducir sonido:", error);
    }
  };

  // Función para reproducir un sonido de éxito (tono diferente)
  const reproducirSonidoExito = () => {
    if (!audioEnabled) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContext();

      // Crear un oscilador para el sonido principal
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      // Configurar para un sonido más agradable
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(1200, audioCtx.currentTime); // frecuencia más alta
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);

      // Añadir un poco de decaimiento para que suene mejor
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioCtx.currentTime + 0.3
      );

      // Conectar
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      // Reproducir
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.3); // duración más larga
    } catch (error) {
      console.error("Error al reproducir sonido de éxito:", error);
    }
  };

  // Funciones de autenticación
  const login = () => {
    if (usuario && clave) {
      reproducirSonido();
      setLogeado(true);
    } else {
      alert("Por favor ingresa usuario y contraseña");
    }
  };

  const loginConFacebook = () => {
    reproducirSonido();
    // página oficial de Facebook en una nueva pestaña
    window.open("https://www.facebook.com", "_blank");
  };

  const loginConTwitter = () => {
    reproducirSonido();
    // página oficial de Twitter en una nueva pestaña
    window.open("https://twitter.com", "_blank");
  };

  // Funciones para el catálogo y carrito
  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
    setVarianteSeleccionada("");
    setMostrarDetallesProducto(false);
  };

  // Agregar esta función después de la función seleccionarProducto
  const verDetallesProducto = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarDetallesProducto(true);
    setMostrarGuiaPiel(false);
    setMostrarProductosPiel(false);
    setPagar(false);
  };

  const agregarAlCarrito = (producto, variante = "") => {
    reproducirSonido();
    const productoConVariante = {
      ...producto,
      varianteSeleccionada:
        variante || (producto.variantes ? producto.variantes[0] : ""),
    };
    setCarrito([...carrito, productoConVariante]);

    // Mostrar confirmación visual temporal
    const btnAgregar = document.getElementById("btnAgregarCarrito");
    if (btnAgregar) {
      const textoOriginal = btnAgregar.innerText;
      btnAgregar.innerText = "¡Agregado! ✅";
      btnAgregar.style.backgroundColor = "#4ade80";

      setTimeout(() => {
        btnAgregar.innerText = textoOriginal;
        btnAgregar.style.backgroundColor = "#10b981";
      }, 1500);
    }

    // Resetear la variante seleccionada para permitir seleccionar otra
    setVarianteSeleccionada("");
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const mostrarGuiaPreparacionPiel = () => {
    setMostrarGuiaPiel(true);
    setMostrarProductosPiel(false);
    setMostrarDetallesProducto(false);
    setPagar(false);
    setProductoSeleccionado(null);
  };

  const mostrarProductosCuidadoPiel = () => {
    setMostrarProductosPiel(true);
    setMostrarGuiaPiel(false);
    setMostrarDetallesProducto(false);
    setPagar(false);
    setProductoSeleccionado(null);
    setCategoriaActual("piel");
  };

  const volverAlCatalogo = () => {
    setMostrarGuiaPiel(false);
    setMostrarProductosPiel(false);
    setMostrarDetallesProducto(false);
    setProductoSeleccionado(null);
    setCategoriaActual("maquillaje");
  };

  // Añadir esta función después de la función eliminarDelCarrito
  const aplicarCupon = () => {
    if (
      codigoCupon.toUpperCase() === "PRIMERA5" &&
      primerCompra &&
      !cuponAplicado
    ) {
      reproducirSonido();
      setCuponAplicado(true);
      setMostrarAnimacionDescuento(true);

      // Ocultar la animación después de 3 segundos
      setTimeout(() => {
        setMostrarAnimacionDescuento(false);
      }, 3000);
    } else {
      alert("Código de cupón inválido o ya utilizado");
    }
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0).toFixed(2);

  // Función para realizar el pago
  const realizarPago = () => {
    reproducirSonido();
    // Generar número de rastreo aleatorio
    const nuevoNumeroRastreo = `GLAM-${Math.floor(
      100000 + Math.random() * 900000
    )}`;
    setNumeroRastreo(nuevoNumeroRastreo);

    // Calcular fecha estimada de entrega (3 días después)
    const fechaActual = new Date();
    const fechaEstimada = new Date(
      fechaActual.getTime() + 3 * 24 * 60 * 60 * 1000
    );
    setFechaEntrega(fechaEstimada.toLocaleDateString());

    // Resetear el estado del cupón para futuras compras
    setPrimerCompra(false);
    setCuponAplicado(false);
    setCodigoCupon("");

    setPagoExitoso(true);
  };

  // Funciones para el seguimiento de pedido
  const iniciarSeguimiento = () => {
    setMostrarSeguimiento(true);
    setEtapaActual(0);
    setProgreso(0);
  };

  // Definición de las etapas de seguimiento
  const etapas = [
    {
      nombre: "Procesando",
      icono: "📋",
      color: "#f472b6",
      descripcion:
        "Estamos verificando tu pedido y preparándolo para el envío.",
      animacion: "flotar 2s ease-in-out infinite",
    },
    {
      nombre: "Empacando",
      icono: "📦",
      color: "#38bdf8",
      descripcion: "Tus productos están siendo cuidadosamente empacados.",
      animacion: "girar 4s linear infinite",
    },
    {
      nombre: "En camino",
      icono: "🚚",
      color: "#a78bfa",
      descripcion: "¡Tu pedido ya está en camino a tu domicilio!",
      animacion: "mover 3s ease-in-out infinite",
    },
    {
      nombre: "Entregado",
      icono: "🏠",
      color: "#4ade80",
      descripcion: "¡Tu pedido ha llegado! Disfruta tus productos.",
      animacion: "brillar 1.5s ease-in-out infinite",
    },
  ];

  // Efecto para avanzar automáticamente las etapas de seguimiento
  useEffect(() => {
    if (mostrarSeguimiento) {
      const etapasConfig = [
        { duracion: 2000, porcentaje: 25 },
        { duracion: 3000, porcentaje: 50 },
        { duracion: 4000, porcentaje: 75 },
        { duracion: 2000, porcentaje: 100 },
      ];

      let currentEtapa = 0;
      const avanzarEtapa = () => {
        if (currentEtapa < etapasConfig.length) {
          setEtapaActual(currentEtapa);
          setProgreso(etapasConfig[currentEtapa].porcentaje);
          currentEtapa++;
          if (currentEtapa < etapasConfig.length) {
            setTimeout(avanzarEtapa, etapasConfig[currentEtapa - 1].duracion);
          }
        }
      };

      const timer = setTimeout(avanzarEtapa, 1000);
      return () => clearTimeout(timer);
    }
  }, [mostrarSeguimiento]);

  // Efecto para las animaciones CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes flotar {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      @keyframes girar {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes brillar {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      @keyframes slide {
        0% { transform: translateX(-10px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes mover {
        0% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        100% { transform: translateX(-5px); }
      }
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes slideUp {
        0% { transform: translateY(10px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      @keyframes slideIn {
        0% { transform: translateX(-20px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      // Añadir estas animaciones al useEffect que crea los estilos CSS
      @keyframes descuentoAnim {
        0% { transform: scale(0.5); opacity: 0; }
        25% { transform: scale(1.2); opacity: 1; }
        50% { transform: scale(0.9); opacity: 1; }
        75% { transform: scale(1.1); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }
      @keyframes rotar {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
        75% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
      }
      @keyframes colorChange {
        0% { color: #ec4899; }
        25% { color: #10b981; }
        50% { color: #f59e0b; }
        75% { color: #3b82f6; }
        100% { color: #ec4899; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Estilos comunes
  const estiloBoton = {
    background: "#ec4899",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s, background 0.3s",
  };

  const tarjetaEstilo = {
    background: "#fff0f5",
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    transition: "transform 0.2s",
    transform: "scale(1)",
    cursor: "pointer",
    border: "2px solid #bbf7d0",
  };

  const fondoAnimado = {
    background: "linear-gradient(-45deg, #fce7f3, #d1fae5, #fbcfe8, #bbf7d0)",
    backgroundSize: "400% 400%",
    animation: "gradientBG 15s ease infinite",
    minHeight: "100vh",
    padding: "1.5rem",
    fontFamily: "cursive",
    color: "#065f46",
  };

  const cerrarSesion = () => {
    setLogeado(false);
    setUsuario("");
    setClave("");
    setCarrito([]);
    setPagar(false);
    setPagoExitoso(false);
    setMostrarSeguimiento(false);
    setProductoSeleccionado(null);
    setVarianteSeleccionada("");
    setEtapaActual(0);
    setProgreso(0);
    setNumeroRastreo("");
    setFechaEntrega("");
    setCuponAplicado(false);
    setCodigoCupon("");
    setMostrarAnimacionDescuento(false);
    setPrimerCompra(true);
    setMostrarGuiaPiel(false);
    setMostrarProductosPiel(false);
    setCategoriaActual("maquillaje");
    setMostrarDetallesProducto(false);
  };

  

  // Renderizado condicional según el estado de la aplicación

  // Pantalla de login
  if (!logeado) {
    return (
      <div
        style={{
          ...fondoAnimado,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "700px",
            display: "flex",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundColor: "#ec4899cc",
              color: "white",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              Bienvenid@ A
              <br /> SHOPPING GLAM🛍️
            </h1>
            <p>
              Descubre nuestros mejores productos de preparacion del cuidado de
              la piel antes del makeup💄y por supuestos productos para hacer
              arte🎨 en tu rostro a precios increíbles✨.
            </p>
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "white",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <h2 style={{ fontSize: "2rem", color: "#065f46" }}>
              Iniciar sesión
            </h2>
            <input
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              style={{
                padding: "0.75rem",
                border: "2px solid #a7f3d0",
                borderRadius: "12px",
                backgroundColor: "#f0fdf4",
              }}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              style={{
                padding: "0.75rem",
                border: "2px solid #a7f3d0",
                borderRadius: "12px",
                backgroundColor: "#f0fdf4",
              }}
            />
            <button
              onClick={login}
              style={{
                ...estiloBoton,
                width: "100%",
                backgroundColor: "#10b981",
              }}
            >
              Ingresar
            </button>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "1rem",
              }}
            >
              <button
                onClick={loginConFacebook}
                style={{
                  ...estiloBoton,
                  backgroundColor: "#3b5998",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "transform 0.2s, background-color 0.3s",
                  padding: "0.75rem 1rem",
                }}
                onMouseDown={(e) =>
                  (e.currentTarget.style.transform = "scale(0.95)")
                }
                onMouseUp={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  f
                </span>
                <span>Facebook</span>
              </button>
              <button
                onClick={loginConTwitter}
                style={{
                  ...estiloBoton,
                  backgroundColor: "#1DA1F2",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "transform 0.2s, background-color 0.3s",
                  padding: "0.75rem 1rem",
                }}
                onMouseDown={(e) =>
                  (e.currentTarget.style.transform = "scale(0.95)")
                }
                onMouseUp={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  𝕏
                </span>
                <span>Twitter</span>
              </button>
            </div>
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
              <p>
                ¿No tienes una cuenta?{" "}
                <a
                  href="#"
                  style={{
                    color: "#ec4899",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Regístrate aquí
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de pago exitoso
  if (pagoExitoso && !mostrarSeguimiento) {
    return (
      <div
        style={{
          ...fondoAnimado,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#065f46",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          ¡Pago realizado con éxito!
        </h1>

        {/* GIF animado celebratorio */}
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "#fce7f3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
            position: "relative",
            animation: "flotar 3s ease-in-out infinite",
            boxShadow: "0 10px 25px rgba(236, 72, 153, 0.5)",
          }}
        >
          {/* Elementos animados para simular un GIF */}
          <div style={{ fontSize: "5rem", position: "absolute" }}>🎉</div>
          <div
            style={{
              fontSize: "3rem",
              position: "absolute",
              animation: "girar 4s linear infinite",
            }}
          >
            💖
          </div>
          <div
            style={{
              fontSize: "3rem",
              position: "absolute",
              top: "70%",
              left: "20%",
              animation: "brillar 2s ease-in-out infinite",
            }}
          >
            ✨
          </div>
          <div
            style={{
              fontSize: "3rem",
              position: "absolute",
              top: "30%",
              right: "20%",
              animation: "brillar 3s ease-in-out infinite",
            }}
          >
            ✨
          </div>
        </div>

        <p
          style={{
            fontSize: "1.5rem",
            color: "#065f46",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          ¡Tu pedido #{numeroRastreo} ha sido confirmado y está siendo
          procesado!
        </p>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <button
            onClick={iniciarSeguimiento}
            style={{
              ...estiloBoton,
              marginTop: "1rem",
              backgroundColor: "#10b981",
              fontSize: "1.2rem",
              padding: "0.75rem 1.5rem",
            }}
          >
            Seguir mi pedido 📦
          </button>
          <button
            onClick={cerrarSesion}
            style={{
              ...estiloBoton,
              marginTop: "1rem",
              backgroundColor: "#ec4899",
              fontSize: "1.2rem",
              padding: "0.75rem 1.5rem",
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    );
  }

  // Pantalla de seguimiento de pedido mejorada
  if (mostrarSeguimiento) {
    return (
      <div
        style={{
          ...fondoAnimado,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#065f46",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
            animation: "slideIn 0.5s ease-out",
          }}
        >
          Seguimiento de tu pedido
        </h1>

        <div
          style={{
            width: "90%",
            maxWidth: "800px",
            backgroundColor: "white",
            borderRadius: "1.5rem",
            padding: "2rem",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "6px",
              backgroundColor: "#10b981",
              width: `${progreso}%`,
              transition: "width 0.3s ease-out",
              zIndex: 1,
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              marginBottom: "3rem",
              padding: "0 1rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "4px",
                backgroundColor: "#e5e7eb",
                top: "2.5rem",
                left: "10%",
                right: "10%",
                zIndex: 0,
                borderRadius: "2px",
              }}
            />

            {etapas.map((etapa, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2,
                  width: "25%",
                }}
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    backgroundColor:
                      etapaActual >= index ? etapa.color : "#e5e7eb",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5rem",
                    marginBottom: "0.5rem",
                    transition: "all 0.5s ease",
                    boxShadow:
                      etapaActual >= index
                        ? "0 4px 15px rgba(0, 0, 0, 0.1)"
                        : "none",
                    animation: etapaActual === index ? etapa.animacion : "none",
                    transform: etapaActual > index ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {etapa.icono}
                </div>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: etapaActual >= index ? "bold" : "normal",
                    color: etapaActual >= index ? "#065f46" : "#6b7280",
                    fontSize: "0.9rem",
                  }}
                >
                  {etapa.nombre}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "#f0fdf4",
              padding: "1.5rem",
              borderRadius: "1rem",
              marginBottom: "2rem",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
              borderLeft: `4px solid ${
                etapas[etapaActual]?.color || "#10b981"
              }`,
              animation: "fadeIn 0.5s ease-out",
            }}
          >
            <h3
              style={{
                color: etapas[etapaActual]?.color || "#10b981",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>
                {etapas[etapaActual]?.icono}
              </span>
              <span>{etapas[etapaActual]?.nombre}</span>
            </h3>
            <p style={{ color: "#065f46", lineHeight: "1.5" }}>
              {etapas[etapaActual]?.descripcion}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "1.5rem",
              borderRadius: "1rem",
              marginBottom: "2rem",
              border: "1px solid #e2e8f0",
              animation: "slideUp 0.5s ease-out",
            }}
          >
            <h3 style={{ color: "#065f46", marginBottom: "1rem" }}>
              📦 Detalles del envío
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div>
                <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                  Número de rastreo
                </p>
                <p style={{ fontWeight: "bold", color: "#065f46" }}>
                  {numeroRastreo}
                </p>
              </div>
              <div>
                <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                  Fecha estimada
                </p>
                <p style={{ fontWeight: "bold", color: "#065f46" }}>
                  {fechaEntrega}
                </p>
              </div>
              <div>
                <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                  Método de envío
                </p>
                <p style={{ fontWeight: "bold", color: "#065f46" }}>
                  Envío Prioritario
                </p>
              </div>
              <div>
                <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                  Estado actual
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: etapas[etapaActual]?.color || "#10b981",
                  }}
                >
                  {etapas[etapaActual]?.nombre}
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <button
              onClick={() => {
                setPagoExitoso(true);
                setMostrarSeguimiento(false);
              }}
              style={{ ...estiloBoton, backgroundColor: "#f472b6", flex: 1 }}
            >
              ← Volver al resumen
            </button>
            <button
              onClick={() => {
                if (etapaActual < etapas.length - 1) {
                  setEtapaActual((prev) => prev + 1);
                  setProgreso((prev) => prev + 25);
                }
              }}
              disabled={etapaActual === etapas.length - 1}
              style={{
                ...estiloBoton,
                backgroundColor:
                  etapaActual === etapas.length - 1 ? "#4ade80" : "#10b981",
                flex: 1,
                cursor:
                  etapaActual === etapas.length - 1 ? "default" : "pointer",
              }}
            >
              {etapaActual === etapas.length - 1
                ? "✅ Entrega completada"
                : "Simular avance →"}
            </button>
          </div>
        </div>

        <footer
          style={{ marginTop: "4rem", textAlign: "center", color: "#6b7280" }}
        >
          © 2025 Glam. Todos los derechos reservados.
        </footer>
      </div>
    );
  }
  mostrarGuiaPiel && (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "white",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#ec4899", margin: 0 }}>
          ✨ Preparación de la Piel - Glam
        </h1>
        <div>
          <button
            onClick={() => mostrarProductosCuidadoPiel()}
            style={{
              ...estiloBoton,
              backgroundColor: "#10b981",
              marginRight: "0.5rem",
            }}
          >
            Ver Productos
          </button>
          <button onClick={() => volverAlCatalogo()} style={{ ...estiloBoton }}>
            Volver al Catálogo
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fdf2f8",
          padding: "2rem",
          borderRadius: "1rem",
          marginBottom: "2rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ec4899",
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
          }}
        >
          Guía de Preparación de la Piel para un Maquillaje Perfecto
        </h2>
        <p
          style={{
            color: "#065f46",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          Una piel bien preparada es el secreto para un maquillaje impecable y
          duradero. Sigue estos pasos esenciales antes de aplicar tu maquillaje
          para obtener resultados profesionales.
        </p>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {pasosPrepararPiel.map((paso) => (
            <div
              key={paso.numero}
              style={{
                display: "flex",
                gap: "1rem",
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                borderLeft: "4px solid #ec4899",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  backgroundColor: "#fce7f3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}
              >
                {paso.icono}
              </div>
              <div>
                <h3
                  style={{
                    color: "#ec4899",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {paso.numero}. {paso.titulo}
                </h3>
                <p style={{ color: "#065f46", marginBottom: "0.5rem" }}>
                  {paso.descripcion}
                </p>
                <p
                  style={{
                    color: "#6b7280",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                  }}
                >
                  <strong>Consejo:</strong> {paso.consejo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          onClick={() => mostrarProductosCuidadoPiel()}
          style={{
            ...estiloBoton,
            backgroundColor: "#10b981",
            padding: "0.75rem 1.5rem",
            fontSize: "1.2rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          Ver productos recomendados 🛍️
        </button>
      </div>
    </div>
  );
  mostrarProductosPiel && (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#10b981", margin: 0 }}>
          Preparación de la Piel
        </h1>
        <div>
          <button
            onClick={() => mostrarGuiaPreparacionPiel()}
            style={{
              ...estiloBoton,
              backgroundColor: "#ec4899",
              marginRight: "0.5rem",
            }}
          >
            Guía de Preparación
          </button>
          <button onClick={() => volverAlCatalogo()} style={{ ...estiloBoton }}>
            Volver al Catálogo
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#d1fae5",
          padding: "2rem",
          borderRadius: "1rem",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{ color: "#065f46", fontSize: "1.5rem", marginBottom: "1rem" }}
        >
          Descubre nuestra selección de productos para preparar tu piel antes
          del maquillaje y lograr un acabado perfecto y duradero.
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
        }}
      >
        {productosPiel.map((p) => (
          <div
            key={p.id}
            style={{
              ...tarjetaEstilo,
              backgroundColor: "#f0fdf4",
              border: "2px solid #a7f3d0",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 12px 20px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0, 0, 0, 0.15)";
            }}
          >
            <img
              src={p.imagen || "/placeholder.svg"}
              alt={p.nombre}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              onClick={() => seleccionarProducto(p)}
            />
            <h3 style={{ color: "#065f46" }}>{p.nombre}</h3>
            <p style={{ fontWeight: "bold", color: "#059669" }}>${p.precio}</p>
            <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>
              {p.variantes.length} opciones disponibles
            </p>
            <button
              onClick={() => verDetallesProducto(p)}
              style={{
                ...estiloBoton,
                backgroundColor: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                margin: "0 auto",
              }}
            >
              Ver detalles 👀
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Pantalla de catálogo y carrito
  return (
    <div style={fondoAnimado}>
      <nav
        style={{
          backgroundColor: "#ec4899",
          padding: "1rem",
          borderRadius: "12px",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <span style={{ fontSize: "1.5rem" }}>SHOPPING GLAM💄🛍️</span>
        <div>
          <button onClick={() => volverAlCatalogo()} style={estiloBoton}>
            Inicio
          </button>
          <button
            onClick={() => mostrarGuiaPreparacionPiel()}
            style={{ ...estiloBoton, marginLeft: "0.5rem" }}
          >
            Guía
          </button>
          <button
            onClick={() => mostrarProductosCuidadoPiel()}
            style={{ ...estiloBoton, marginLeft: "0.5rem" }}
          >
            Productos
          </button>
          <button
            onClick={() => setPagar(true)}
            style={{ ...estiloBoton, marginLeft: "0.5rem" }}
          >
            Carrito ({carrito.length})
          </button>
          <button
            onClick={cerrarSesion}
            style={{
              ...estiloBoton,
              backgroundColor: "#10b981",
              marginLeft: "0.5rem",
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </nav>

      {/* Guía de preparación de la piel */}
      {mostrarGuiaPiel && (
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h1 style={{ fontSize: "2rem", color: "#ec4899", margin: 0 }}>
              ✨ Preparación de la Piel - Glam
            </h1>
            <div>
              <button
                onClick={() => mostrarProductosCuidadoPiel()}
                style={{
                  ...estiloBoton,
                  backgroundColor: "#10b981",
                  marginRight: "0.5rem",
                }}
              >
                Ver Productos
              </button>
              <button
                onClick={() => volverAlCatalogo()}
                style={{ ...estiloBoton }}
              >
                Volver al inicio
              </button>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#fdf2f8",
              padding: "2rem",
              borderRadius: "1rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#ec4899",
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
              }}
            >
              Guía de Preparación de la Piel para un Maquillaje Perfecto🥰💄
            </h2>
            <p
              style={{
                color: "#065f46",
                fontSize: "1.1rem",
                lineHeight: "1.6",
                marginBottom: "2rem",
              }}
            >
              Una piel preparada es el secreto para un maquillaje impecable y
              duradero. Sigue estos pasos esenciales antes de aplicar tu
              maquillaje para obtener resultados profesionales✨.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {pasosPrepararPiel.map((paso) => (
                <div
                  key={paso.numero}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    backgroundColor: "white",
                    padding: "1.5rem",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                    borderLeft: "4px solid #ec4899",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      backgroundColor: "#fce7f3",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {paso.icono}
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#ec4899",
                        marginBottom: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      {paso.numero}. {paso.titulo}
                    </h3>
                    <p style={{ color: "#065f46", marginBottom: "0.5rem" }}>
                      {paso.descripcion}
                    </p>
                    <p
                      style={{
                        color: "#6b7280",
                        fontStyle: "italic",
                        fontSize: "0.9rem",
                      }}
                    >
                      <strong>Consejo:</strong> {paso.consejo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              onClick={() => mostrarProductosCuidadoPiel()}
              style={{
                ...estiloBoton,
                backgroundColor: "#10b981",
                padding: "0.75rem 1.5rem",
                fontSize: "1.2rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Ver productos recomendados 🛍️
            </button>
          </div>
        </div>
      )}

      {/* Productos para el cuidado de la piel */}
      {mostrarProductosPiel && (
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h1 style={{ fontSize: "2rem", color: "#10b981", margin: 0 }}>
              Productos del cuidado de la piel🥰💄
            </h1>
            <div>
              <button
                onClick={() => mostrarGuiaPreparacionPiel()}
                style={{
                  ...estiloBoton,
                  backgroundColor: "#ec4899",
                  marginRight: "0.5rem",
                }}
              >
                Guía de Preparación
              </button>
              <button
                onClick={() => volverAlCatalogo()}
                style={{ ...estiloBoton }}
              >
                Volver al inicio
              </button>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#d1fae5",
              padding: "2rem",
              borderRadius: "1rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#065f46",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              Un buen maquillaje comienza con una piel bien preparada🥰🧚.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {productosPiel.map((p) => (
              <div
                key={p.id}
                style={{
                  ...tarjetaEstilo,
                  backgroundColor: "#f0fdf4",
                  border: "2px solid #a7f3d0",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 20px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.15)";
                }}
              >
                <img
                  src={p.imagen || "/placeholder.svg"}
                  alt={p.nombre}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  onClick={() => seleccionarProducto(p)}
                />
                <h3 style={{ color: "#065f46" }}>{p.nombre}</h3>
                <p style={{ fontWeight: "bold", color: "#059669" }}>
                  ${p.precio}
                </p>
                <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                  {p.variantes.length} opciones disponibles
                </p>
                <button
                  onClick={() => verDetallesProducto(p)}
                  style={{
                    ...estiloBoton,
                    backgroundColor: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    margin: "0 auto",
                  }}
                >
                  Ver detalles 👀
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Catálogo de maquillaje y carrito */}
      {!pagar &&
      !mostrarGuiaPiel &&
      !mostrarProductosPiel &&
      !mostrarDetallesProducto ? (
        <>
          {productoSeleccionado ? (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "1rem",
                padding: "2rem",
                maxWidth: "800px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  color: "#ec4899",
                  marginBottom: "1rem",
                }}
              >
                {productoSeleccionado.nombre}
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src={productoSeleccionado.imagen || "/placeholder.svg"}
                  alt={productoSeleccionado.nombre}
                  style={{
                    width: "150px",
                    height: "150px",
                    marginBottom: "1rem",
                  }}
                />
                <p style={{ fontSize: "1.5rem", color: "#065f46" }}>
                  Precio: ${productoSeleccionado.precio}
                </p>

                <div style={{ width: "100%", marginBottom: "1.5rem" }}>
                  <h3 style={{ color: "#065f46", marginBottom: "0.5rem" }}>
                    Selecciona una variante:
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#6b7280",
                      marginBottom: "0.5rem",
                      fontStyle: "italic",
                    }}
                  ></p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      justifyContent: "center",
                    }}
                  >
                    {productoSeleccionado.variantes.map((variante, idx) => (
                      <button
                        key={idx}
                        onClick={() => setVarianteSeleccionada(variante)}
                        style={{
                          padding: "0.5rem 1rem",
                          borderRadius: "0.5rem",
                          border:
                            varianteSeleccionada === variante
                              ? "2px solid #ec4899"
                              : "1px solid #d1d5db",
                          backgroundColor:
                            varianteSeleccionada === variante
                              ? "#fce7f3"
                              : "white",
                          cursor: "pointer",
                        }}
                      >
                        {variante}
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: "1rem",
                    backgroundColor: "#f0fdf4",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>🛒</span>
                  <span>
                    Productos en carrito: <strong>{carrito.length}</strong>
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={() => setProductoSeleccionado(null)}
                    style={{ ...estiloBoton, backgroundColor: "#6b7280" }}
                  >
                    Volver
                  </button>
                  <button
                    id="btnAgregarCarrito"
                    onClick={() => {
                      reproducirSonido();
                      agregarAlCarrito(
                        productoSeleccionado,
                        varianteSeleccionada
                      );
                    }}
                    style={{ ...estiloBoton, backgroundColor: "#10b981" }}
                    disabled={!varianteSeleccionada}
                  >
                    Agregar al carrito 🛒
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "2rem",
              }}
            >
              {categoriaActual === "maquillaje"
                ? productos.map((p) => (
                    <div key={p.id} style={tarjetaEstilo}>
                      <img
                        src={p.imagen || "/placeholder.svg"}
                        alt={p.nombre}
                        style={{
                          width: "100px",
                          height: "100px",
                          cursor: "pointer",
                        }}
                        onClick={() => seleccionarProducto(p)}
                      />
                      <h3>{p.nombre}</h3>
                      <p>${p.precio}</p>
                      <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                        {p.variantes.length} tonos disponibles
                      </p>
                      <button
                        onClick={() => verDetallesProducto(p)}
                        style={estiloBoton}
                      >
                        Ver detalles 👀
                      </button>
                    </div>
                  ))
                : productosPiel.map((p) => (
                    <div key={p.id} style={tarjetaEstilo}>
                      <img
                        src={p.imagen || "/placeholder.svg"}
                        alt={p.nombre}
                        style={{
                          width: "100px",
                          height: "100px",
                          cursor: "pointer",
                        }}
                        onClick={() => seleccionarProducto(p)}
                      />
                      <h3>{p.nombre}</h3>
                      <p>${p.precio}</p>
                      <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                        {p.variantes.length} opciones disponibles
                      </p>
                      <button
                        onClick={() => verDetallesProducto(p)}
                        style={estiloBoton}
                      >
                        Ver detalles 👀
                      </button>
                    </div>
                  ))}
            </div>
          )}
        </>
      ) : mostrarDetallesProducto && productoSeleccionado ? (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{ fontSize: "2rem", color: "#ec4899", marginBottom: "1rem" }}
          >
            {productoSeleccionado.nombre}
          </h2>
          <img
            src={productoSeleccionado.imagen || "/placeholder.svg"}
            alt={productoSeleccionado.nombre}
            style={{ width: "150px", height: "150px", marginBottom: "1rem" }}
          />
          <p style={{ fontSize: "1.5rem", color: "#065f46" }}>
            Precio: ${productoSeleccionado.precio}
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#065f46",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {productoSeleccionado.descripcion}
          </p>

          <div style={{ width: "100%", marginBottom: "1.5rem" }}>
            <h3 style={{ color: "#065f46", marginBottom: "0.5rem" }}>
              Selecciona una variante:
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#6b7280",
                marginBottom: "0.5rem",
                fontStyle: "italic",
              }}
            ></p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                justifyContent: "center",
              }}
            >
              {productoSeleccionado.variantes.map((variante, idx) => (
                <button
                  key={idx}
                  onClick={() => setVarianteSeleccionada(variante)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    border:
                      varianteSeleccionada === variante
                        ? "2px solid #ec4899"
                        : "1px solid #d1d5db",
                    backgroundColor:
                      varianteSeleccionada === variante ? "#fce7f3" : "white",
                    cursor: "pointer",
                  }}
                >
                  {variante}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              marginBottom: "1rem",
              backgroundColor: "#f0fdf4",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>🛒</span>
            <span>
              Productos en carrito: <strong>{carrito.length}</strong>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => {
                setMostrarDetallesProducto(false);
                setProductoSeleccionado(null);
                if (categoriaActual === "piel") {
                  setMostrarProductosPiel(true);
                } else {
                  volverAlCatalogo();
                }
              }}
              style={{ ...estiloBoton, backgroundColor: "#6b7280" }}
            >
              Volver
            </button>
            <button
              id="btnAgregarCarrito"
              onClick={() => {
                reproducirSonido();
                agregarAlCarrito(productoSeleccionado, varianteSeleccionada);
              }}
              style={{ ...estiloBoton, backgroundColor: "#10b981" }}
              disabled={!varianteSeleccionada}
            >
              Agregar al carrito 🛒
            </button>
          </div>
        </div>
      ) : pagar ? (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", color: "#10b981" }}>🛒 Carrito</h2>
          {carrito.length === 0 ? (
            <div
              style={{
                padding: "2rem",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "1rem",
                maxWidth: "500px",
                margin: "2rem auto",
              }}
            >
              <p style={{ fontSize: "1.2rem", color: "#065f46" }}>
                Tu carrito está vacío🥺
              </p>
              <button
                onClick={() => setPagar(false)}
                style={{ ...estiloBoton, marginTop: "1rem" }}
              >
                Ver productos
              </button>
            </div>
          ) : (
            <>
              {carrito.map((item, index) => (
                <div
                  key={index}
                  style={{
                    ...tarjetaEstilo,
                    margin: "1rem auto",
                    maxWidth: "400px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <p>
                      <strong>{item.nombre}</strong> - ${item.precio}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                      Variante: {item.varianteSeleccionada}
                    </p>
                  </div>
                  <button
                    onClick={() => eliminarDelCarrito(index)}
                    style={{ ...estiloBoton, background: "#f87171" }}
                  >
                    ❌
                  </button>
                </div>
              ))}

              <div
                style={{
                  backgroundColor: "white",
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  maxWidth: "400px",
                  margin: "2rem auto",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {mostrarAnimacionDescuento && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 10,
                      animation: "fadeIn 0.3s ease-out",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "5rem",
                        animation:
                          "descuentoAnim 1s ease-out, rotar 2s ease-in-out infinite",
                        color: "#10b981",
                      }}
                    >
                      🎉
                    </div>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        marginTop: "1rem",
                        animation: "colorChange 3s infinite",
                        textAlign: "center",
                      }}
                    >
                      ¡5% de descuento
                      <br />
                      aplicado!
                    </div>
                  </div>
                )}

                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#065f46",
                    marginBottom: "1rem",
                  }}
                >
                  Resumen del pedido
                </h3>

                {!cuponAplicado && primerCompra && (
                  <div
                    style={{
                      marginBottom: "1rem",
                      padding: "0.5rem",
                      backgroundColor: "#fef3c7",
                      borderRadius: "0.5rem",
                      border: "1px dashed #f59e0b",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#92400e",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        ¡Primera compra!
                      </span>{" "}
                      Usa el código <strong>PRIMERA5</strong> para obtener un 5%
                      de descuento🔖.
                    </p>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <input
                        type="text"
                        placeholder="Código de cupón"
                        value={codigoCupon}
                        onChange={(e) => setCodigoCupon(e.target.value)}
                        style={{
                          flex: 1,
                          padding: "0.5rem",
                          borderRadius: "0.25rem",
                          border: "1px solid #d1d5db",
                        }}
                      />
                      <button
                        onClick={() => {
                          reproducirSonido();
                          aplicarCupon();
                        }}
                        style={{
                          ...estiloBoton,
                          backgroundColor: "#f59e0b",
                          padding: "0.5rem 0.75rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span>Subtotal:</span>
                  <span>${total}</span>
                </div>

                {cuponAplicado && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                      color: "#10b981",
                      fontWeight: "bold",
                    }}
                  >
                    <span>Descuento (5%):</span>
                    <span>
                      -${(Number.parseFloat(total) * 0.05).toFixed(2)}
                    </span>
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span>Envío:</span>
                  <span>$5.00</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "1px solid #d1d5db",
                    paddingTop: "0.5rem",
                    marginTop: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  <span>Total:</span>
                  <span>
                    $
                    {cuponAplicado
                      ? (Number.parseFloat(total) * 0.95 + 5).toFixed(2)
                      : (Number.parseFloat(total) + 5).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  reproducirSonido();
                  realizarPago();
                }}
                style={{
                  ...estiloBoton,
                  backgroundColor: "#10b981",
                  padding: "0.75rem 2rem",
                  fontSize: "1.2rem",
                }}
              >
                Finalizar compra 💸
              </button>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
