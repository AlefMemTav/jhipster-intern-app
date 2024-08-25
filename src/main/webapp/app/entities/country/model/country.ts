import { CountryName } from './country-name';
import { CountryTranslation } from './country-translations';

/**
 * Esta interface represente um DTO de País vindo da API: https://restcountries.com/v3.1/
 */
export interface Country {
  cca2: string /* Código do País */;
  name: CountryName /* Nome do País em inglês */;
  translations: CountryTranslation /* Traduções do nome do País, aqui somente o Português */;
}
