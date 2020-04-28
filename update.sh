


cd MagicMirrorMaster
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
