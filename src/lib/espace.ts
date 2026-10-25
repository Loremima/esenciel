// Le site a deux espaces : les structures (CCAS, centres sociaux, EHPAD…) et les
// particuliers. Le menu, le pied de page et la prise de rendez-vous suivent
// l'espace de la page affichée.

export type Espace = 'structures' | 'particuliers' | 'commun';

export function espaceOf(pathname: string): Espace {
  if (pathname.startsWith('/structures') || pathname.startsWith('/conferences')) return 'structures';
  if (pathname.startsWith('/particuliers')) return 'particuliers';
  return 'commun';
}
