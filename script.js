
document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const smileDogImage =
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85";

  const stories = {
    slender: {
      title: "SLENDER MAN",
      code: "// FILE_001 — ENTIDAD",
      image: "img/slender.jpg",
      paragraphs: [
        "Slender Man es un personaje ficticio de terror nacido en internet en 2009. Se lo representa como una figura extremadamente alta, vestida de traje y sin rasgos faciales.",
        "En las historias, aparece cerca de bosques y lugares aislados. Su presencia suele asociarse con fotografías extrañas, desapariciones ficticias y una sensación constante de ser observado.",
        "El personaje se convirtió en uno de los grandes símbolos de las creepypastas y demuestra cómo una creación digital puede crecer hasta convertirse en una leyenda compartida por miles de personas."
      ]
    },
    jeff: {
      title: "JEFF THE KILLER",
      code: "// FILE_002 — LEYENDA URBANA",
      image: "img/jeff.jpg",
      paragraphs: [
        "Jeff the Killer es una de las creepypastas más conocidas de la internet clásica. Su imagen característica y su historia circularon durante años en foros, blogs y páginas de terror.",
        "Existen distintas versiones de su origen y de los acontecimientos que lo rodean. Esa falta de una versión definitiva ayudó a que la historia siguiera cambiando con el tiempo.",
        "El expediente reúne una leyenda digital de ficción: las distintas versiones que circulan no constituyen pruebas de que el personaje sea real."
      ]
    },
    ben: {
      title: "BEN DROWNED",
      code: "// FILE_003 — REGISTRO DE JUEGO",
      image: "img/ben.jpg",
      paragraphs: [
        "BEN Drowned es una creepypasta publicada en internet en 2010. La historia se presenta como una serie de registros relacionados con una copia extraña de The Legend of Zelda: Majora's Mask.",
        "El relato utiliza capturas, mensajes, videos y supuestos errores del juego para construir una experiencia narrativa que parece un misterio por resolver.",
        "Su formato ayudó a popularizar las historias de terror contadas mediante archivos digitales y material presentado como evidencia."
      ]
    },
    rake: {
      title: "THE RAKE",
      code: "// FILE_004 — CRIATURA",
      image: "img/rake.jpg",
      paragraphs: [
        "The Rake es una criatura ficticia que aparece en relatos de terror compartidos en internet. Suele describirse como una figura pálida, delgada y de movimientos extraños.",
        "Muchas versiones de la leyenda sitúan sus encuentros durante la noche, cuando alguien cree haber visto una presencia cerca de su habitación o en un lugar apartado.",
        "Los relatos tienen diferentes autores y versiones. Su fama procede de la tradición colaborativa de las comunidades de terror en línea."
      ]
    },
    momo: {
      title: "MOMO",
      code: "// FILE_005 — LEYENDA DIGITAL",
      image: "img/momo.jpg",
      paragraphs: [
        "Momo se hizo conocida por una imagen inquietante que se viralizó en redes sociales durante 2018. Su apariencia fue utilizada en historias alarmantes que mezclaban rumores y ficción.",
        "Con el tiempo, la imagen se convirtió en un ejemplo de cómo el contenido viral puede transformarse en una leyenda urbana sin que todas las afirmaciones que la rodean tengan fundamento.",
        "Este expediente registra un fenómeno de internet y su difusión. La apariencia de una imagen no demuestra que exista una entidad detrás de ella."
      ]
    },
    smile: {
      title: "SMILE DOG",
      code: "// FILE_006 — IMAGEN MALDITA",
      image: smileDogImage,
      paragraphs: [
        "Smile Dog, también conocido como smile.jpg, es una creepypasta construida alrededor de una imagen de un perro con una sonrisa inquietante.",
        "La leyenda cuenta que la imagen circulaba acompañada de mensajes extraños y que quienes la recibían sentían la necesidad de compartirla. Es parte de la ficción que rodea al relato.",
        "Las versiones varían según el sitio donde se publiquen. El misterio de Smile Dog es un ejemplo de cómo una imagen puede convertirse en un símbolo del terror de internet."
      ]
    }
  };

  // BUSCADOR Y FILTROS

  const searchInput = $("#search");
  const cards = $$(".story-card");
  const filterButtons = $$(".filter");
  const resultCount = $("#result-count");
  const noResults = $("#no-results");

  let activeFilter = "todos";

  function filterStories() {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
      const category = card.dataset.category || "";
      const title = card.dataset.title || "";
      const text = card.textContent.toLowerCase();

      const matchesFilter =
        activeFilter === "todos" || category === activeFilter;
      const matchesSearch =
        title.includes(query) || text.includes(query);

      const show = matchesFilter && matchesSearch;
      card.hidden = !show;

      if (show) visible++;
    });

    resultCount.textContent = visible;
    noResults.hidden = visible !== 0;
  }

  searchInput.addEventListener("input", filterStories);

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;

      filterButtons.forEach(item => {
        item.classList.toggle("active", item === button);
      });

      filterStories();
    });
  });

  // EXPEDIENTES EMERGENTES

  const storyModal = $("#story-modal");
  const modalTitle = $("#modal-title");
  const modalCode = $("#modal-code");
  const modalImage = $("#modal-image");
  const modalText = $("#modal-text");
  const modalClose = $(".modal-close");

  function openStory(id) {
    const story = stories[id];
    if (!story) return;

    modalTitle.textContent = story.title;
    modalCode.textContent = story.code;
    modalImage.src = story.image;
    modalImage.alt = story.title;
    modalText.replaceChildren();

    story.paragraphs.forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      modalText.appendChild(p);
    });

    storyModal.classList.add("open");
    storyModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalClose.focus();
  }

  function closeStory() {
    storyModal.classList.remove("open");
    storyModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  $$("[data-story]").forEach(button => {
    button.addEventListener("click", () => {
      openStory(button.dataset.story);
    });
  });

  modalClose.addEventListener("click", closeStory);

  storyModal.addEventListener("click", event => {
    if (event.target === storyModal) closeStory();
  });

  // GALERÍA: IMÁGENES Y VIDEO

  const evidenceModal = $("#evidence-modal");
  const lightboxContent = $("#lightbox-content");
  const lightboxCaption = $("#lightbox-caption");
  const lightboxClose = $(".lightbox-close");

  function openEvidence(path, kind, label) {
    lightboxContent.replaceChildren();

    let media;

    if (kind === "video") {
      media = document.createElement("video");
      media.controls = true;
      media.autoplay = true;
      media.playsInline = true;
      media.preload = "metadata";
      media.src = path;
      media.setAttribute("aria-label", label);
    } else {
      media = document.createElement("img");
      media.src = path;
      media.alt = label;
    }

    lightboxContent.appendChild(media);
    lightboxCaption.textContent = label;

    evidenceModal.classList.add("open");
    evidenceModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (kind === "video") {
      const playPromise = media.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Si el navegador bloquea el autoplay, el usuario puede tocar Play.
        });
      }
    }

    lightboxClose.focus();
  }

  function closeEvidence() {
    const video = $("video", lightboxContent);

    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }

    evidenceModal.classList.remove("open");
    evidenceModal.setAttribute("aria-hidden", "true");
    lightboxContent.replaceChildren();
    document.body.classList.remove("modal-open");
  }

  $$(".evidence-item").forEach(item => {
    item.addEventListener("click", () => {
      openEvidence(
        item.dataset.evidence,
        item.dataset.kind,
        $(".evidence-label", item).textContent
      );
    });
  });

  lightboxClose.addEventListener("click", closeEvidence);

  evidenceModal.addEventListener("click", event => {
    if (event.target === evidenceModal) closeEvidence();
  });

  // CERRAR VENTANAS CON ESCAPE

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeStory();
      closeEvidence();
    }

    if (
      event.key === "/" &&
      !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
    ) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  // ANIMACIONES AL DESPLAZARSE

  const revealElements = $$(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("visible"));
  }

  // CURSOR PERSONALIZADO

  const cursor = $(".cursor-dot");
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  if (finePointer && cursor) {
    document.addEventListener("mousemove", event => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });

    $$("a, button, input").forEach(element => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
      });

      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });
  }

  // TERMINAL INTERACTIVA

  const terminalForm = $("#terminal-form");
  const terminalInput = $("#terminal-input");
  const terminalOutput = $("#terminal-output");

  const toast = $("#toast");
  let toastTimeout;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  function terminalLine(message, className = "") {
    const line = document.createElement("p");
    line.textContent = message;

    if (className) line.className = className;

    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  const commands = {
    ayuda() {
      terminalLine("COMANDOS DISPONIBLES:", "success");
      terminalLine("ayuda — mostrar comandos");
      terminalLine("archivos — consultar registros");
      terminalLine("hora — consultar hora local");
      terminalLine("limpiar — limpiar terminal");
      terminalLine("acceso 0333 — intentar acceso restringido");
    },

    archivos() {
      terminalLine("6 REGISTROS ENCONTRADOS.", "success");
      terminalLine("FILE_001 / SLENDER MAN");
      terminalLine("FILE_002 / JEFF THE KILLER");
      terminalLine("FILE_003 / BEN DROWNED");
      terminalLine("FILE_004 / THE RAKE");
      terminalLine("FILE_005 / MOMO");
      terminalLine("FILE_006 / SMILE DOG");
    },

    hora() {
      terminalLine("HORA LOCAL: " + new Date().toLocaleTimeString());
      terminalLine("LA HORA NO CONFIRMA NINGÚN FENÓMENO.");
    },

    limpiar() {
      terminalOutput.replaceChildren();
    },

    "acceso 0333"() {
      terminalLine("VERIFICANDO CREDENCIALES...", "error");
      terminalLine("ERROR: ACCESO DENEGADO.", "error");
      terminalLine("EL REGISTRO HA SIDO MARCADO.", "error");

      document.body.classList.remove("glitch");
      void document.body.offsetWidth;
      document.body.classList.add("glitch");

      showToast("ERROR 0x0000333 — ACCESO DENEGADO");
    }
  };

  terminalForm.addEventListener("submit", event => {
    event.preventDefault();

    const command = terminalInput.value.trim().toLowerCase();
    if (!command) return;

    terminalLine("guest@unknown:~$ " + command);
    terminalInput.value = "";

    if (command === "limpiar") {
      commands.limpiar();
      return;
    }

    if (commands[command]) {
      commands[command]();
    } else {
      terminalLine("COMANDO DESCONOCIDO. ESCRIBÍ 'ayuda'.", "error");
    }
  });

  // DETALLES VISUALES ALEATORIOS

  const heroTitle = $(".hero h1");
  let glitchTimer;

  function occasionalGlitch() {
    if (document.hidden) return;

    heroTitle.classList.remove("glitch");
    void heroTitle.offsetWidth;
    heroTitle.classList.add("glitch");

    clearTimeout(glitchTimer);
    glitchTimer = setTimeout(occasionalGlitch, 7000 + Math.random() * 9000);
  }

  glitchTimer = setTimeout(occasionalGlitch, 5000);

  // AVISOS PARA IMÁGENES QUE NO SE ENCUENTREN

  $$("img").forEach(image => {
    image.addEventListener("error", () => {
      image.classList.add("image-error");
      image.alt = image.alt + " (no se pudo cargar la imagen)";
    });
  });

  filterStories();
});
