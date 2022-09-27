# before start 
# yarn npm login --publish
set -e

echo "Current version:" $(grep version package.json | sed -E 's/^.*"([0-9][^"]+)".*$/\1/')
echo "Enter version e.g., 4.0.1: "
read VERSION

read -p "Releasing v$VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing v$VERSION ..."

  # clear existing ts cache
  rm -rf node_modules/.rts2_cache

  # generate the version so that the changelog can be generated too
  yarn version --new-version $VERSION

  yarn run build

  # changelog
  yarn run changelog
  echo "Please check the git history and the changelog and press enter"
  read OKAY

  # commit and tag
  git add .
  git commit -m "release: v$VERSION"

  # publish
  git push
  git tag "v$VERSION"

  git push origin refs/tags/v$VERSION

  # commit
  yarn publish --new-version $VERSION
fi