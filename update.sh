
echo "Updating packages"

sudo apt update && sudo apt upgrade
sudo apt install -y nodejs


cd MagicMirror
git fetch
git pull
echo "Updated MagicMirro2 repo"

rm -rf modules/default
cp -r ../default modules
echo "Updated modules"

rm -rf config/*
cp ../config/* config
echo "Updated config"

npm install
