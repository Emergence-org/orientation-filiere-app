<<<<<<< HEAD
# orientation-filiere-app
=======
# Orientation Filière App

Application web pour aider les étudiants à trouver la filière qui correspond le mieux à leur profil.

## Fonctionnalités
- Saisie des compétences (maths, svt, français, etc.)
- Recommandation de filières (scientifique, littéraire, etc.)
- Frontend React (Next.js) et backend Django REST API

## Installation

### Backend (Django)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # sur Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

Accédez à l'application via `http://localhost:3000`

### API
POST vers `http://localhost:8000/api/orientation/`
```json
{
  "profil": {"maths": 5, "svt": 3, "francais": 2}
}
```

### Auteur
Développé par [ton nom ici]
>>>>>>> d0df1a0 (Initial commint)
