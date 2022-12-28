# Release 
set -e

echo "Current version:" $(grep version package.json | sed -E 's/^.*"([0-9][^"]+)".*$/\1/')
echo "Enter bump version e.g., decline | major | minor | patch | prerelease: "
read BUMP

# Bump/Save version
yarn version $BUMP
VERSION=$(grep version package.json | sed -E 's/^.*"([0-9][^"]+)".*$/\1/')

read -p "Releasing v$VERSION - are you sure? (y/n)" -n 1 -r
echo

# If user enter 'y' or 'Y' 
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Releasing v$VERSION ..."

    # Build
    yarn run build 

    # Changelog
    yarn run standard-changelog
    echo "Please check the git history and the changelog and press enter"
    read OKAY

    # Save Commits
    git add .
    git commit -m "release: v$VERSION"
    git push || git reset HEAD^

    # Tagging
    git tag "v$VERSION"
    git push origin refs/tags/v$VERSION

    # Publish 
    yarn npm publish || echo "try again `yarn npm publish`"
fi