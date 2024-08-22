function calculateNumber(type, a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    let x = 0;
    switch (type) {
    case 'SUM':
	x = an + bn;
	break;
    case 'SUBTRACT':
	x = an - bn;
	break;
    case 'DIVIDE':
      if (bn === 0) {
            x = "Error";
      } else {
            x = an / bn;
      }
      break;
    }
    return x;
}

module.exports = calculateNumber;
