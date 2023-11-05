// 原子量の表を作成
const periodicTable = {
  H: 1.008,
  C: 12.01,
  N: 14.01,
  O: 16.00,
  F: 19.00,
  Na: 22.99,
  Mg: 24.30,
  Al: 26.98,
  Si: 28.09,
  P: 30.97,
  S: 32.07,
  Cl: 35.45,
  K: 39.10,
  Ca: 40.08,
  Mn: 54.94,
  Fe: 55.85,
  Cu: 63.55,
  Zn: 65.38,
  Ag: 107.87,
  I: 126.90
};

function calculateMolecularWeight() {
  const formula = document.getElementById("formula").value;
  // 分子式を解析し、各原子を表す文字列を取得する
  const atoms = parseFormula(formula);
  // 各原子の原子量を計算する
  let molecularWeight = 0;
  for (const atom of atoms) {
    molecularWeight += getAtomicWeight(atom);
  }
  // 分子量を表示する
  document.getElementById("result").innerHTML = molecularWeight;
}

// 分子式を解析する関数
function parseFormula(formula) {
  // 分子式を解析する処理を実装する
  // 例えば、"H2O" を ["H", "H", "O"] という配列に変換する
  const atoms = [];
  let currentAtom = "";
  let currentCount = 1;
  for (const c of formula) {
    if (/[A-Z]/.test(c)) {
      if (currentAtom) {
        atoms.push(...Array(currentCount).fill(currentAtom));
        currentAtom = "";
        currentCount = 1;
      }
      currentAtom += c;
    } else if (/[a-z]/.test(c)) {
      currentAtom += c;
    } else if (/[0-9]/.test(c)) {
      currentCount = parseInt(c);
    }
  }
  if (currentAtom) {
    atoms.push(...Array(currentCount).fill(currentAtom));
  }
  return atoms;
}

// 原子量を取得する関数
function getAtomicWeight(atom) {
  // 原子記号を取得する
  const symbol = atom.match(/^[A-Z][a-z]?/)[0];
  // 原子記号から原子量を取得する
  let weight = periodicTable[symbol];
  return weight;
}

