

How to update the website

1. Export the new BibTeX from Zotero
2. Run the notebook scripts to convert the BibTex in well-formated `json` file
3. Make sure no field is missing in Zotero (author, year, ..)
4. Run `node index_script.js` to update the lunr index
5. To change the webpage presentation all happens in the `templates` files

TODO

* Add images / thumbnails with the papers
* Allow filtering by sports
* Add sports icons
* Add abstract or non-mandatory field
* Highlight searched keywords in results
* Better presentation of the page
