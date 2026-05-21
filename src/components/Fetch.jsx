export async function Articles() {
  const response = await fetch("/data.json");
  if (!response.ok) throw new Error("Erreur de chargement");
  return await response.json();
}
