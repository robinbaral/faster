import en from './en';
import de from './de';
import es from './es';
import fr from './fr';
import ptBr from './pt-br';
import ja from './ja';
import type { LocaleCode } from './locales';

export type Strings = typeof en;

// A number and its unit ("14 hours", "72 h") never split across lines, as in the app.
const units = /(\d) (?=(?:h|min|hours?|minutes?|days?|Stunden|Minuten|Tage|heures?|jours|horas?|minutos?|días|dias)(?!\p{L}))/gu;

function keepUnits<T>(value: T): T {
  if (typeof value === 'string') return value.replace(units, '$1 ') as T;
  if (Array.isArray(value)) return value.map(keepUnits) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, keepUnits(v)])) as T;
  }
  return value;
}

export const strings = Object.fromEntries(
  Object.entries({ en, de, es, fr, 'pt-br': ptBr, ja }).map(([code, s]) => [code, keepUnits(s)]),
) as Record<LocaleCode, Strings>;
