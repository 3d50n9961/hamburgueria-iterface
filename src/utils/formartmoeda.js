

export function FormatPrice(value) {
    if (typeof value !== 'number') {
      console.error('Valor inválido para FormatPrice:', value);
      return 'Preço inválido'; // Retorna uma mensagem amigável para valores inválidos
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value/100);
  }

