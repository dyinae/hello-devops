Ez a projekt a Gábor Dénes Egyetem DEVOPS tantárgyának beadandója.
localhoston 8080-as porton elérhető kis egyszerű alkalmazás elkészítése, verziókövetése, majd dokerizálása a cél. 
Végül devcontainer alapon fejelsztői környezet létrehozása.

node.js és express van használva, docker desktoppal, visual code-val, github-al.

branchek:
mainbranch - ez a trunk
feature/update - funkció követkő

git parancsok:
git add 
git commit -m ""
git chekckout

indítás

npm install
npm start

buildelés

npm run build

dockerizálás

docker fileben meg kell határozni milyen alapértéken épüljön
docker build -t hello-devops:v1 .
docker run -p 8080:8080 hello-devops:v1
