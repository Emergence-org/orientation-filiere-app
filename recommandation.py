FILIERE_SCORES = {
    'scientifique': {'maths': 3, 'physique': 3, 'svt': 2},
    'litteraire': {'francais': 3, 'philosophie': 2, 'anglais': 2},
    'informatique': {'maths': 3, 'technologie': 3},
    'medecine': {'svt': 3, 'chimie': 2},
}

def recommander_filiere(profil):
    scores = {}
    for filiere, matieres in FILIERE_SCORES.items():
        total = sum(profil.get(m, 0) * coeff for m, coeff in matieres.items())
        scores[filiere] = total
    return sorted(scores.items(), key=lambda x: x[1], reverse=True)
