// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function for creating pAequor objects
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    // Method to mutate a random base in the DNA sequence
    mutate() {
      let i = Math.floor(Math.random() * 15);
      let base = returnRandBase();
      while (this.dna[i] === base) {
        base = returnRandBase();
      }
      this.dna[i] = base;
      return this.dna;
    },
    // Method to compare DNA with another pAequor object and log the common percentage
    compareDNA(object) {
      let commonCount = 0;
      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
          if (i === j && this.dna[i] === object.dna[j]) {
            commonCount++;
          }
        }
      }
      console.log('Specimen 1 and specimen 2 have ' + commonCount / 15 * 100 + '% DNA in common');
    },
    // Method to check if the DNA sequence is likely to survive
    willLikelySurvive() {
      let countC = 0;
      let countG = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === 'C') {
          countC++;
        } else if (this.dna[i] === 'G') {
          countG++;
        }
      };
      if (countC >= 60 * 15 / 100 || countG >= 60 * 15 / 100) {
        return true;
      } else {
        return false;
      }
    }
  }
};


const survivors = [];
let nr = 1;

// Create 30 pAequor objects with likely survival DNA
while (survivors.length < 30) {
  let specimen = pAequorFactory(nr, mockUpStrand());
  nr++;
  if (specimen.willLikelySurvive()) {
    survivors.push(specimen);
  }
}
console.log(survivors);








