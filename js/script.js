const categorias = document.querySelectorAll('.categoria');
const series = document.querySelectorAll('.serie');

categorias.forEach(categoria => {
  categoria.addEventListener('click', () => {
    categoria.classList.toggle('seleccionada');
    const categoriaSeleccionada = document.querySelectorAll('.seleccionada');
    const categoriasSeleccionadas = Array.from(categoriaSeleccionada).map(cat => cat.dataset.subcategoria);

    if (categoriasSeleccionadas.length === 0) {
      // Si no hay categorías seleccionadas, mostrar todas las series
      series.forEach(serie => serie.style.display = 'block');
    } else {
      series.forEach(serie => {
        const categoriasSerie = Array.from(serie.querySelectorAll('.clasificacion li')).map(c => c.textContent);
        const serieContieneCategorias = categoriasSeleccionadas.some(categoria => categoriasSerie.includes(categoria));
        serie.style.display = serieContieneCategorias ? 'block' : 'none';
      });
    }
  });
});

window.addEventListener('load', () => {
  categorias.forEach(categoria => categoria.classList.remove('seleccionada'));
});
