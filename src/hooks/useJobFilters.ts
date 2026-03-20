import { useState, useMemo } from 'react';
import type { Job } from '../types/job';

export function useJobFilters(initialJobs: Job[]) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Función para agregar un filtro
  const addFilter = (filter: string) => {
    setActiveFilters((prev) => {
      if (prev.includes(filter)) return prev;
      return [...prev, filter];
    });
  };

  // Función para eliminar un filtro
  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  // Función para limpiar todos los filtros
  const clearFilters = () => {
    setActiveFilters([]);
  };

  // Lista de trabajos filtrada
  const filteredJobs = useMemo(() => {
    if (activeFilters.length === 0) {
      return initialJobs;
    }
    
    // Implementar la lógica para cruzar `role`, `level`, `languages` y `tools`
    return initialJobs.filter((job) => {
      // Extraemos todas las etiquetas asignadas la vacante
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
      
      // Creamos un Set temporal de las etiquetas del job para búsquedas rápidas (O(1))
      const tagSet = new Set(jobTags);
      
      // La vacante debe poseer TODOS los filtros que hayamos seleccionado activamente
      return activeFilters.every((filter) => tagSet.has(filter));
    });
  }, [initialJobs, activeFilters]);

  return {
    activeFilters,
    filteredJobs,
    addFilter,
    removeFilter,
    clearFilters
  };
}
