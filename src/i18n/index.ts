import en from './en';
import de from './de';
import es from './es';
import fr from './fr';
import ptBr from './pt-br';
import ja from './ja';
import type { LocaleCode } from './locales';

export type Strings = typeof en;

export const strings: Record<LocaleCode, Strings> = { en, de, es, fr, 'pt-br': ptBr, ja };
