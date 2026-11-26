export function iniciarIdade() {
    const elemento = document.querySelector("[data-idade]");
    if (!elemento) return;

    // os meses começam em 0 por algum motivo...
    const nascimento = new Date(2005, 8, 17);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const aniversarioEsteAno = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate());
    if (hoje < aniversarioEsteAno) {
        idade--;
    }

    elemento.textContent = `${idade} anos`;
}
