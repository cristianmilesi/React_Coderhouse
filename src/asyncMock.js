export const products = [
  {
    title: "Guitarra La Alpujarra 300K",
    price: 750000,
    description:
      "Guitarra de Construcción Artesanal con corte y caja Angosta. Excelente Sonoridad y Fina Construcción.",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708079287/React_Project/M10/M10-Granada-Fishman-Entera_bxkbuu.jpg",
    stock: 5,
    category: "Guitarras",
  },
  {
    title: "Guitarra La Alpujarra M90",
    price: 680000,
    description:
      "Guitarra de Concierto. Construcción Artesanal. Excelente Sonoridad y Finísima Terminación.",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708080105/React_Project/M90/Guitarra-La-Alpujarra-90-90PSY-frente_geiwfc.jpg",
    stock: 6,
    category: "Guitarras",
  },
  {
    title: "Guitarra Fonseca 41K",
    price: 750000,
    description: "Guitarra de Estudio con Corte (Cutaway) y Media Caja",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708080338/React_Project/41K/Guitarra-Fonseca-41K-41KEC-frente_vp47np.jpg",
    stock: 12,
    category: "Guitarras",
  },

  {
    title: "CASIO AP-270",
    price: 1500000,
    description:
      "Piano electrico 88 teclas Acc. Martillo. 22 sonidos, 192 Polif",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708081063/React_Project/Casio_AP270/2008011152347894_01_xlarge_ahbhtf.jpg",
    stock: 7,
    category: "Teclados",
  },
  {
    title: "CASIO CT-S300",
    price: 275000,
    description:
      "Teclado Electrónico. 61 teclas standard sensitivas. 400 sonidos. Diseño portatil y elegante",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708081412/React_Project/CASIO_CTs300/1912161039478928_05_large_tgvi8p.jpg",
    stock: 3,
    category: "Teclados",
  },
  {
    title: "PEARL DMP943XP",
    price: 1352500,
    description:
      "Batería DMP943XP/C 229. Batería de 3 cuerpos. Decade Maple, 24/13&16. White Satin Pearl (No incluye palillos, Fierros ni tambor)",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1710333013/React_Project/Pearl-DMP943XP/1710101059175168_04_large_xb4sqq.jpg",
    stock: 4,
    category: "Baterías",
  },

  {
    title: "FENDER 019",
    price: 550000,
    description:
      "Bajo Electrico, Jazz Bass American. Std 2012 Mn, C/Estuche, Sunbur",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1710333198/React_Project/Fender_Bass/12446_medium_v38d9v.jpg",
    stock: 5,
    category: "Bajos",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id == id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No se encontraron productos");
    }
  });
};
