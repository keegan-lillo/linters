if [ -n "$(git status -uno --porcelain)" ]; then
  echo "Working tree is not clean!";
  exit 1;
else
  echo "Working tree is clean.";
fi
