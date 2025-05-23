from rest_framework.views import APIView
from rest_framework.response import Response
from .recommandation import recommander_filiere

class OrientationView(APIView):
    def post(self, request):
        profil = request.data.get('profil', {})
        recommandations = recommander_filiere(profil)
        return Response({"resultats": recommandations})
