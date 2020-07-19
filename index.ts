import enUS from "./data/en-US.json";
import ptBR from "./data/pt-br.json";

type Locale = "pt-BR" | "en-US";

const dataFileLanguages = {
  "en-US": enUS,
  "pt-BR": ptBR,
};

interface CountryProps {
  alpha2: string;
  alpha3: string;
  name: string;
}

const getCountriesByLocale = (locale: Locale): CountryProps[] => {
  return dataFileLanguages[locale] ?? enUS;
};

export const listNames = (locale?: Locale) => {
  const countries = getCountriesByLocale(locale ?? "en-US");

  return countries.map((country) => country.name);
};

export const listAlpha2WithNames = (locale?: Locale) => {
  const countries = getCountriesByLocale(locale ?? "en-US");

  return countries.map((country) => ({ [country.alpha2]: country.name }));
};

export const listAlpha3WithNames = (locale?: Locale) => {
  const countries = getCountriesByLocale(locale ?? "en-US");

  return countries.map((country) => ({ [country.alpha3]: country.name }));
};
