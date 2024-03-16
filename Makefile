##
# Project Title
#
# @file
# @version 0.1



# end

run-build:
	npm run build

run-local:
	npm run dev -- --host

fix-image:
	convert ~/Downloads/IMG_4223.jpg -strip -resize 800\> alexander.jpg
