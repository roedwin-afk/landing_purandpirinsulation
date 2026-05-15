import { en } from "./en";
import { es } from "./es";
import type { TranslationKeys } from "./en";

export type Lang = "en" | "es";

export const languages: Record<Lang, string> = {
  en: "English",
  es: "Español",
};

export const defaultLang: Lang = "en";

const translations: Record<Lang, TranslationKeys> = {
  en,
  es,
};

/**
 * Detecta el idioma desde la URL usando el BASE_URL del proyecto.
 * Ejemplo: /landing_purandpirinsulation/es/ → "es"
 *          /landing_purandpirinsulation/     → "en"
 */
export function getLang(url: URL, base: string = "/"): Lang {
  const pathname = url.pathname.replace(base, "");
  if (pathname.startsWith("es")) return "es";
  return defaultLang;
}

/**
 * Retorna el objeto de traducciones para el idioma dado.
 */
export function useTranslations(lang: Lang): TranslationKeys {
  return translations[lang];
}

/**
 * Dado el pathname actual, retorna el pathname en el idioma alternativo.
 * Ejemplo: /landing/es/  → /landing/
 *          /landing/     → /landing/es/
 */
export function getAlternatePath(url: URL, base: string = "/"): string {
  const pathname = url.pathname.replace(base, "");
  const isEs = pathname.startsWith("es");

  if (isEs) {
    // Estamos en ES → link a EN (quitar el prefijo "es")
    const withoutEs = pathname.replace(/^es\/?/, "") || "";
    return `${base}${withoutEs}`;
  } else {
    // Estamos en EN → link a ES
    return `${base}es/${pathname}`;
  }
}